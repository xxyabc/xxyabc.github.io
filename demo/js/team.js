
$(function () {
    setList()

    $(".teamItem").click((event) => {
        window.location.href = './teamDetail.html?id=' + event.currentTarget.id
    })

    //详情页
    let id = location.search.split('=')[1]
    if (id !== undefined) {
        let details = getMsg(id)
        printDetail(details)
    }
})


//渲染列表
function setList() {
    let facData = getData(0)
    let facHtml = ''
    $(".fac").html('')
    facData.forEach(item => {
        facHtml += '<div class="grid_3 teamItem" id="' + item.id + '">'
            + '<img src="' + item.photo + '">'
            + '<p>' + item.name + '</p></div>'
    })
    $('.fac').html(facHtml)

    let resData = getData(1)
    let resHtml = ''
    $(".res").html('')
    resData.forEach(item => {
        resHtml += '<div class="grid_3 teamItem" id="' + item.id + '">'
            + '<img src="' + item.photo + '">'
            + '<p>' + item.name + '</p></div>'
    })
    $('.res').html(resHtml)

    let engData = getData(2)
    let engHtml = ''
    $(".eng").html('')
    engData.forEach(item => {
        engHtml += '<div class="grid_3 teamItem" id="' + item.id + '">'
            + '<img src="' + item.photo + '">'
            + '<p>' + item.name + '</p></div>'
    })
    $('.eng').html(engHtml)

    let phdData = getData(3)
    let phdHtml = ''
    $(".phd").html('')
    phdData.forEach(item => {
        phdHtml += '<div class="grid_3 teamItem" id="' + item.id + '">'
            + '<img src="' + item.photo + '">'
            + '<p>' + item.name + '</p></div>'
    })
    $('.phd').html(phdHtml)

    let masData = getData(4)
    let masHtml = ''
    $(".mas").html('')
    masData.forEach(item => {
        masHtml += '<div class="grid_3 teamItem" id="' + item.id + '">'
            + '<img src="' + item.photo + '">'
            + '<p>' + item.name + '</p></div>'
    })
    $('.mas').html(masHtml)

    let aluData = getData(5)
    let aluHtml = ''
    $(".alu").html('')
    aluData.forEach(item => {
        aluHtml += '<div class="grid_3 teamItem" id="' + item.id + '">'
            + '<img src="' + item.photo + '">'
            + '<p>' + item.name + '</p></div>'
    })
    $('.alu').html(aluHtml)

    let visData = getData(6)
    let visHtml = ''
    $(".vis").html('')
    visData.forEach(item => {
        visHtml += '<div class="grid_3 teamItem" id="' + item.id + '">'
            + '<img src="' + item.photo + '">'
            + '<p>' + item.name + '</p></div>'
    })
    $('.vis').html(visHtml)

}

//获取全部数据----之后替换成接口
let allData = []
function getData(type) {
    allData = [{
        id: 0,
        type: 0,
        name: 'qweqe',
        photo: './image/blank.jpeg'
    }, {
        id: 1,
        type: 1,
        name: 'wewrwq',
        photo: './image/blank.jpeg'
    }, {
        id: 2,
        type: 1,
        name: 'fsfs',
        photo: './image/blank.jpeg'
    }, {
        id: 3,
        type: 1,
        name: 'sgsfg',
        photo: './image/blank.jpeg'
    }, {
        id: 4,
        type: 2,
        name: 'afasf',
        photo: './image/blank.jpeg'
    }, {
        id: 5,
        type: 2,
        name: 'ntmn',
        photo: './image/blank.jpeg'
    }, {
        id: 6,
        type: 3,
        name: 'yjmytu',
        photo: './image/blank.jpeg'
    }, {
        id: 7,
        type: 4,
        name: 'wgvgre',
        photo: './image/blank.jpeg'
    }]

    return allData.filter(item => {
        return item.type == type
    })
};


//根据id获取详细信息----之后替换成接口
function getMsg(id) {
    return {
        id: 0,
        type: 0,
        name: 'qweqe',
        photo: './image/blank.jpeg',
        sex: 0,//0男1女
        birth: '1990.02',
        email: '123123@qq.com',
        phone: '13344442222',
        unit: 'CASIA',
        title: 'Student',
        field: 'Intelligent game',
        biography: 'Zhipeng Zhang is a Ph.D candidate working on computer vision and deep learning at Institute of automation, Chinese Academy of Sciences (CASIA) as of 2017. Before that he received the bachelor’s degree at University of Electronic Science and Technology of China (UESTC) in 2017. He worked as an intern in Microsoft Research Asia in 2019.10-2020.6. His research interest includes video object tracking, segmentation and detection, neural architecture search, etc.',
        honours: ['2019年获国家优秀青年基金', '2018年获中国电子学会优秀科技工作者', '2017年获人工智能学会技术发明一等奖（第二完成人）'],
        research: [{
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
        }],
        publications: [{
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
        }],
        more: {
            Blog: 'https://www.baidu.com',
            Github: 'https://www.baidu.com',
            Talks: 'https://www.baidu.com',
            'Google scholar': 'https://www.baidu.com',
        }
    }
}

//渲染详情页
function printDetail(item) {
    $("#photo").attr('src', item.photo)
    $("#name").html(item.name)
    $("#birth").html(item.birth)
    $("#email").html(item.email)
    $("#phone").html(item.phone)
    $("#unit").html(item.unit)
    $("#title").html(item.title)
    $("#field").html(item.field)
    $('#biography').html(item.biography)

    let resHtml = ''
    item.research.forEach(data => {
        resHtml += '<li class="box_6 text_3">' +
            '<a href="' + data.link + '">' + data.title + '</a>' +
            '<p>' + data.abstract + '</p></li>'
    })
    $('#research').html(resHtml)

    let pubHtml = ''
    item.publications.forEach(data => {
        let authors = ''
        data.author.forEach(p => {
            authors += p.name + ', '
        })
        pubHtml += '<li class="box_6 text_3"><span>' + authors.slice(0, authors.length - 2) + '. </span>' +
            '<a href="./pubDetail.html?id=' + data.id + '">' + data.title + '. </a>'
        if (data.journal) {
            pubHtml += '<span class="conference">' + data.journal + '.</span>'
        }
        pubHtml += '</li>'
    })
    $("#publications").html(pubHtml)

    let honHtml = ''
    item.honours.forEach(data => {
        honHtml += '<li class="box_6 text_3"><span class="conference">' + data + '</span></li>'
    })
    $('#honours').html(honHtml)

    let moreHtml = '<div class="confButtons">'
    for (key in item.more) {
        moreHtml += '<button><a href="' + item.more[key] + '">' + key + '</a></button>'
    }
    $('#more').html(moreHtml)
}