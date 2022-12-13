

let card = $("#pop1")
let modal = $("#modal")
card.click(() => {
    modal.css({"display": "block"})
})
let closebtn = $(".closeModal")
closebtn.click(() => {
    modal.hide()
})

modal.click(() => {
    console.log(modal)
    modal.hide()
})

$(function () {
    $(".content").slice(0, 6).show();
    $("body").on('click touchstart', '.show-more-btn', function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 6).fadeIn();
        if ($(".content:hidden").length == 0) {
            $(".show-more-btn").css('visibility', 'hidden');
        }
    });
});