let burger=document.getElementById('burger');
let fries=document.getElementById('fries');
let soda=document.getElementById('fries');
let totalPrice=document.getElementById('total-price');
let totalItems=document.getElementById('total-items');
calculate.onclick=function(){
if((burger.textContent==="") || (fries.textContent==="") ||(soda.textContent==="") ){
    totalPrice.textContent="Invalid";
    totalItems.textContent="Please Enter Valid Positive Integers"
    
}}