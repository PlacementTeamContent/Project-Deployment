let totalPriceEl=document.getElementById("total-price");
let totalItemsEl=document.getElementById("total-items");
let burgerPrice=0;
let friesPrice=0;
let sodaPrice=0;
let burgerQuantityVal=0;
let friesQuantityVal=0;
let sodaQuantityVal=0;
let calculateBtnEl=document.getElementById("calculate");
calculateBtnEl.addEventListener("click", function(){
    if (burgerEl.value==="" || friesEl.value==="" || sodaEl.value==="" || burgerEl.value<0 || friesEl.value<0 || sodaEl.value<0 ||  burgerEl.value<=20 || friesEl.value<=20 || sodaEl.value<=20){
        totalPriceEl.textContent="Invalid";
        totalItemsEl.textContent="Please Enter Valid Positive Integers";
        return;
    }
    else{
        let totalPrice=burgerPrice+friesPrice+sodaPrice;
        let totalItems=burgerQuantityVal+friesQuantityVal+sodaQuantityVal;
        totalPriceEl.textContent="$"+totalPrice;
        totalItemsEl.textContent=totalItems;
    }
});
let burgerEl=document.getElementById("burger");
burgerEl.addEventListener("change",function(event){
    burgerQuantityVal=parseInt(event.target.value);
    burgerPrice=parseInt(burgerQuantityVal * 5);
    
});
let friesEl=document.getElementById("fries");
friesEl.addEventListener("change",function(event){
    friesQuantityVal=parseInt(event.target.value);
    friesPrice=parseInt(friesQuantityVal * 3);
});
let sodaEl=document.getElementById("soda");
sodaEl.addEventListener("change",function(event){
    sodaQuantityVal=parseInt(event.target.value);
    sodaPrice=parseInt(sodaQuantityVal * 2);
});