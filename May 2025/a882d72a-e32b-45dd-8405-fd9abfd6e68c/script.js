let veggiePizza = document.getElementById("veggie-pizza").value;
let pepperoniPizza = document.getElementById("pepperoni-pizza").value;
let cheesePizza = document.getElementById("cheese-pizza").value;
let totalPrice = document.getElementById("total-price");
let totalItems = document.getElementById("total-items");
let calculate = document.getElementById("calculate");
calculate.addEventListener('click', function() {
    let count = parseInt(veggiePizza) + parseInt(pepperoniPizza) + parseInt(cheesePizza);
    totalItems.textContent = "";
    totalPrice.textContent = "";
    
    if (count < 20) {
        totalItems.textContent = count;
        totalPrice.textContent = parseInt(veggiePizza) * 8 + parseInt(pepperoniPizza) * 10 + parseInt(cheesePizza) * 7;
    } else if (veggiePizza === '' || pepperoniPizza === '' || cheesePizza === "" || parseInt(veggiePizza) <= 0 || parseInt(pepperoniPizza) <= 0 || parseInt(cheesePizza) <= 0) {
        totalItems.textContent = "Please Enter Valid Positive Integers";
        totalPrice.textContent = "Invalid";
    } else {
        totalItems.textContent = "Cart items should be below 20";
        totalPrice.textContent = "Invalid";
    }

});