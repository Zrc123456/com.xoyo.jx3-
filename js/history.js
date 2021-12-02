$(window).scroll(function () {
    if ($('.nav').offset().top < $(window).scrollTop()) {
        $('.about').show().animate({
            top: 80
        }, 1000, function () {
            $('.about-right').show().animate({
                top: 0
            }, 1000, function () {
                if ($(window).scrollTop() > $('.center-left').offset().top) {
                    $('.about-right-text').show().animate({
                        top: 90
                    }, 500, function () {
                        if ($(window).scrollTop() > $('.center-left').offset().top) {
                            $('.about-left-tex').show().animate({
                                top: 350
                            }, 500)
                        }
                    })
                }
            })
        })
    }
})
$('.nav a').click(function () {
    let index = $(this).index()
    $(this).attr('id', 'active').siblings().removeAttr('id')
    if (index == 0) {
        $('.center-left').show()
        $('.center-right').hide()
    }
    if (index == 1) {
        $('.center-left').hide()
        $('.center-right').show()
    }
})
$(window).scroll(function () {
    if ($('.center-right').offset().top < $(window).scrollTop()) {
        $('.left_1').show().animate({
            top: 128
        }, 1500)
        $('.left_2').show().animate({
            top: 378
        }, 1550, function () {
            if ($('.left_2').offset().top < $(window).scrollTop()) {
                $('.left_7').show().animate({
                    top: 1653
                }, 1850, function () {
                    if ($('.left_6').offset().top < $(window).scrollTop()) {
                        $('.left_10').show().animate({
                            top: 2594
                        }, 1850)
                        $('.left_11').show().animate({
                            top: 2861
                        }, 1850)
                        $('.left_12').show().animate({
                            top: 3126
                        }, 1850, function () {
                            if ($('.left_10').offset().top < $(window).scrollTop()) {
                                $('.left_14').show().animate({
                                    top: 3665
                                }, 1850)
                                $('.left_15').show().animate({
                                    top: 4060
                                }, 1850)
                                $('.left_16').show().animate({
                                    top: 4490
                                }, 1850)
                                $('.right_14').show().animate({
                                    top: 3665
                                }, 1850)
                                $('.right_15').show().animate({
                                    top: 3975
                                }, 1850)
                                $('.right_16').show().animate({
                                    top: 4239
                                }, 1850)
                                $('.right_17').show().animate({
                                    top: 4421
                                }, 1850)
                            }
                        })
                        $('.left_13').show().animate({
                            top: 3398
                        }, 1850)
                        $('.right_10').show().animate({
                            top: 2327
                        }, 1850)
                        $('.right_11').show().animate({
                            top: 2865
                        }, 1850)
                        $('.right_12').show().animate({
                            top: 3130
                        }, 1850)
                        $('.right_13').show().animate({
                            top: 3400
                        }, 1850)
                    }
                })
                $('.left_8').show().animate({
                    top: 2064
                }, 1850)
                $('.left_9').show().animate({
                    top: 2329
                }, 1850)
                $('.right_7').show().animate({
                    top: 1556
                }, 1850)
                $('.right_8').show().animate({
                    top: 1803
                }, 1850)
                $('.right_9').show().animate({
                    top: 2064
                }, 1850)
            }
        })
        $('.left_3').show().animate({
            top: 636
        }, 1600)
        $('.left_4').show().animate({
            top: 791
        }, 1750)
        $('.left_5').show().animate({
            top: 1050
        }, 1800)
        $('.left_6').show().animate({
            top: 1361
        }, 1850)
        $('.right_1').show().animate({
            top: 30
        }, 1500)
        $('.right_2').show().animate({
            top: 289
        }, 1550)
        $('.right_3').show().animate({
            top: 550
        }, 1600)
        $('.right_4').show().animate({
            top: 809
        }, 1750)
        $('.right_5').show().animate({
            top: 1061
        }, 1800)
        $('.right_6').show().animate({
            top: 1298
        }, 1850)
    }
})