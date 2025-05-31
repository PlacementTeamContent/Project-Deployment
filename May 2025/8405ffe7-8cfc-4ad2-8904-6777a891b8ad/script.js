let veggie_pizza = document.getElementById("veggie-pizza");
let pepperoni_pizza = document.getElementById("pepperoni-pizza");
let cheese_pizza = document.getElementById("cheese-pizza");

let calculate = document.getElementById("calculate");

let totalprice = document.getElementById("total-price");
let totalitems = document.getElementById("total-items");

calculate.onClick = function(){
    let price = parseInt(veggie_pizza)*8 + parseInt(pepperoni_pizza)*10 + parseInt(cheese_pizza)*7;
    let items = parseInt(veggie_pizza)+parseInt(pepperoni_pizza)+parseInt(cheese_pizza);
    if(items>20){
        totalprice.textContent="Invalid";
        totalitems.textContent="Cart items should be below 20";
    } else if (veggie_pizza.value==="" || pepperoni_pizza.value==="" || cheese_pizza.value===""){
        totalprice.textContent="Invalid";
        totalitems.textContent="Please Enter Valid Positive Integers";
    } else if ()
    
}