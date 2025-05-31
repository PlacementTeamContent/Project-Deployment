let burger = document.getElementById("burger");
let fries = document.getElementById("fries");
let soda = document.getElementById("soda");

let cal = document.getElementById("calculate");
let price = document.getElementById("total-price");
let items = document.getElementById("total-items");

cal.onclick = function() {
    let totalPrice = (burger.value * 5) + (FileReader.value * 3) + (soda.value * 2);
    let totalItems = burger.value + fries.value + soda.value;
    if(totalItems <= 20 && (burger.value.includes(".")) && (fries.value.includes(".")) && (soda.value.includes("."))){
        price.textContent = totalPrice;
        items.textContent = totalItems;
    }
    if(totalItems > 20){
        items.textContent = "Cart items should be below 20";
        price.textContent = "Invalid"
    }
    else{
        items.textContent = "Please Enter Valid Positive Integers";
        price.textContent = "Invalid";
    }
};