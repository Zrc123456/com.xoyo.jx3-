$('.nav li:nth-child(2)').hover(function () {
    $('.yxts').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.yxts').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(3)').hover(function () {
    $('.xw').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.xw').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(4)').hover(function () {
    $('.sp').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.sp').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(5)').hover(function () {

    $('.tr').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.tr').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(7)').hover(function () {

    $('.tl').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.tl').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(8)').hover(function () {

    $('.mb').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.mb').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(10)').hover(function () {

    $('.kf').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.kf').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.pzyq-t a').click(function () {
    $(this).addClass('active-pzyq').siblings().removeClass('active-pzyq')
})
$('.pzyq-c a').mouseover(function () {
    let index = $(this).index()
    $(this).attr('id', 'pzyq-c-active').siblings().removeAttr('id')
    $('.pzyq-b table').eq(index).show().siblings().hide()
})