let Total_price = document.getElementById("total-price");
let Total_items = document.getElementById("total-items");
let Chips = document.getElementById("chips");
let Cookies = document.getElementById("cookies");
let Nuts = document.getElementById("nuts");

function calculate(){
    if ((parseInt(Chips.value) + parseInt(Cookies.value) + parseInt(Nuts.value)) > 20) {
          Total_items.textContent ="Cart items should be below 20";
          Total_price.textContent ="Invalid";
    }
    else if   ((parseInt(Chips.value * 2.5) + parseInt(Cookies.value * 3) + parseInt(Nuts.value * 4))) {
        
    }
}