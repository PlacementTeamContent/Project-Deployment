document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    
    calculateButton.addEventListener('click', function() {
        const chipsQuantity = document.getElementById('chips').value;
        const cookiesQuantity = document.getElementById('cookies').value;
        const nutsQuantity = document.getElementById('nuts').value;
        
        const totalPriceElement = document.getElementById('total-price');
        const totalItemsElement = document.getElementById('total-items');
        
        function isValidInput(value) {
            if (value === "" || isNaN(value) || Number(value) < 0 || !Number.isInteger(Number(value))) {
                return false;
            }
            return true;
        }
        
        if (isValidInput(chipsQuantity) && isValidInput(cookiesQuantity) && isValidInput(nutsQuantity)) {
            const chips = parseInt(chipsQuantity);
            const cookies = parseInt(cookiesQuantity);
            const nuts = parseInt(nutsQuantity);
            
            const totalPrice = (chips * 2.5) + (cookies * 3) + (nuts * 4);
            const totalItems = chips + cookies + nuts;
            
            if (totalItems > 20) {
                totalItemsElement.textContent = "Cart items should be below 20";
                totalPriceElement.textContent = "Invalid";
            } else {
                totalItemsElement.textContent = totalPrice.toFixed(2);
                totalItemsElement.textContent = totalItems;
            }
        }  else {
            totalItemsElement.textContent = "Pleae Enter Valid Positive Integers";
            totalPriceElement.textContent = "Invalid";
        }
    });
});