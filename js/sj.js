$('.nav-bg').hover(function () {
    $(this).addClass('nav-bg1').parent().siblings().children('i').removeClass('nav-bg1')
})
let flag = true
$('.fixed-right li').eq(0).click(function () {
    if (flag) {
        $(this).css({
            'animation': 'rotate 5s linear infinite',
            'background-image': 'url(./img/audio_play.ca9ae290.png)'
        })
        $('audio')[0].play()
        flag = false
        // stopSound()
    } else {
        $(this).css({
            'background-image': 'url(./img/audio_pause.733099db.png)',
            'animation': 'none',
        })
        $('audio')[0].pause()
        flag = true
        // playSound()
    }
})
$('.gf-bottom li').eq(0).click(function () {
    $('.renwu-video').show()
    $('.renwu-video video').trigger('play')
})
$('.gf-bottom li').eq(1).click(function () {
    $('.cs-video').show()
    $('.cs-video video').trigger('play')

})
$('.gf-bottom li').eq(2).click(function () {
    $('.gs-video').show()
    $('.gs-video video').trigger('play')

})
$('.close').click(function () {
    $('.renwu-video').hide()
    $('.renwu-video video').trigger('pause')
    $('.cs-video').hide()
    $('.cs-video video').trigger('pause')
    $('.gs-video').hide()
    $('.gs-video video').trigger('pause')
    $('.chuanshuo').hide()
    $('.chuanshuo video').trigger('pause')
    $('.nielian').hide()
    $('.nielian video').trigger('pause')
    $('.fifth-video').hide()

})
$('.third-bottom li').mouseover(function () {
    $(this).children('span').css({
        'background-image': 'url(./img/school-active.87746fc4.png)',
        'animation': 'rotate 3s linear infinite'
    })
})
$('.third-bottom li').mouseout(function () {
    $(this).children('span').css({
        'background-image': 'url(./img/school.2ba811ec.png)',
        'animation': 'none'
    })
})
$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        // scrollHorizontally: false,
        slidesNavigation: true,
        showActiveTooltip: true,
        // navigation: true,
        scrollingSpeed: 1000,
        continuousHorizontal: false,
        controlArrowColor: '#c0a575',
        afterLoad: function move(anchorLick, index) {
            // if (index == 0) {
            //     $('#fp-nav').fadeOut(300)
            // }
            if (index == 2) {
                $('#fp-nav').fadeIn(300)
                $('#fp-nav li').eq(1).css({
                    'background-image': 'url(./img/swiper-nav-checked.50544350.png)'
                }).siblings().css({
                    'background-image': 'url(./img/swiper-nav.331b386f.png)'
                })
                $('.gf-bottom li').eq(0).animate({
                    height: 560,
                    width: 445
                }, 100, function () {
                    $('.gf-bottom li').eq(1).animate({
                        height: 560,
                        width: 445
                    }, 100, function () {
                        $('.gf-bottom li').eq(2).animate({
                            height: 560,
                            width: 445
                        }, 100)
                    })
                })
                $('.gf-bottom li').mouseover(function () {
                    let gIndex = $(this).index()
                    if (gIndex == 0) {
                        var img = new Image();
                        img.src = "./img/role-big-bg-1.226e5f0a.jpg";
                        img.onload = function () {
                            //内容...
                            $('.second').css({
                                'background-image': `url(./img/role-big-bg-1.226e5f0a.jpg)`
                            })
                        }
                    }
                    if (gIndex == 1) {
                        var img = new Image();
                        img.src = "./img/role-big-bg-2.38d83fb5.jpg";
                        img.onload = function () {
                            //内容...
                            $('.second').css({
                                'background-image': `url(./img/role-big-bg-2.38d83fb5.jpg)`
                            })
                        }
                    }
                    if (gIndex == 2) {
                        var img = new Image();
                        img.src = "./img/role-big-bg-3.c0986e6b.jpg";
                        img.onload = function () {
                            //内容...
                            $('.second').css({
                                'background-image': `url(./img/role-big-bg-3.c0986e6b.jpg)`
                            })
                        }
                    }
                })
            } else {
                $('.gf-bottom li').css({
                    height: 0,
                    width: 0
                })
            }
            if (index == 3) {
                $('#fp-nav li').eq(2).css({
                    'background-image': 'url(./img/swiper-nav-checked.50544350.png)'
                }).siblings().css({
                    'background-image': 'url(./img/swiper-nav.331b386f.png)'
                })
            }
            if (index == 4) {
                $.fn.fullpage.moveSlideRight()
                $('#fp-nav li').eq(3).css({
                    'background-image': 'url(./img/swiper-nav-checked.50544350.png)'
                }).siblings().css({
                    'background-image': 'url(./img/swiper-nav.331b386f.png)'
                })
            }
            if (index == 5) {
                $('#fp-nav li').eq(4).css({
                    'background-image': 'url(./img/swiper-nav-checked.50544350.png)'
                }).siblings().css({
                    'background-image': 'url(./img/swiper-nav.331b386f.png)'
                })
            }
            if (index == 6) {
                $('#fp-nav li').eq(5).css({
                    'background-image': 'url(./img/swiper-nav-checked.50544350.png)'
                }).siblings().css({
                    'background-image': 'url(./img/swiper-nav.331b386f.png)'
                })
            }
            if (index == 7) {
                $.fn.fullpage.moveSlideRight()
                $('#fp-nav li').eq(6).css({
                    'background-image': 'url(./img/swiper-nav-checked.50544350.png)'
                }).siblings().css({
                    'background-image': 'url(./img/swiper-nav.331b386f.png)'
                })
            }
            if (index == 7) {
                $('#fp-nav li').eq(6).css({
                    'background-image': 'url(./img/swiper-nav-checked.50544350.png)'
                }).siblings().css({
                    'background-image': 'url(./img/swiper-nav.331b386f.png)'
                })
            }
            if (index == 8) {
                $('#fp-nav li').eq(7).css({
                    'background-image': 'url(./img/swiper-nav-checked.50544350.png)'
                }).siblings().css({
                    'background-image': 'url(./img/swiper-nav.331b386f.png)'
                })
            }
        }
    });
});
// 
let mpArr = ['./img/lingxuege.f9b5acbb.jpg', './img/penglai.958dcba9.jpg', './img/badao.39f96152.jpg', './img/changge.924a2d29.jpg', './img/cangyun.ebd3a556.jpg', './img/gaibang.fa8a3d20.jpg', './img/mingjiao.e094c737.jpg', './img/tangmen.9688ad2d.jpg', './img/wudu.b3f1050a.jpg', './img/cangjian.e3719b76.jpg', './img/tiance.18691ecb.jpg', './img/chunyang.5b236feb.jpg', './img/shaolin.a726c2ae.jpg', './img/qixiu.b5cd86dc.jpg', './img/wanhua.262b13bd.jpg']
$('.third-bottom li').mouseover(function () {
    let index = $(this).index()
    var img = new Image();
    img.src = `${mpArr[index]}`;

    img.onload = function () {
        //内容...
        $('.third').css({
            'background-image': `url(${mpArr[index]})`
        })
    }
})
let rightIndex = 0
$('.third-right').click(function () {
    rightIndex++
    if (rightIndex == 3) {
        rightIndex = 0
    }
    $('.third-bottom ul').animate({
        left: -1000 * rightIndex
    })
})
$('.third-left').click(function () {
    rightIndex--
    if (rightIndex < 0) {
        rightIndex = 2
    }
    $('.third-bottom ul').animate({
        left: -1000 * rightIndex
    })
})
let fouthArr = ['./img/role-1.6f318399.jpg', './img/role-2.7bc63e01.jpg', './img/role-3.9f750dbd.jpg', './img/role-4.c1d3ab3b.jpg']
$('.fouth-bottom li').mouseover(function () {
    let index = $(this).index()
    var img = new Image();
    img.src = `${fouthArr[index]}`;
    img.onload = function () {
        //内容...
        $('.fouth').css({
            'background-image': `url(${fouthArr[index]})`
        })
    }
})
$('.fouth-bottom li').click(function () {
    let index = $(this).index()
    if (index == 0) {
        $('.luoli').fadeIn(500)
    }
    if (index == 1) {
        $('.chengnv').fadeIn(500)
    }
    if (index == 2) {
        $('.chengnan').fadeIn(500)
    }
    if (index == 3) {
        $('.zhengtai').fadeIn(500)
    }
})
$('.fouth-close').click(function () {
    $('.zhengtai').fadeOut(500)
    $('.chengnan').fadeOut(500)
    $('.chengnv').fadeOut(500)
    $('.luoli').fadeOut(500)
})
$('.fouth-right-top').mouseover(function () {
    var img = new Image();
    img.src = `./img/video-big-bg.d2c2cb0b.jpg`;
    img.onload = function () {
        //内容...
        $('.fouth').css({
            'background-image': `url(./img/video-big-bg.d2c2cb0b.jpg)`
        })
    }

})


//swiper插件
window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        paginationClickable: true,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        observeSlideChildren: true,
        keyboard: true,
        mousewheel: true,
        speed: 1000,
        mousewheels: true,
        mousewheel: {
            releaseOnEdges: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoHeight: true,
    });

}
$('.start-img').click(function () {
    $('.fifth-video').show()
    $('.fifth-video video').trigger('play')
    $('.fifth-video-bg').css({
        'background-color': 'rgba(#f1f1f1,#fff,#fff 0.5)'
    })
})
$('.fifth-close').click(function () {
    $('.fifth-video').hide()
    $('.fifth-video video').trigger('pause')
    $('.fifth-video-bg').css({
        'background-color': 'none'
    })
})

let sixthArr = ['./img/bg-1.ada317e3.jpg', './img/bg-2.98fa96ec.jpg', './img/bg-3.110a2b78.jpg', './img/bg-4.0b8484c4.jpg']
$('.sixth-bottom li').mouseover(function () {
    let index = $(this).index()
    var img = new Image();
    img.src = `${sixthArr[index]}`;
    img.onload = function () {
        //内容...
        $('.sixth').css({
            'background-image': `url(${sixthArr[index]})`
        })
    }
})
let seventhArr = ['./img/bg-bangpai.561e67ce.jpg', './img/bg-shitu.741a6ca4.jpg', './img/bg-haoyou.6fda869b.jpg', './img/bg-daxia.7af359ef.jpg']
$('.seventh li').click(function () {
    $(this).addClass('active-seventh').siblings().removeClass('active-seventh')
    let index = $(this).index()
    var img = new Image();
    img.src = `${seventhArr[index]}`;
    img.onload = function () {
        $('.seventh').fadeIn(500).css({
            'background-image': `url(${seventhArr[index]})`
        })
    }
})
$('#fp-nav li').click(function () {
    $(this).css({
        'background-image': 'url(./img/swiper-nav-checked.50544350.png)'
    }).siblings().css({
        'background-image': 'url(./img/swiper-nav.331b386f.png)'
    })
})
$('.nav li').click(function () {
    let index = $(this).index() + 2
    console.log((index));
    $.fn.fullpage.moveTo(index);
})
