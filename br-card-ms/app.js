
    $(document).on('load',()=>{
        let dText = $('.bs-ms-marquee-text').val()
        $('.bs-ms-marquee-text').text(dText)
        
    })
$(window).scroll( () => {
            $('.bs-left-text-el').css({"position": "sticky", "top" :"45%", "bottom": "auto"})
        })
$(window).scroll( () => {
    $('.bs-right-text-el').css("position", "fixed")
})