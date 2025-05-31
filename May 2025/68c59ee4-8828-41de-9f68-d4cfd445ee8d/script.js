let chipsInput = document.getElementById("chips");
let cookiesInput = document.getElementById("cookies");
let nutsInput = document.getElementById("nuts");
let Btnel = document.getElementById("calculate");
let totalPrice = document.getElementById("total-price");
let totalItems = document.getElementById("total-items");

Btnel.onclick = function() {
    let chips = chipsInput.value.trim();
    let cookies = cookiesInput.value.trim();
    let nuts = nutsInput.value.trim();
    
    let qty1 = parseFloat(chips);
    let qty2 = parseFloat(cookies);
    let qty3 = parseFloat(nuts);
    
    let items = qty1 + qty2 + qty3
    let price = (qty1 * 2.5) + (qty2 * 3) + (qty3 * 4)
    totalPrice.textContent = price;
    totalItems.textContent = items;
    
    
    if (chips === "" || cookies === "" || nuts === "") {
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Please Enter Valid Positive Integers";
    }
    if (items > 20) {
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Cart items should be below 20";
    }
    if(qty1 <= 0 || qty2 <= 0 || qty3 <=0) {
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Please Enter Valid Positive Integers";
    }
    if(chips.includes(".") || cookies.includes(".") || nuts.includes(".")) {
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Please Enter Valid Positive Integers";
    }
}