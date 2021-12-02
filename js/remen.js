$('.jb-bottom-left').click(function () {
    $('.video').show()
    $('.color').show()
    $('.video video').trigger('play')
    $('.color').css({
        'background-color': 'rgba(33,33,33,0.5)'
    })
})
$('.close').click(function () {
    $('.video').hide()
    $('.color').hide()
    $('.video video').trigger('pause')
    $('.color').css({
        'background-color': 'none'
    })
})