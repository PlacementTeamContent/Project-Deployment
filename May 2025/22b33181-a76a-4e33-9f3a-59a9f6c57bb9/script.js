document.querySelector('button#calculate').addEventListener('click', function() {
    // Get input values
    const burgerInput = document.querySelector('input#burger-quantity');
    const friesInput = document.querySelector('input#fries-quantity');
    const sodaInput = document.querySelector('input#soda-quantity');
    const totalPriceElem = document.getElementById('total-price');
    const totalItemsElem = document.getElementById('total-items');

    const burgerQty = burgerInput ? burgerInput.value.trim() : '';
    const friesQty = friesInput ? friesInput.value.trim() : '';
    const sodaQty = sodaInput ? sodaInput.value.trim() : '';

    // Validation function for positive integers only
    function isValidPositiveInteger(value) {
        return /^[1-9]\d*$/.test(value);
    }

    if (!isValidPositiveInteger(burgerQty) || !isValidPositiveInteger(friesQty) || !isValidPositiveInteger(sodaQty)) {
        totalItemsElem.textContent = "Please Enter Valid Positive Integers";
        totalPriceElem.textContent = "Invalid";
        return;
    }

    // Convert to numbers
    const burger = parseInt(burgerQty, 10);
    const fries = parseInt(friesQty, 10);
    const soda = parseInt(sodaQty, 10);

    const totalItems = burger + fries + soda;

    if (totalItems > 20) {
        totalItemsElem.textContent = "Cart items should be below 20";
        totalPriceElem.textContent = "Invalid";
        return;
    }

    const totalPrice = (burger * 5) + (fries * 3) + (soda * 2);

    totalItemsElem.textContent = totalItems;
    totalPriceElem.textContent = totalPrice;
});