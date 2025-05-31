let pizzaslist = document.getElementById("pizzas-List");
let veggiePizza = document.getElementById("veggie-pizza");
let pepperoniPizza = document.getElementById("pepperoni-pizza");
let cheesePizza = document.getElementById("cheese-pizza");
let calculation = document.getElementById("calculate");
let totalPrice = document.getElementById("total-price");
let totalItems = document.getElementById("total-items");

calculation.onclick=function(){
    let veggie =  veggiePizza.value*8;
    let pepperoni = pepperoniPizza.value*10;
    let cheese = cheesePizza.value*7;
    let veggievalue = veggiePizza.value;
    let pepperonivalue = pepperoniPizza.value;
    let cheesevalue = cheesePizza.value;
    
    let sum_of=parseFloat(veggievalue) + parseFloat(pepperonivalue) + parseFloat(cheesevalue);
    totalPrice.textContent = parseFloat(veggie) + parseFloat(pepperoni) +parseFloat(cheese);
    totalItems.textContent = parseInt(veggievalue) + parseInt(pepperonivalue) + parseInt(cheesevalue);
    if (veggievalue==="" || pepperonivalue==="" || cheesevalue===""){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
    }
    if (sum_of > 20){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Cart items should be below 20";
    }
    if (veggievalue<0 || pepperonivalue<0 || cheesevalue<0){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
    }
    if (veggievalue.includes(".") || pepperonivalue.includes(".") || cheesevalue.includes(".")){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
    }
    
}