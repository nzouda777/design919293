
    // let dText = $('.br-ms-marquee-text').attr('data-text')
    // $('.br-ms-marquee-text').text(dText)

    $(document).on('load',()=>{
        let dText = $('.bs-ms-marquee-text').val()
        $('.bs-ms-marquee-text').text(dText)
        
    })
$(window).scroll( () => {
            $('.bs-left-text-el').css("position", "fixed")
        })
$(window).scroll( () => {
    $('.bs-right-text-el').css("position", "fixed")
})