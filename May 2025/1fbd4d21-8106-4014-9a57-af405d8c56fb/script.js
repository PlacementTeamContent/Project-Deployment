let BurgerEl = document.getElementById("burger");
let FriesEl = document.getElementById("fries");
let SodaEl = document.getElementById("soda");
let caluculateEl = document.getElementById("calculate");
let TotalPriceEl = document.getElementById("total-price");
let ToatalItemsEl = document.getElementById("total-items");

caluculateEl.addEventListener("click", function(){
    if(BurgerEl === "" || FriesEl === "" || SodaEl === "" ||
    !Number(BurgerEl) || !Number(FriesEl) || !Number(SodaEl) ||
    (BurgerEl <= 0 ) || (FriesEl <= 0) || (SodaEl <= 0) ){
        TotalPriceEl.textContent = "Invaild"
        ToatalItemsEl.textContent = "Please Enter Valid Positive Integers"
        
    }
   
   
   if((parseInt(BurgerEl) + parseInt(FriesEl) + parseInt(SodaEl))>20){
       TotalPriceEl.textContent = "Invaild"
        ToatalItemsEl.textContent = "Cart items should be below"
   } else{
        const ToatalItemsEl = parseInt(BurgerEl) + parseInt(FriesEl) + parseInt(SodaEl)
        const TotalPriceEl = (parseInt(BurgerEl) * 5 ) + (parseInt(FriesEl)* 3) + (parseInt(SodaEl)* 2)
    }
    
})