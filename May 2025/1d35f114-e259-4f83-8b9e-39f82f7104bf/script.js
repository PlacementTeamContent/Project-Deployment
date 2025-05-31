document.getElementById('calculate').addEventListener('click', function() {
    const veggiePizza = document.getElementById('veggie-pizza').value;
    const pepperoniPizza = document.getElementById('pepperoni-pizza').value;
    const cheesePizza = document.getElementById('cheese-pizza').value;
    const totalItemsEl = document.getElementById('total-items');
    const totalPriceEl = document.getElementById('total-price');
    if (!veggiePizza || !pepperoniPizza || !cheesePizza || !Number.isInteger(Number(veggiePizza)) || !Number.isInteger(Number(pepperoniPizza)) || !Number.isInteger(Number(cheesePizza)) || Number(veggiePizza) <= 0 || Number(pepperoniPizza) <= 0 || Number(cheesePizza) <= 0) {
        totalItemsEl.textContent = "Please Enter Valid Positive Integers";
        totalPriceEl.textContent = "Invalid";
        return;
    }
    const veggiePizzaQty = parseInt(veggiePizza);
    const pepperoniPizzaQty = parseInt(pepperoniPizza);
    const cheesePizzaQty = parseInt(cheesePizza);
    const totalItems = veggiePizzaQty + pepperoniPizzaQty + cheesePizzaQty;
    if (totalItems > 20) {
        totalItemsEl.textContent = "Cart items should be below 20";
        totalPriceEl.textContent = "Invalid";
    } else {
        const totalPrice = (veggiePizzaQty * 8) + (pepperoniPizzaQty * 10) + (cheesePizzaQty * 7);
        totalItemsEl.textContent = totalItems;
        totalPriceEl.textContent = totalPrice;
    }
});