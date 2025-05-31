let chips = document.getElementById("chips");
let cookies = document.getElementById("cookies");
let nuts = document.getElementById("nuts");
let totalPrice = document.getElementById("total-price");
let totalItems = document.getElementById("total-items");

function calculation() {
    let totalChips = parseInt(chips.value);
    let totalCookies = parseInt(cookies.value);
    let totalNuts = parseInt(nuts.value);
    if (totalChips > 0 && totalChips==chips.value) {
        if (totalCookies > 0 && totalCookies==cookies.value) {
            if (totalNuts > 0 && totalNuts==nuts.value) {
                let totalItemsValue = totalChips + totalCookies + totalNuts;
                if (totalItemsValue > 20) {
                    totalPrice.textContent = "Invalid";
                    totalItems.textContent = "Cart items should be below 20";
                } else {
                    let totalPriceValue = (totalChips * 2.5) + (totalCookies * 3) + (totalNuts * 4);
                    totalPrice.textContent = totalPriceValue;
                    totalItems.textContent = totalItemsValue;
                }
            } else {
                totalPrice.textContent = "Invalid";
                totalItems.textContent = "Please Enter Valid Positive Integers";
            }
        } else {
            totalPrice.textContent = "Invalid";
            totalItems.textContent = "Please Enter Valid Positive Integers";
        }
    } else {
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Please Enter Valid Positive Integers";
    }
}