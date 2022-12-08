

let card = $(".card-img")
console.log(card)
let modal = $("#modal")
console.log(modal)
card.click(() => {
    modal.css({"display": "block"})
})

$(".closeModal").click(() => {
    modal.css({"display": "none"})
})