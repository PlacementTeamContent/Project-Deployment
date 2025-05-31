// let chipsEl = document.getElementById("chips");
// let cookiesEl = document.getElementById("cookies");
// let nutsEl = document.getElementById("nuts");
let calculateEl = document.getElementById("calculate");
let totalPriceEL = document.getElementById("total-price");
let totalItemsEl = document.getElementById("total-items");

calculateEl.onclick = function() {
    let chipsEl = document.getElementById("chips").value;
    let nutsEl = document.getElementById("nuts").value;
    let cookiesEl = document.getElementById("cookies").value;

    if (chipsEl.textContent === " " && nutsEl.textContent === " " && cookiesEl.textContent === " ") {
        totalItemsEl.textContent = "Please Enter Valid Positive Integers";
        totalPriceEL.textContent = "Invalid";
    } 
    else if (chipsEl.includes(".") || nutsEl.includes(".") || cookiesEl.includes(".")) {
        totalItemsEl.textContent = "Please Enter Valid Positive Integers";
        totalPriceEL.textContent = "Invalid";
    } 
    else if (parseInt(chipsEl) > 0 && parseInt(nutsEl) > 0 && parseInt(cookiesEl) > 0) { //condition

        let totoalPriceItems = (chipsEl * 2.5) + (nutsEl * 3) + (cookiesEl * 4);
        totalPriceEL.textContent = totoalPriceItems;
        console.log(totalPriceEL)
        
        let totoalCartItems = chipsEl + nutsEl + cookiesEl;
        totalItemsEl.textContent = totoalCartItems;

        if (totalItemsEl < 20) {
            totoalCartItems.textContent = "Cart items should be below 20";
            totalPriceEL.textContent = "Invalid";
        }
    } else {
        totalItemsEl.textContent = "Please Enter Valid Positive Integers";
        totalPriceEL.textContent = "Invalid";
    }
}