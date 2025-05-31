document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate');
    const burgerInput = document.getElementById('burger');
    const friesInput = document.getElementById('fries');
    const sodaInput = document.getElementById('soda');
    const totalPriceSpan = document.getElementById('total-price');
    const totalItemsSpan = document.getElementById('total-items');

    calculateButton.addEventListener('click', () => {
       
        const burgerQuantity = parseInt(burgerInput.value);
        const friesQuantity = parseInt(friesInput.value);
        const sodaQuantity = parseInt(sodaInput.value);

       
        if (isNaN(burgerQuantity) || isNaN(friesQuantity) || isNaN(sodaQuantity) ||
            burgerQuantity < 0 || friesQuantity < 0 || sodaQuantity < 0 ||
            !Number.isInteger(burgerQuantity) || !Number.isInteger(friesQuantity) || !Number.isInteger(sodaQuantity)) {

            totalItemsSpan.textContent = "Please Enter Valid Positive Integers";
            totalPriceSpan.textContent = "Invalid";
        } else {
            
            const totalPrice = (burgerQuantity * 5) + (friesQuantity * 3) + (sodaQuantity * 2);

           
            const totalItems = burgerQuantity + friesQuantity + sodaQuantity;

            
            totalPriceSpan.textContent = totalPrice;
            totalItemsSpan.textContent = totalItems;

            if (totalItems > 20) {
                totalItemsSpan.textContent = "Cart items should be below 20";
                totalPriceSpan.textContent = "Invalid";
            }
        }
    });
});