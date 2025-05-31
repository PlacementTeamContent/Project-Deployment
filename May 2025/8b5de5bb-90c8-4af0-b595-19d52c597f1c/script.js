let veggie = document.getElementById('veggie-pizza')
let pepperoni = document.getElementById('pepperoni-pizza')
let cheese = document.getElementById('cheese-pizza')
let caluclate = document.getElementById('calculate')
let totalprice = document.getElementById('total-price')
let totalitems = document.getElementById('total-items')

caluclate.onclick = function() {
    let veggie_value = veggie.value
    let pepperoni_value = pepperoni.value
    let cheese_value = cheese.value
    if ((veggie_value >= 0) && (pepperoni_value >= 0) && (cheese_value >= 0)) {
        totalprice.textContent = parseFloat(veggie_value * 8) + parseInt(pepperoni_value * 10) + parseInt(cheese_value * 7);
        let sum_is = parseInt(veggie_value) + parseInt(pepperoni_value) + parseInt(cheese_value);
        totalitems.textContent = sum_is;
        if (totalitems > 20) {
            totalitems.textContent = "cart items should be below 20"
            totalprice.textContent = "Invalid"
        }
    }
    else if ((veggie_value == "") || (pepperoni_value == "") || (cheese_value == "")) {
        totalitems.textContent = "please enter valid positive integer"
        totalprice.textContent = "Invalid"
    }
    else{
        totalitems.textContent = "please enter valid positive integer"
        totalprice.textContent = "Invalid"
    }






}