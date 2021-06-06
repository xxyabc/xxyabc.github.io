

$(function () {
    let html = '';
    let datas = getData();
    resetList(datas)

    //点击引用
    $(".cite").click((event) => {
        let id = event.currentTarget.id
        $("#citeContent").html(getMsg(id).cite)
        $(".tanchuang").toggle();
    })

    //详情页
    let id = location.search.split('=')[1]
    if (id) {
        let details = getMsg(id)
        printDetail(details)
        $(".cite").click((event) => {
            let id = event.currentTarget.id
            $("#citeContent").html(getMsg(id).cite)
            $(".tanchuang").toggle();
        })
    }
})

//关闭弹窗
$(".close").click(() => {
    $(".tanchuang").hide();
})

//点击种类tab
$(".tabHeader span").click((event) => {
    target = event.currentTarget.className
    if (target == -1) {
        $(".tabHeader span").css('color', '#363535')
        let datas = getData();
        resetList(datas)
    } else {
        $(".tabHeader span").css('color', '#363535')
        event.currentTarget.style.color = '#01918c'
        resetList(getData(target))
    }

})

//点击关键词list
$("#keywords li").click(event => {
    $(".tabHeader span").css('color', '#363535')
    console.log(event.currentTarget.className)
    resetList(getData(0))
})


//渲染列表
function resetList(lists) {
    var sortedObjKeys = Object.keys(lists).sort((a, b) => {
        return b - a;
    });

    $("#researchList").html('');
    let html = '';
    for (let index in sortedObjKeys) {
        if (lists[sortedObjKeys[index]].length > 0) {
            html += '<div class="box_6"><h3 class="text_2 color_2">' + sortedObjKeys[index] + '</h3>'
            lists[sortedObjKeys[index]].forEach(item => {
                let authors = ''
                item.author.forEach(p => {
                    authors += p.name + ', '
                })
                switch (item.type) {
                    case 0:
                        item.icon = './image/paper.png'
                        break;
                    case 1:
                        item.icon = './image/journal.png'
                        break;
                    case 2:
                        item.icon = './image/patent.png'
                        break;
                    default:
                        item.icon = './image/paper.png'
                }
                html += '<div class="caption"><p class="text_3"><img src="' + item.icon + '" style="width:15px;padding:4px">'
                    + authors.slice(0, authors.length - 2) + '. ' +
                    '<a href="./pubDetail.html?id=' + item.id + '">' + item.title + '. </a>'
                if (item.journal) {
                    html += '<span class="conference">' + item.journal + '.</span>'
                }
                html += '</p>'
                if (item.keyWords) {
                    html += '<p class="text_5">KeyWords: ' + item.keyWords + '</p>'
                }
                html += '</div>'
                    + '<div class="confButtons">'
                if (item.pdf) {
                    html += '<button><a href="' + item.pdf + '">PDF</a></button>'
                }
                if (item.code) {
                    html += '<button><a href="' + item.code + '">Code</a></button>'
                }
                if (item.cite) {
                    html += '<button class="cite" id="' + item.id + '">Cite</button>'
                }
                html += '</div><div class="clearfix"></div>'
            })
            html += '</div>'
        }
    }
    $("#researchList").html(html);
}


//获取全部数据----之后替换成接口
let allData = {}
function getData(type = 'all') {
    allData = {
        '2021': [{
            id: 0,
            type: 0,
            year: '2021',
            title: 'Open-book video captioning with retrieve-copy-generate network',
            keyWords: 'sdfsg, afsdg, saegs, segr',
            author: [{
                id: 1,
                name: 'Ziqi Zhang'
            }, {
                id: 2,
                name: 'Zhongang Qi'
            }, {
                id: 4,
                name: 'Chunfeng Yuan'
            }],
            journal: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
            abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
            cite: '@article{ding2020web, \n\40\40author = {Ding, Xinmiao and Li, Bing and Li, Yangxi and Guo, Wen and Liu, Yao and Xiong, Weihua and Hu, Weiming},\n\40\40journal = {IEEE Transactions on Circuits and Systems for Video Technology},\n\40\40publisher = {IEEE},\n\40\40title = {Web Objectionable Video Recognition Based on Deep Multi Instance Learning with Representative Prototypes Selection},\n\40\40year = {2020}\n}',
            pdf: 'https://www.baidu.com',
            code: 'https://www.baidu.com',
            link: ''
        }],
        '2020': [{
            id: 1,
            type: 1,
            year: '2020',
            title: 'Open-book video captioning with retrieve-copy-generate network',
            keyWords: 'sdfsg, afsdg, saegs, segr',
            author: [{
                id: 1,
                name: 'Ziqi Zhang'
            }, {
                id: 2,
                name: 'Zhongang Qi'
            }, {
                id: 4,
                name: 'Chunfeng Yuan'
            }],
            journal: 'IEEE Transactions on Circuits and Systems for Video Technology',
            abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
            cite: '@article{ding2020web, \n\40\40author = {Ding, Xinmiao and Li, Bing and Li, Yangxi and Guo, Wen and Liu, Yao and Xiong, Weihua and Hu, Weiming},\n\40\40journal = {IEEE Transactions on Circuits and Systems for Video Technology},\n\40\40publisher = {IEEE},\n\40\40title = {Web Objectionable Video Recognition Based on Deep Multi Instance Learning with Representative Prototypes Selection},\n\40\40year = {2020}\n}',
            pdf: 'https://www.baidu.com',
            code: '',
            link: ''
        }, {
            id: 2,
            type: 2,
            year: '2020',
            title: 'Open-book video captioning with retrieve-copy-generate network',
            keyWords: '',
            author: [{
                id: 1,
                name: 'Ziqi Zhang'
            }, {
                id: 2,
                name: 'Zhongang Qi'
            }, {
                id: 4,
                name: 'Chunfeng Yuan'
            }],
            journal: '',
            abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
            cite: '@article{ding2020web, \n\40\40author = {Ding, Xinmiao and Li, Bing and Li, Yangxi and Guo, Wen and Liu, Yao and Xiong, Weihua and Hu, Weiming},\n\40\40journal = {IEEE Transactions on Circuits and Systems for Video Technology},\n\40\40publisher = {IEEE},\n\40\40title = {Web Objectionable Video Recognition Based on Deep Multi Instance Learning with Representative Prototypes Selection},\n\40\40year = {2020}\n}',
            pdf: '',
            code: '',
            link: 'https://www.baidu.com'
        }]
    };

    let resultObj = {}
    for (let year in allData) {
        let result = []
        allData[year].forEach(item => {
            if (item.type == type) {
                result.push(item)
            }
        })
        resultObj[year] = result;
    }

    return type === 'all' ? allData : resultObj;
}

//根据id获取详细信息----之后替换成接口
function getMsg(id) {
    for (let year in allData) {
        for (let i = 0; i < allData[year].length; i++) {
            if (allData[year][i].id == id) {
                return allData[year][i]
                break
            }
        }
    }
}


//渲染详情页
function printDetail(item) {
    $("#paperContent").html('');
    let html = '';
    html += '<h2 class="header_2 indent_4">' + item.title + '</h2>'

    let authors = ''
    item.author.forEach(p => {
        authors += p.name + ', '
    })
    html += '<p>' + authors.slice(0, authors.length - 2) + ' [' + item.year + ']</p>'

    if (item.keyWords) {
        html += '<p><span style="font-weight:bold">KeyWords: </span>' + item.keyWords + '</p>'
    }

    html += '<br />'
        + '<p class="text_2">Abstract</p>'
        + '<p>' + item.abstract + '</p><br />'

    switch (item.type) {
        case 0:
            item.typeText = 'Conference paper'
            break;
        case 1:
            item.typeText = 'Journal article'
            break;
        case 2:
            item.typeText = 'Patent'
            break;
        default:
            item.typeText = 'Conference paper'
    }
    html += '<p><span style="font-weight:bold">Type: </span>' + item.typeText + '</p><p>'

    if (item.journal) {
        html += '<p><span style="font-weight:bold">Publication: </span>' + item.journal + '</p>'
    }

    html += '<br />'
    + '<div class="confButtons">'
    if (item.pdf) {
        html += '<button><a href="' + item.pdf + '">PDF</a></button>'
    }
    if (item.code) {
        html += '<button><a href="' + item.code + '">Code</a></button>'
    }
    if (item.cite) {
        html += '<button class="cite" id="' + item.id + '">Cite</button>'
    }
    html += '</div>'

    $("#paperContent").html(html);
}


