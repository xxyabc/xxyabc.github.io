//获取自己的谷歌日历---自己的日历订阅了aideadline
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,listYear'
        },
        displayEventTime: false, // don't show the time column in list view

        // THIS KEY WON'T WORK IN PRODUCTION!!!
        // To make your own Google API key, follow the directions here:
        // http://fullcalendar.io/docs/google_calendar/
        // googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',
        googleCalendarApiKey: 'AIzaSyDU-t5btisBmSfqYCEureOpbmooHmZZ6kg',//自己的

        // US Holidays
        // events: 'en.usa#holiday@group.v.calendar.google.com',
        events: {
            googleCalendarId: 'gr0citksi249otallnaeccfajle6id2m@import.calendar.google.com'
        },

        eventClick: function (arg) {
            console.log(arg.event)
            // opens events in a popup window
            window.open(arg.event.url, 'google-calendar-event', 'width=700,height=600');

            arg.jsEvent.preventDefault() // don't navigate in main tab
        },

        loading: function (bool) {
            document.getElementById('loading').style.display =
                bool ? 'block' : 'none';
        }

    });
    calendar.render();
});


$(function () {
    $("#owl").html('')
    let html = ''
    let newsData = getNews();
    newsData.forEach(item => {
        html += '<div class="item"><p class="text_3">[' + item.time + ']<a target="_blank" href="' + item.link + '">' + item.title + '</a><br/>' + item.abstract + '</p></div>'
    })
    $("#owl").html(html)
    $('#owl').data("owlCarousel").reinit({
        items: 1,
        autoPlay: true,
    });


    $.ajax({
        type: 'POST',
        url: 'https://fk.aiseep.com/risk/h5/pzhy/getPzhyRecords',
        data: {
            anchangId: 61
        },
        success: function (data) {
            console.log(data)
        }
    });
    let data = {
        pageNum: 1,
        pageSize: 10
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'http://holdem.ia.ac.cn:9002/resourceInfo/searchByKeyWords',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data)
        }
    });
    $.ajax({
        type: 'get',
        url: 'https://aideadlin.es/?sub=ML,CV,NLP,RO,SP,DM',
        success: function (data) {
            console.log(data)
        }
    })
})


//获取全部新闻数据----之后替换成接口
function getNews() {
    return [{
        time: '2021-7-8',
        title: 'Vivamus at magna non nunc tristique rhoncus. ',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        link: 'https://www.baidu.com'
    }, {
        time: '2020-6-1',
        title: 'Vivamus at magna non nunc tristique rhoncus. ',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        link: 'https://www.baidu.com'
    }, {
        time: '2020-5-18',
        title: 'Vivamus at magna non nunc tristique rhoncus. ',
        abstract: 'Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. In vitae varius augue, eu consectetur ligula.',
        content: null,
        link: 'https://www.baidu.com'
    }]
}