

$(function () {
    let html = '';
    let datas = getData();

    datas.forEach(item => {
        switch (item.type) {
            case 0:
                item.typeText = 'cop'
                break;
            case 1:
                item.typeText = 'mat'
                break;
            case 2:
                item.typeText = 'pro'
                break;
            case 3:
                item.typeText = 'sys'
                break;
        }
        html += '<div class="element-item grid_4 ' + item.typeText + '">'
            + '<div class="box_7">'
            + '<div class="img-wrap">'
            + '<img src="' + item.image + '" alt="Image" />'
            + '</div><div class="caption">'
            + '<h3 class="text_2 color_2"><a href="' + item.link + '">' + item.title + '</a></h3>'
            + '<p class="text_3">' + item.abstract + '</p>'
            + '<a target="_blank" class="btn_2" href="' + item.link + '">read more</a></div>'
            + '</div></div>'
    })
    $('.isotope').isotope('insert', $(html))
    setTimeout(() => {
        $('.isotope').isotope({ filter: '*' });
    }, 100)

})


//获取全部数据----之后替换成接口
function getData() {
    return [{
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi7.hexun.com%2F2019-06-09%2F197465117.jpg&refer=http%3A%2F%2Fi7.hexun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625221227&t=266f3492a13395ae4d6296a8a4dad5b5',
        type: 0,
        title: '谷歌足球',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        video: null,
        link: 'https://www.baidu.com'
    }, {
        image: 'https://img0.baidu.com/it/u=237420160,1590716618&fm=26&fmt=auto&gp=0.jpg',
        type: 0,
        title: '麻将',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        video: null,
        link: 'https://www.baidu.com'
    }, {
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F20171128%2FO1Zr-fypatmv0000858.png&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625225179&t=1449877e1daeeeebce320932445a00ba',
        type: 0,
        title: '德州扑克',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        video: null,
        link: 'https://www.baidu.com'
    }, {
        image: './image/ddtf.png',
        type: 2,
        title: 'DD突防',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        video: null,
        link: 'https://www.baidu.com'
    }, {
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-1e43520eea2cdac81b4b4d9ee0439209_r.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625225250&t=e9af3f460bc817aff49e4aa8262f2300',
        type: 2,
        title: 'BQ推演',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        video: null,
        link: 'https://www.baidu.com'
    }, {
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019ee85767c4c80000012e7e101d12.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625226278&t=0872b68b1087c6e04fabd87fac4f325c',
        type: 1,
        title: 'Atari',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        video: null,
        link: 'https://www.baidu.com'
    }, {
        image: 'https://vdposter.bdstatic.com/5444efddee36614e1e0a768f5a1c53a7.jpeg',
        type: 1,
        title: '王者荣耀',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        video: null,
        link: 'https://www.baidu.com'
    }, {
        image: './image/openholdem.jpg',
        type: 3,
        title: 'OpenHoldem',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        video: null,
        link: 'http://holdem.ia.ac.cn/#/login'
    }, {
        image: './image/yinqing.png',
        type: 3,
        title: '训练引擎',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        video: null,
        link: 'https://www.baidu.com'
    }]
}

