let chips = document.getElementById("chips");
let cookies = document.getElementById("cookies");
let nuts = document.getElementById("nuts");
let cal = document.getElementById("calculate");
let price = document.getElementById("total-price");
let items = document.getElementById("total-items");


cal.onclick = function() {
    let totalprice = (chips.value * 2.5) + (cookies.value * 3) + (nuts.value * 4);
    let totalitems = chips.value + cookies.value + nuts.value;
    if ((chips.value >= 0 && cookies.value >= 0 && nuts.value >= 0) && (!chips.value.includes(".") || !cookies.value.includes(".") || !nuts.value.includes("."))){
        price.textContent = totalprice
        items.textContent = totalitems
    }
    if (totalitems > 20){
        items.textContent = "Cart items should be below 20";
        price.textContent = "Invalid"
    }
    
    else{
        items.textContent = "Please Enter Valid Positive Integers";
        price.textContent = "Invalid";
    }
}