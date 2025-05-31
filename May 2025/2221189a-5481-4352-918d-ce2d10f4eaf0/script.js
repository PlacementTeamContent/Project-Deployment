let Snacks = document.getElementById("snacks-list");
let Chips = document.getElementById("chips");
let Cookies = document.getElementById("cookies");
let Nuts = document.getElementById("nuts");
let Calculate = document.getElementById("calculate");
let Totalprice = document.getElementById("total-price");
let Totalitems = document.getElementById("total-items");
calculate.onclick = function(){
    let ChipsQuantity = Chips.value;
    let CookiesQuantity = Cookies.value;
    let NutsQuantity = Nuts.value;
    let sum = parseInt(ChipsQuantity*2.5) + parseInt(CookiesQuantity*3) + parseInt(NutsQuantity*4);
    let TotalpricetextContent = parseFloat(Snacks);
}