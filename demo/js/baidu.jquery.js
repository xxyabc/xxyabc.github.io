(function ($) {
    "use strict";
    const BaiduMap = function (element, options) {
        this.$element = $(element);
        this.init(options);
    };
    BaiduMap.prototype = {
        constructor: BaiduMap,
        /*
        初始化地图
         */
        init: function (options) {
            const me = this, $el = me.$element;
            $.each(options, function (key, value) {
                me[key] = value;
            });

            me.initElementStyle();

            //初始化地图
            const map = new BMap.Map($el[0]);
            map.addControl(new BMap.MapTypeControl({
                mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP]
            }));
            map.addControl(new BMap.NavigationControl());

            me.initLocalCity(map);

            //启用滚轮放大缩小，默认禁用
            map.enableScrollWheelZoom();

            //启用地图惯性拖拽，默认禁用
            map.enableContinuousZoom();

            //单击获取点击的经纬度
            if (me.clickSelect) {
                map.addEventListener("click", function (e) {
                    me.onMapClick(e);
                });
            }


            me.mapObject = map;
        },

        getBoundary: function (city) {
            const me = this, map = me.getMap(),
                bdary = new BMap.Boundary();
            //获取行政区域
            bdary.get(city, function (rs) {
                //清除地图覆盖物
                map.clearOverlays();
                //行政区域的点有多少个
                var count = rs.boundaries.length;
                if (count === 0) {
                    alert('未能获取当前输入行政区域');
                    return;
                }
                var pointArray = [];
                for (var i = 0; i < count; i++) {
                    //建立多边形覆盖物
                    var ply = new BMap.Polygon(rs.boundaries[i], {
                        strokeWeight: 2,
                        strokeColor: "#ff0000",
                        strokeOpacity: 0.0,
                        fillOpacity: 0.3,
                        fillColor: "#DBECC8"
                    });
                    //添加覆盖物
                    map.addOverlay(ply);
                    pointArray = pointArray.concat(ply.getPath());
                }
                map.setViewport(pointArray);    //调整视野
                me.raise('polygonComplete', [city, count]);
            });

        },

        /**
         * 自动搜索完成
         */
        autoComplete: function (autoCompleteEl) {
            const me = this, map = me.getMap(), el = $('#' + autoCompleteEl),
                f = new BMap.Autocomplete({input: autoCompleteEl, location: map});
            f.setInputValue(el.val());
            f.addEventListener("onconfirm", function (res) {
                var d = res.item.value,
                    myValue = d.province + d.city + d.district + d.street + d.business;

                function e() {
                    var h = c.getResults().getPoi(0).point;
                    map.centerAndZoom(h, me.defaultZoom);
                    me.setGeocoder(h);
                    me.setMapMarker(h);
                    map.panTo(h);
                    el.val(myValue);
                }

                var c = new BMap.LocalSearch(map, {onSearchComplete: e});
                c.search(myValue)
            })
        },

        /**
         * 初始化地图层样式
         */
        initElementStyle: function () {
            const me = this, $el = me.$element;
            if (!$.isPlainObject(me.style)) {
                return;
            }
            $el.css(me.style);
        },

        /**
         * 定义事件
         * @param event
         * @param params
         */
        raise: function (event, params) {
            const self = this, e = $.Event(event);
            if (params !== undefined) {
                self.$element.trigger(e, params);
            } else {
                self.$element.trigger(e);
            }
            let out = e.result || false;
            if (!out) {
                return;
            }
            switch (event) {
                case 'markerselect':
                case 'markerclick':
                case 'search':
                case 'markererror':
                case 'polygonComplete':
                    break;
                default:
                    break;
            }
        },

        /**
         * 根据IP地址定位地图中心位置
         */
        initLocalCity: function ($map) {
            const me = this;
            if (!me.authLocalCity) {
                //默认位置
                $map.centerAndZoom(me.defaultCenter, me.zoom || me.defaultZoom);
                return;
            }
            const myCity = new BMap.LocalCity();
            myCity.get(function (result) {
                var cityName = result.name;
                $map.centerAndZoom(cityName, me.zoom || me.defaultZoom);
            });
        },

        /**
         * 切换地图中心点
         * @param val
         */
        switchCenter: function (name, zoom) {
            const me = this, map = me.getMap();
            map.centerAndZoom(name || me.defaultCenter, zoom || me.defaultZoom);
        },

        /**
         * @private
         * 百度地图点击事件
         */
        onMapClick: function (e) {
            const me = this, map = me.getMap();
            if (!map) {
                return;
            }
            me.clearData();
            const pt = e.point,
                point = new BMap.Point(pt.lng, pt.lat);
            me.setMapMarker(point);
        },

        /**
         * 设置通过标签
         * @param point
         */
        setMapMarker: function (point, opts) {
            const me = this, map = me.getMap();
            if (!map) {
                return;
            }
            const marker = new BMap.Marker(point, opts); // 创建标注
            map.addOverlay(marker); // 将标注添加到地图中
            return marker;
        },

        /**
         * 通过坐标解析位置
         * @param point
         * @returns {*|{x, y}}
         */
        setGeocoder: function (point) {
            const me = this, map = me.getMap();
            if (!map) {
                return;
            }
            return new BMap.Geocoder().getLocation(point, function (res) {
                me.raise('markerselect', [res]);
            });
        },

        /**
         * @public
         * 百度地图关键字搜索
         */
        searchLocal: function (search) {
            const me = this, map = me.getMap();
            let beforeSearch = me.beforeSearch;
            if (beforeSearch == search || !map) {
                return;
            }
            const local = new BMap.LocalSearch(map, {
                renderOptions: {map: map},
                onSearchComplete: function (results) {
                    // 判断状态是否正确
                    if (local.getStatus() != BMAP_STATUS_SUCCESS) {
                        return;
                    }
                    me.raise('search', results);
                }
            });
            local.search(search);
            me.beforeSearch = search;
        },

        /**
         * @public
         * 设置指定位置到地图
         * @param {Number} lng 需要设置的经度
         * @param {Number} lat 需要设置的纬度
         */
        setLocation: function (lng, lat) {
            const me = this, map = me.getMap();
            if (map == null) {
                return;
            }
            me.clearData();
            const point = me.setMarker({'lng': lng || me.defaultLng, 'lat': lat || me.defaultLat});
            if (point) {
                map.centerAndZoom(point, me.defaultZoom);
                map.panTo(point);
            }
        },

        /**
         * 设置数据到地图中
         * @param {Arrays/Object} rows 需要设置的数据
         * @Examples {
                lng : 116.404,
                lat : 39.915,
                iconUrl : 'http://xxx.xxxx.com/assets/image/icon/map.jpg',
                icon : 'iconNmae'//iconUrlConfig.key,
                content : '标签点说明',
                zoom : 12 //倍数
            }
         */
        setData: function (rows) {
            if (!rows) {
                return;
            }
            if (!$.isArray(rows) && $.isPlainObject(rows)) {
                rows = [rows];
            }
            const me = this, map = me.getMap();
            if (map == null) {
                return;
            }
            me.clearData();
            let cfg;
            for (let i = 0, len = rows.length; i < len; i++) {
                cfg = rows[i];
                me.setDataMarker(cfg);
            }
        },

        /**
         * 清空标签信息
         */
        clearData: function () {
            const me = this, map = me.getMap();
            map.clearOverlays();
        },

        /**
         * 设置客户数据到指定位置到地图
         * @Examples {
                lng : 116.404,
                lat : 39.915,
                iconUrl : 'http://xxx.xxxx.com/assets/image/icon/map.jpg',
                icon : 'iconNmae'//iconUrlConfig.key,
                content : '标签点说明',
                zoom : 12 //倍数
            }
         * @param {Number} lng 需要设置的经度
         * @param {Number} lat 需要设置的纬度
         * @param {Integer} zoom 比例，默认:16
         * @param {String} icon 图标键名,从iconConfig配置中获取
         * @param {String} iconUrl 图标路径，本地路径或绝对路径
         * @param {html/String} content 标记内容
         */
        setDataMarker: function (cfg) {
            const me = this, map = me.getMap();
            if (map == null) {
                me.raise('markererror', ['地图对象不存在', cfg]);
                return;
            }

            if (!$.isPlainObject(cfg)) {
                console.error('参数错误:' + cfg);
                me.raise('markererror', ['参数格式错误，要求为JSON Object', cfg]);
                return;
            }
            const lng = cfg.lng, lat = cfg.lat, content = cfg.content, zoom = cfg.zoom || me.defaultZoom;
            if (!$.isNumeric(lng) || !$.isNumeric(lat)) {
                me.raise('markererror', ['经纬度错误[lng|lat]', cfg]);
                return;
            }
            const point = new BMap.Point(lng, lat),
                icon = cfg.iconUrl ? cfg.iconUrl : me.getIcon(cfg.icon),
                objIcon = me.buildIcon(icon),
                marker = me.setMapMarker(point, {icon: objIcon}); // 创建标注
                marker.disableMassClear();

            if (content && content != '') {
                const infoWindow = new BMap.InfoWindow(content);  // 创建信息窗口对象
                marker.addEventListener("click", function () {
                    this.openInfoWindow(infoWindow);
                    me.raise('markerclick', [me, marker, infoWindow]);
                });
            }
            return point;
        },

        /**
         * 构建地图ICON对象
         * @param icon icon图标地址
         * @returns {BMap.Icon}
         */
        buildIcon: function (icon) {
            const me = this, cfg = me.iconConfig || {},
                size = new BMap.Size(cfg.width || 32, cfg.height || 32);
            return new BMap.Icon(icon || me.iconUrlConfig.defaultIcon, size, {imageSize: size});
        },

        /**
         * 获取icon地址，指定name不存在时，返回默认地址
         * @param name
         * @returns {*}
         */
        getIcon: function (name) {
            const me = this;
            if (!name) {
                return me.iconUrlConfig.defaultIcon;
            }
            return me.iconUrlConfig[name] || me.iconUrlConfig['defaultIcon'];
        },

        /**
         * 获取地图对象
         * @returns {BMap.Map|*}
         */
        getMap: function () {
            return this.mapObject;
        }
    };

    /**
     * 入口
     * @param option
     */
    $.fn.baidumap = function (option) {
        var args = Array.apply(null, arguments);
        args.shift();
        return this.each(function () {
            var $this = $(this),
                data = $this.data('baidumap'),
                options = typeof option === 'object' && option;

            if (!data) {
                data = new BaiduMap(this, $.extend({}, $.fn.baidumap.defaults, options, $(this).data()));
                $this.data('baidumap', data);
            }
            //调用执行方法
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };
    $.fn.baidumap.defaults = {
        /**
         * @property
         * @type Integer
         * @description 默认倍数
         * @default {Integer} 12
         */
        defaultZoom: 12,
        /**
         * @property
         * @type String
         * @description 默认中心点
         * @default {String} 中国
         */
        defaultCenter: '中国',

        /**
         * @property
         * @type Number
         * @description 默认经度
         * @default {Number} 116.404
         */
        defaultLng: 116.404,

        /**
         * @property
         * @type Number
         * @description 默认纬度
         * @default {Number} 39.915
         */
        defaultLat: 39.915,

        /**
         * @property
         * @type boolean
         * @description 自动城市定位
         * @default {boolean} true
         */
        authLocalCity: true,

        /**
         * @property
         * @type boolean
         * @description 是否取用点击选择
         * @default {boolean} true
         */
        clickSelect: false,

        /**
         * 标签图标配置
         */
        iconConfig: {
            width: 32,
            height: 32
        },
        /**
         * 定义常使用的icon地址
         */
        iconUrlConfig: {
            defaultIcon: "images/online.png",
            online: "images/online.png",
            offline: "images/offline.png"
        }
    }
    $.fn.baidumap.Constructor = BaiduMap;
})(window.jQuery);