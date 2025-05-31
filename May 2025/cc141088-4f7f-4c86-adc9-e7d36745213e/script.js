let choclate=document.getElementById("chocolates-list");
let milk=document.getElementById("milk-choco");
let dark=document.getElementById("dark-choco");
let white=document.getElementById("white-choco");
let TotalPrice=document.getElementById("total-price");
let TotalItems=document.getElementById("total-items");
let calcualte=document.getElementById("calculate");
calculate.onclick=function(){
    millk=milk.value*5;
    darrk=dark.value*6;
    whitte=white.value*4
    milkval=milk.value;
    darkval=dark.value;
    whiteval=white.value;
    sum_of=parseFloat(milkval)+parseFloat(darkval)+parseFloat(whiteval);
    TotalPrice=parseFloat(millk)+parseFloat(darrk)+parseFloat(whitte);
    TotalItems=parseInt(milkval)+parseInt(darkval)+parseInt(whiteval);
    if(milkval===""||darkval===""||whiteval===""){
        TotalPrice.textContent="Invalid";
        TotalItems.textContent="Please Enter Valid Positive Integers";
    }
    if(sum_of>20){
        TotalPrice.textContent="Invalid";
        TotalItems.textContent="Cart items should be below 20";
    }
    if(milkval.includes(".")||darkval.includes(".")||whiteval.includes(".")){
        TotalPrice.textContent="Invalid";
        TotalItems.textContent="Please Enter Valid Positive Integers";
    }
}