
    // let dText = $('.br-ms-marquee-text').attr('data-text')
    // $('.br-ms-marquee-text').text(dText)

    $(document).on('load',()=>{
        let dText = $('.br-ms-marquee-text').val()
        console.log($(".br-ms-marquee-text").length)
        $('.br-ms-marquee-text').text(dText)
    })