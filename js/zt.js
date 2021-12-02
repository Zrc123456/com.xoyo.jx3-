$(window).load(function () {

    $('.center li').eq(0).animate({
        top: 0,
        left: 0,
        width: 122
    }, 400)
    $('.center li').eq(1).animate({
        top: 0,
        left: 120,
        width: 122
    }, 450)
    $('.center li').eq(2).animate({
        top: 0,
        left: 240,
        width: 122
    }, 500)
    $('.center li').eq(3).animate({
        top: 0,
        left: 360,
        width: 122
    }, 550)
    $('.center li').eq(4).animate({
        top: 0,
        left: 480,
        width: 122
    }, 600)
    $('.center li').eq(5).animate({
        top: 0,
        left: 600,
        width: 122
    }, 650)
    $('.center li').eq(6).animate({
        top: 0,
        left: 720,
        width: 122
    }, 700)
    $('.center li').eq(7).animate({
        top: 0,
        left: 840,
        width: 122
    }, 750)
    $('.center li').eq(8).animate({
        top: 0,
        left: 970,
        width: 122
    }, 800)
    $('.center li').eq(9).animate({
        top: 0,
        left: 1100,
        width: 122
    }, 850)
    $('.center li').eq(10).animate({
        top: 0,
        left: 1220,
        width: 122
    }, 900)
    $('ol').animate({
        left: 0,
        bottom: -15
    }, 2000)
});
$('.center li').mouseover(function () {
    let index = $(this).index()
    if (index == 0) {
        $('ol li').eq(0).css({
            'background-image': 'url(./img/do123wnload.png)'
        }).html(null)
    } else {

        $('ol li').eq(0).css({
            'background-image': 'none'
        }).html(2019)
    }
    if (index == 1) {
        $('ol li').eq(1).css({
            'background-image': 'url(./img/9.cb0df4816.png)'
        }).html(null)
    } else {

        $('ol li').eq(1).css({
            'background-image': 'none'
        }).html(2018)
    }
    if (index == 2) {
        $('ol li').eq(2).css({
            'background-image': 'url(./img/8.b4b61530.png)'
        }).html(null)
    } else {

        $('ol li').eq(2).css({
            'background-image': 'none'
        }).html(2017)
    }
    if (index == 3) {
        $('ol li').eq(3).css({
            'background-image': 'url(./img/7.70c2927a1.png)'
        }).html(null)
    } else {

        $('ol li').eq(3).css({
            'background-image': 'none'
        }).html(2016)
    }
    if (index == 4) {
        $('ol li').eq(4).css({
            'background-image': 'url(./img/6.3d702368a7.png)'
        }).html(null)
    } else {

        $('ol li').eq(4).css({
            'background-image': 'none'
        }).html(2015)
    }
    if (index == 5) {
        $('ol li').eq(5).css({
            'background-image': 'url(./img/2.f9909c6a.png)'
        }).html(null)
    } else {

        $('ol li').eq(5).css({
            'background-image': 'none'
        }).html(2014)
    }
    if (index == 6) {
        $('ol li').eq(6).css({
            'background-image': 'url(./img/4.53ce91e99.png)'
        }).html(null)
    } else {

        $('ol li').eq(6).css({
            'background-image': 'none'
        }).html(2013)
    }
    if (index == 7) {
        $('ol li').eq(7).css({
            'background-image': 'url(./img/1.641ec9f6.png)'
        }).html(null)
    } else {

        $('ol li').eq(7).css({
            'background-image': 'none'
        }).html(2012)
    }
    if (index == 8) {
        $('ol li').eq(8).css({
            'background-image': 'url(./img/2.36bc4086.png)'
        }).html(null)
    } else {

        $('ol li').eq(8).css({
            'background-image': 'none'
        }).html(2011)
    }
    if (index == 9) {
        $('ol li').eq(9).css({
            'background-image': 'url(./img/1.c467f11c71.png)'
        }).html(null)
    } else {

        $('ol li').eq(9).css({
            'background-image': 'none'
        }).html(2010)
    }
    if (index == 10) {
        $('ol li').eq(10).css({
            'background-image': 'url(./img/0.9011790a.png)'
        }).html(null)
    } else {

        $('ol li').eq(10).css({
            'background-image': 'none'
        }).html(2009)
    }
})
$('.center li').click(function () {
    let index = $(this).index()
    $('.bg1').show()
    $(this).hide().siblings().animate({
        width: 0,
        height: 0,
    })
    $('.tw div').eq(index).show().animate({
        left: 0
    }, 500, function () {
        $(this).animate({
            width: 1400
        }, 1000)
    })
})
$('.tw div').children('i').click(function () {
    let index = $(this).parent().index()
    $('.center li').eq(index).fadeIn(500).siblings().animate({
        width: 122,
        height: 606,
    })
    $(this).parent().animate({
        width: 82
    }, 1000, function () {
        $('.bg1').hide()
        if (index == 0) {
            $(this).animate({
                left: 0
            }, 500, function () {
                $(this).hide()
            })
        }
        if (index == 1) {
            $(this).animate({
                left: 122
            }, 500, function () {
                $(this).hide()
            })
        }
        if (index == 2) {
            $(this).animate({
                left: 244
            }, 500, function () {
                $(this).hide()
            })
        }
        if (index == 3) {
            $(this).animate({
                left: 366
            }, 500, function () {
                $(this).hide()
            })
        }
        if (index == 4) {
            $(this).animate({
                left: 488
            }, 500, function () {
                $(this).hide()
            })
        }
        if (index == 5) {
            $(this).animate({
                left: 610
            }, 500, function () {
                $(this).hide()
            })
        }
        if (index == 6) {
            $(this).animate({
                left: 732
            }, 500, function () {
                $(this).hide()
            })
        }
        if (index == 7) {
            $(this).animate({
                left: 854
            }, 500, function () {
                $(this).hide()
            })
        }
        if (index == 8) {
            $(this).animate({
                left: 976
            }, 500, function () {
                $(this).hide()
            })
        }
        if (index == 9) {
            $(this).animate({
                left: 1098
            }, 500, function () {
                $(this).hide()
            })
        }
        if (index == 10) {
            $(this).animate({
                left: 1220
            }, 500, function () {
                $(this).hide()
            })
        }
    })
})