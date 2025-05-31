let milk=document.getElementById("milk-choco");
let dark=document.getElementById("dark-choco");
let white=document.getElementById("white-choco");
let totalPrice=document.getElementById("total-price");
let totalItems=document.getElementById("total-items");
let calculate=document.getElementById("calculate");
calculate.onclick=function(){
    let items=parseInt(milk.value)+parseInt(dark.value)+parseInt(white.value);
    if(items>20){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Cart items should be below 20";
    }else if(milk.value===""||dark.value===""||white.value===""){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
    }else if(milk.value<=0||dark.value<=0||white.value<=0){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
    }else if(milk.value.includes(".")||dark.value.includes(".")||white.value.includes(".")){
        totalPrice.textContent="Invalid";
        totalItems.textContent="Please Enter Valid Positive Integers";
    }else{
        totalPrice.textContent=(parseInt(milk.value*5))+(parseInt(dark.value*6))+(parseInt(white.value*4))
        totalItems.textContent=items;
    }
   
}