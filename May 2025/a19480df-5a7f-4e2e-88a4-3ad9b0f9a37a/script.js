document.addEventListener('DOMContentLoaded', function() {
    // Get the calculate button
    const calculate = document.getElementById('calculate');
    
    // Add click event listener to the button
    calculate.addEventListener('click', function() {
        // Get input values
        const milkQty = document.getElementById('milk-choco').value;
        const darkQty = document.getElementById('dark-choco').value;
        const whiteQty = document.getElementById('white-choco').value;
        
        // Get result elements
        const totalPriceEl = document.getElementById('total-price');
        const totalItemsEl = document.getElementById('total-items');
        
        // Validate inputs
        if (!isValidInput(milkQty) || !isValidInput(darkQty) || !isValidInput(whiteQty)) {
            totalItemsEl.textContent = "Please Enter Valid Positive Integers";
            totalPriceEl.textContent = "Invalid";
            return;
        }
        
        
        
        
        // Convert to numbers
        const milk = parseInt(milkQty);
        const dark = parseInt(darkQty);
        const white = parseInt(whiteQty);
        
        // Calculate totals
        const totalItems = milk + dark + white;
        const totalPrice = (milk * 5) + (dark * 6) + (white * 4);
        
        // Check if total items exceeds 20
        if (totalItems > 20) {
            totalItemsEl.textContent = "Cart items should be below 20";
            totalPriceEl.textContent = "Invalid";
            return;
        }
        
        // Display results
        totalItemsEl.textContent = totalItems;
        totalPriceEl.textContent = "$" + totalPrice;
    });
    
    // Helper function to validate input
    function isValidInput(value) {
        // Check if value is empty
        if (!value || value.trim() === '') {
            return false;
        }
        
        // Check if value is a positive integer
        const num = Number(value);
        if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
            return false;
        }
        
        return true;
    }
    
    // Add input validation to prevent negative numbers
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('change', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
});