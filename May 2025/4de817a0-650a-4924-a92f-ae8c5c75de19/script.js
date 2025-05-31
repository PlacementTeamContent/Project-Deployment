let milkchocoEl = document.getElementById("milk-choco");
let darkchocoEl = document.getElementById("dark-choco");
let whitechocoEl = document.getElementById("white-choco");
let calculate = document.getElementById("calculate");
let totalpriceEl = document.getElementById("total-price");
let totalitems = document.getElementById("total-items");

calculate.addEventListener("click", function(){
    const milk = Number(milkchocoEl.value);
    const dark  = Number(darkchocoEl.value);
    const white = Number(whitechocoEl.value);
    if(milkchocoEl.value === "" || darkchocoEl.value === "" || whitechocoEl === ""||
    !Number.isInteger(milk) || !Number.isInteger(dark) || !Number.isInteger(white)||
    milk <0 || dark < 0 || white < 0){
        totalitems.textContent = "Please Enter Valid Positive Integers";
        totalpriceEl.textContent = "Invalid";
        return;
    }
    const totalel = milk + dark + white;
    if (parseInt(totalel) > 20){
        totalitems.textContent = "Cart items should be below 20";
        totalpriceEl.textContent = "Invalid";
        return;
    }
    const price = (milk*5) + (white*4) + (dark*6);
    totalpriceEl.textContent = price;
    totalitems.textContent = totalel;
})