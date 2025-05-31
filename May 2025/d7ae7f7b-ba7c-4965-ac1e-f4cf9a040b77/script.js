let calculate=document.getElementById("calculate").addEventListener('click',function(){
    let veggiePizzaQty=document.getElementById("veggie-pizza");
    let pepperoniPizzaQty=document.getElementById("pepperoni-pizza");
    let cheesePizzaQty=document.getElementById("cheese-pizza");
    let totalPriceEl=document.getElementById("total-price");
    let totalItemsEl=document.getElementById("total-items");
    if (veggiePizzaQty===""||pepperoniPizzaQty===""||cheesePizzaQty===""||veggiePizzaQty<0||pepperoniPizzaQty
    <0||cheesePizzaQty<0||!Number.isInteger(veggiePizzaQty)||!Number.isInteger(pepperoniPizzaQty)
    ||!Number.isInteger(cheesePizzaQty)){
        totalPriceEl.textContent="Invalid";
        totalItemsEl.textContent="Please Enter Valid Positive Integers";
    }
    
    
    else{
    let totalPrice=(veggiePizzaQty*8)+(pepperoniPizzaQty*10)+(cheesePizzaQty*7);
    let totalItems=veggiePizzaQty+pepperoniPizzaQty+cheesePizzaQty;
    totalItemsEl.textContent=totalItems;
    totalPriceEl.textContent=totalPrice.toFixed(2);
    }
    if (totalItems>20){
        totalPriceEl.textContent="Invalid";
        totalItemsEl.textContent="Cart items should be below 20";
    }
})