document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate-button');

    calculateButton.addEventListener('click', function() {
        const veggiePizzaQuantity = parseInt(document.getElementById('veggie-pizza').value);
        const pepperoniPizzaQuantity = parseInt(document.getElementById('pepperoni-pizza').value);
        const cheesePizzaQuantity = parseInt(document.getElementById('cheese-pizza').value);

        const totalPriceElement = document.getElementById('total-price');
        const totalItemsElement = document.getElementById('total-items');

        if (Number.isInteger(veggiePizzaQuantity) && Number.isInteger(pepperoniPizzaQuantity) && Number.isInteger(cheesePizzaQuantity) &&
            veggiePizzaQuantity >= 0 && pepperoniPizzaQuantity >= 0 && cheesePizzaQuantity >= 0) {

            const totalPrice = (veggiePizzaQuantity * 8) + (pepperoniPizzaQuantity * 10) + (cheesePizzaQuantity * 7);
            const totalItems = veggiePizzaQuantity + pepperoniPizzaQuantity + cheesePizzaQuantity;

            if (totalItems > 20) {
                totalItemsElement.textContent = "Cart items should be below 20";
                totalPriceElement.textContent = "Invalid";
            } else {
                totalPriceElement.textContent = totalPrice;
                totalItemsElement.textContent = totalItems;
            }
        } else {
            totalItemsElement.textContent = "Please Enter Valid Positive Integers";
            totalPriceElement.textContent = "Invalid";
        }
    });
});