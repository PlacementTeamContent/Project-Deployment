let chocolatlist = document.getElementById('chocolates-list');
let milkchoco = document.getElementById('milk-choco');
let darkchoco = document.getElementById('dark-choco');
let whitechoco = document.getElementById('white-choco');
let calculation=document.getElementById('calculate');
let totalPrice=document.getElementById('total-price');
let totalItems=document.getElementById('total-items');

calculation.onclick=function(){
    let milk=milkchoco.value*5;
    let dark=darkchoco.value*6;
    let white=whitechoco.value*4;
    let milkvalue=milkchoco.value;
    let darkvalue=darkchoco.value;
    let whitevalue=whitechoco.value;
    let sum_of=parseFloat(milkvalue)+parseFloat(darkvalue)+parseFloat(whitevalue);
    totalPrice.textContent=parseFloat(milk)+parseFloat(dark)+parseFloat(white);
    totalItems.textContent=parseInt(milkvalue)+parseInt(darkvalue)+parseInt(milkvalue);
    if (milkvalue===""||darkvalue===""||whitevalue===""){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
    }
    if(sum_of > 20 ){
        totalPrice.textContent="Invalid";
        total.items.textContent="Cart items should be below 20";
    }
    if(milkvalue<0 || darkvalue<0 || whitevalue<0){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
        
    }
    if(milkvalue.includes(".")||darkvalue.includes(".")||whitevalue.includes(".")){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integer";
    }
};