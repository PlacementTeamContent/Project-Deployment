let milkChocolate = document.getElementById("milk-choco").value.trim();
let darkChocolate = document.getElementById("dark-choco").value.trim();
let whiteChocolate = document.getElementById("white-choco").value.trim();
let totalprice = document.getElementById("total-price");
let totalItems = document.getElementById("total-items");
let calculate = 0;
document.getElementById("Calculate").onclick= function(){
    if (milkChocolate < 0 && darkChocolate < 0 && whiteChocolate < 0){
        totalprice.innerHTML = "Invaild";
        totalItems.innerHTML = "Enter Vaild Positive Integers";
    }
    else{
        calculate = milkChocolate * 5 + darkChocolate * 6 + whiteChocolate * 4;
        totalprice.innerHTML = calculate;
        totalItems.innerHTML = milkChocolate + darkChocolate + whiteChocolate;
    }
};