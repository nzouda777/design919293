const modal = document.querySelectorAll("#modal")
let cards = document.querySelectorAll(".card-img")
console.log(cards)
// cards.onclick = function() {
//     console.log("me")
// }
// cards.addEventListener('click', () => {
//     console.log("clicked")
// })

modal.forEach(el => {
    cards.forEach(card => {
        card.addEventListener('click', ()=>{
        el.style.display = "block !important"
        console.log(card)
    })
    });
    
    // card.addEventListener('click', () => {
    //     el.style.display = "block"
    // })
})