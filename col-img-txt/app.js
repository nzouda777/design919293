$(window).scroll((e)=>{ 
    if ($(this).scrollTop() + 250) {console.log(e)
        $(".bs-grid-text-contain").css({"transition" : "all 2s", "margin-top": "150px"})
      }
      var docTop = $(document).scrollTop() +50,
            anchorTop = $(".bs-grid-text-contain").offset().top;
      if (docTop > anchorTop) {
        $(".bs-grid-text-contain").css({"transition" : "all 2s", "margin-top": "-150px"})

      }
})

