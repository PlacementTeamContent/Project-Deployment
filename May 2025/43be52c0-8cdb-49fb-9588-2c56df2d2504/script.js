// document.addEventListener("DOMContentLoaded", function() {
//     // Get references to the input fields and display elements
//     const chipsInput = document.getElementById("chips");
//     const cookiesInput = document.getElementById("cookies");
//     const nutsInput = document.getElementById("nuts");
//     const calculateButton = document.getElementById("calculate");
//     const totalPriceElement = document.getElementById("total-price");
//     const totalItemsElement = document.getElementById("total-items");

//     calculateButton.addEventListener("click", function() {
        
//         let chipsQuantity = parseFloat(chipsInput.value);
//         let cookiesQuantity = parseFloat(cookiesInput.value);
//         let nutsQuantity = parseFloat(nutsInput.value);

        
//         if (isNaN(chipsQuantity) || chipsQuantity < 0 ||
//             isNaN(cookiesQuantity) || cookiesQuantity < 0 ||
//             isNaN(nutsQuantity) || nutsQuantity < 0) {
//             totalPriceElement.textContent = "Enter Valid Positive Integers";
//             totalItemsElement.textContent = "Invalid";
//             return; 
//         }

        
//         const chipsPrice = 2.5; 
//         const cookiesPrice = 4; 
//         const nutsPrice = 3;   

//         let totalPrice = (chipsQuantity * chipsPrice) +
//                          (cookiesQuantity * cookiesPrice) +
//                          (nutsQuantity * nutsPrice);

        
//         let totalItems = chipsQuantity + cookiesQuantity + nutsQuantity;

        
//         totalPriceElement.textContent = totalPrice.toFixed(2);
//         totalItemsElement.textContent = totalItems;

        
//         if (totalItems > 20) {
//             const tooLargeDiv = document.createElement("div");
//             tooLargeDiv.id = "too-large";
//             tooLargeDiv.textContent = "Cart items should be below 20";
//             // Append it below the total-items element
//             totalItemsElement.parentNode.insertBefore(tooLargeDiv, totalItemsElement.nextSibling);
//         } else {
//             // Remove "too-large" div if it exists and totalItems is not > 20
//             const existingTooLargeDiv = document.getElementById("too-large");
//             if (existingTooLargeDiv) {
//                 existingTooLargeDiv.remove();
//             }
//         }
//     });
// });






 document.addEventListener('DOMContentLoaded', () => {
    // It's good practice to get the button by its ID and attach an event listener
    // rather than relying on an inline onclick attribute, although it will work.
    const calculateButton = document.getElementById('calculate');

    const chipsInput = document.getElementById('chips');
    const cookiesInput = document.getElementById('cookies');
    const nutsInput = document.getElementById('nuts');
    const totalPriceSpan = document.getElementById('total-price');
    const totalItemsSpan = document.getElementById('total-items');

    // Define the function that is called when the calculate button is clicked
    // This matches the `onclick="Calculatebttn()"` in your HTML
    window.Calculatebttn = () => {
        // Get input values and convert them to numbers
        // Using parseFloat because chips have a price with a decimal (2.5)
        const chipsQuantity = parseFloat(chipsInput.value);
        const cookiesQuantity = parseFloat(cookiesInput.value);
        const nutsQuantity = parseFloat(nutsInput.value);

        // Check for valid positive integers for all input fields.
        // The requirements specifically ask for "positive integer values".
        // Although chips price is 2.5, quantities should still be integers.
        if (isNaN(chipsQuantity) || isNaN(cookiesQuantity) || isNaN(nutsQuantity) ||
            chipsQuantity < 0 || cookiesQuantity < 0 || nutsQuantity < 0 ||
            !Number.isInteger(chipsQuantity) || !Number.isInteger(cookiesQuantity) || !Number.isInteger(nutsQuantity)) {

            totalItemsSpan.textContent = "Please Enter Valid Positive Integers";
            totalPriceSpan.textContent = "Invalid";
        } else {
            // Calculate Total Price
            // Prices are: Chips (2.5), Cookies (3), Nuts (4)
            const totalPrice = (chipsQuantity * 2.5) + (cookiesQuantity * 3) + (nutsQuantity * 4);

            // Calculate Total Items
            const totalItems = chipsQuantity + cookiesQuantity + nutsQuantity;

            // Update the display for Total Price and Total Items
            totalPriceSpan.textContent = totalPrice.toFixed(2); // Format to 2 decimal places for currency
            totalItemsSpan.textContent = totalItems;

            // Check if Total Items is greater than 20
            if (totalItems > 20) {
                totalItemsSpan.textContent = "Cart items should be below 20";
                totalPriceSpan.textContent = "Invalid";
            }
        }
    };

    // If you prefer to attach the event listener directly without `onclick` in HTML:
    // calculateButton.addEventListener('click', Calculatebttn);
    // In that case, you would remove `onclick="Calculatebttn()"` from the HTML button tag.
});