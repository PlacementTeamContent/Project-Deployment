let chips = document.getElementById("chips");
let cookies = document.getElementById("cookies");
let nuts = document.getElementById("nuts");
let calculate = document.getElementById("calculate");
let totalPrice = document.getElementById("total-price");

calculate.onclick = function(){
    totalPrice = (chips.value)*2.5 + (cookies.value)*3 + (nuts.value)*4
}
console.log(calculate)