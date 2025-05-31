let veggie = document.getElementById("veggie-pizza");
let pepperoni = document.getElementById("pepperoni-pizza");
let cheese = document.getElementById("cheese-pizza");
let button = document.getElementById("calculate");
let totalPrice = document.getElementById("total-price");
let totalItems = document.getElementById("total-items");

button.addEventListener("click", function(){
    // totalItems = parseInt(veggie.value) + parseInt(pepperoni.value) + parseInt(cheese.value);
    if( (parseInt(veggie.value)>=0) && (parseInt(pepperoni.value)>=0) && (parseInt(cheese.value)>=0) ){
        vegpizza = parseInt(veggie.value)*8;
        PepPizza = parseInt(pepperoni.value)*10;
        chePizza = parseInt(cheese.value)*7;
        totalPrice.textContent = vegpizza+PepPizza+chePizza;
        totalItems.textContent = parseInt(veggie.value) + parseInt(pepperoni.value) + parseInt(cheese.value);
    }
    if( veggie.value.includes(".") ){
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Please Enter Valid Positive Integers";
    }
    if( (parseInt(veggie.value) + parseInt(pepperoni.value) + parseInt(cheese.value)) > 20){
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Cart items should be below 20";
    }
    if ((veggie.value === "") || (pepperoni.value === "") || (cheese.value === "")){
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Please Enter Valid Positive Integers";
    }
})