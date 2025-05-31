let MilkChocolate = document.getElementById('milk-choco');
let DarkChocolate = document.getElementById('dark-choco');
let WhiteChocolate = document.getElementById('white-choco');
let TotalPrice = document.getElementById('total-price');
let TotalItems = document.getElementById('total-items');

function calculate() {
    let Milkchocho = parseInt(MilkChocolate.value);
    let Milkchocho1 = parseFloat(MilkChocolate.value);
    let Darkchocho = parseInt(DarkChocolate.value);
    let Darkchocho1 = parseFloat(DarkChocolate.value);
    let Whitechocho = parseInt(WhiteChocolate.value);
    let Whitechocho1 = parseFloat(WhiteChocolate.value);
    totali = Milkchocho + Darkchocho + Whitechocho;
    if (isNaN(Milkchocho) || isNaN(Darkchocho) || isNaN(Whitechocho)) {
        TotalPrice.textContent = "Invalid";
        TotalItems.textContent = "Please Enter Valid Positive Integers";
    } else {
        if (Milkchocho < 0 || Darkchocho < 0 || Whitechocho < 0) {
            TotalPrice.textContent = "Invalid";
            TotalItems.textContent = "Please Enter Valid Positive Integers";
        } else {
            if (totali > 20) {
                TotalPrice.textContent = "Invalid";
                TotalItems.textContent = "Cart items should be below 20";
            } else {
                if (Milkchocho !== Milkchocho1 || Darkchocho !== Darkchocho1 || Whitechocho !== Whitechocho1) {
                    TotalPrice.textContent = "Invalid";
            TotalItems.textContent = "Please Enter Valid Positive Integers";
                }
                else{
                let bill = (Milkchocho * 5) + (Darkchocho * 6) + (Whitechocho * 4);
                TotalItems.textContent = totali
                TotalPrice.textContent = bill
                }
            }
        }
    }
}