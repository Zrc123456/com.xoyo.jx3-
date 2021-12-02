$('.pz-left li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    let index = $(this).index()
    $('.left-bottom div').eq(index).show().siblings().hide()
})
$('.pz-right li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    let index = $(this).index()
    $('.right-bottom div').eq(index).show().siblings().hide()
})
let Kindex = 0
let Kflag = true
$('.chak').click(function () {
    let height = $('.cjwt').height()
    Kindex++
    if (Kflag) {
        $('.cjwt').animate({
            height: `${height + 510}px`
        })
        if (Kindex == 2) {
            $(this).children('p').html('没有更多了')
            Kflag = false
        }
    }
})
$('.lc li').eq(0).hover(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
        'background-position': 'center -48px'
    })
})
$('.lc li').eq(0).mouseout(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
        'background-position': 'center -48px'
    })
})
$('.lc li').eq(1).hover(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
        'background-position': 'center -141px'
    })
})
$('.lc li').eq(1).mouseout(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
        'background-position': 'center -141px'
    })
})
$('.lc li').eq(2).hover(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
        'background-position': 'center -234px'
    })
})
$('.lc li').eq(2).mouseout(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
        'background-position': 'center -234px'
    })
})
$('.lc li').eq(3).hover(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
        'background-position': 'center -327px'
    })
})
$('.lc li').eq(3).mouseout(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
        'background-position': 'center -327px'
    })
})
$('.lc li').eq(4).hover(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
        'background-position': 'center -420px'
    })
})
$('.lc li').eq(4).mouseout(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
        'background-position': 'center -420px'
    })
})
$('.lc li').eq(5).hover(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
        'background-position': 'center -513px'
    })
})
$('.lc li').eq(5).mouseout(function () {
    $(this).css({
        'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
        'background-position': 'center -513px'
    })
})
$(window).scroll(function () {
    if ($(this).scrollTop() >= $('.down').offset().top && $(this).scrollTop() < $('.pz').offset().top) {
        $('.lc li').eq(0).css({
            'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
            'background-position': 'center -48px'
        })
    } else {
        $('.lc li').eq(0).css({
            'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
            'background-position': 'center -48px'
        })
    }
    if ($(this).scrollTop() >= $('.pz').offset().top && $(this).scrollTop() < $('.zizhu').offset().top) {
        $('.lc li').eq(1).css({
            'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
            'background-position': 'center -141px'
        })
    } else {
        $('.lc li').eq(1).css({
            'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
            'background-position': 'center -141px'
        })
    }
    if ($(this).scrollTop() >= $('.zizhu').offset().top && $(this).scrollTop() < $('.sf').offset().top) {
        $('.lc li').eq(2).css({
            'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
            'background-position': 'center -234px'
        })
    } else {
        $('.lc li').eq(2).css({
            'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
            'background-position': 'center -234px'
        })
    }
    if ($(this).scrollTop() >= $('.sf').offset().top && $(this).scrollTop() < $('.cjwt').offset().top) {
        $('.lc li').eq(3).css({
            'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
            'background-position': 'center -327px'
        })
    } else {
        $('.lc li').eq(3).css({
            'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
            'background-position': 'center -327px'
        })
    }
    if ($(this).scrollTop() >= $('.cjwt').offset().top) {
        $('.lc li').eq(4).css({
            'background-image': 'url(./img/right-scroll-tab-act.007f7e49.png)',
            'background-position': 'center -420px'
        })
    } else {
        $('.lc li').eq(4).css({
            'background-image': 'url(./img/right-scroll-tab.96473ecf.png)',
            'background-position': 'center -420px'
        })
    }
})
$('.lc li').eq(0).click(function () {
    $('body,html').animate({
        scrollTop: $('.down').offset().top
    }, 500)
})
$('.lc li').eq(1).click(function () {
    $('body,html').animate({
        scrollTop: $('.pz').offset().top
    }, 500)
})
$('.lc li').eq(2).click(function () {
    $('body,html').animate({
        scrollTop: $('.zizhu').offset().top
    }, 500)
})
$('.lc li').eq(3).click(function () {
    $('body,html').animate({
        scrollTop: $('.sf').offset().top
    }, 500)
})
$('.lc li').eq(4).click(function () {
    $('body,html').animate({
        scrollTop: $('.cjwt').offset().top
    }, 500)
})