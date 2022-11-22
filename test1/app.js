
    $(".next-btn").click(function(){
        if ($(".cards_handler").hasClass("active")) {
            $(".cards_handler").toggleClass("active")
            $(this).toggleClass("rot_btn_back")
            console.log("vrai")
        } else {
            console.log("faux")

            $(this).toggleClass("rot_btn_back")
            $(".cards_handler").addClass("active")
        }
    })
