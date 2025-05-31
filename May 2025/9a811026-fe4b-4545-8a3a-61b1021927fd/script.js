let burger_quantity = document.getElementById("burger");
let fries_quantity = document.getElementById("fries");
let soda_quantity = document.getElementById("soda");
let final_prize = document.getElementById("total-price");
let final_items = document.getElementById("total-items");
function Calculate(){
    let burgers = parseInt(burger_quantity.value);
    let fries = parseInt(fries_quantity.value);
    let sodas = parseInt(soda_quantity.value);
    let total_prize = final_prize
    let total_items = final_items;
    let sum = burgers + fries + sodas;
    if (burgers<0||fries<0||sodas<0 || sum>20){
       total_prize= final_prize.textContent = "Invalid";
       if (sum>20){
           total_items = final_items.textContent = "Cart items should be below 20"
       }
       else{
           total_items = final_items.textContent = "Please Enter Valid Positive Integers"
       }
    }
    else{
        total_items = final_items.textContent = sum;
        total_prize = final_prize.textContent = (burgers*5)+(fries*3)+(sodas*2);
    }
}