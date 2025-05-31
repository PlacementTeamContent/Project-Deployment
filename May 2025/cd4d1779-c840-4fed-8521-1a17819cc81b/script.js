let meallist=document.getElementById("meal-list");
let first=document.getElementById("burger");
let second=document.getElementById("fries");
let third=document.getElementById("soda");
let calculation=document.getElementById("calculate");
let totalPrice=document.getElementById("total-price");
let totalItems=document.getElementById("total-items");

calculation.onclick=function(){
    let fourth=first.value*5;
    let fifth=second.value*3;
    let sixth=third.value*2;
    
    let firstVal=first.value;
    let secondVal=second.value;
    let thirdVal=third.value;
    
    let sum_of=parseFloat(firstVal)+parseFloat(secondVal)+parseFloat(thirdVal);
    totalPrice.textContent=parseFloat(fourth)+parseFloat(fifth)+parseFloat(sixth);
    totalItems.textContent=parseInt(firstVal)+parseInt(secondVal)+parseInt(thirdVal);
    
    
    if(firstVal==="" || secondVal==="" || thirdVal===""){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
    }
    
    if (sum_of>20){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Cart items should be below 20";
    }
    
    if(firstVal.includes(".") || secondVal.includes(".") || thirdVal.includes(".")){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
        
    }
    
    if (firstVal<0 || secondVal<0 || thirdVal<0){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
    }
        
}