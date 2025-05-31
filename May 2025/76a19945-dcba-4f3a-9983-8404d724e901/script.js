let milk=document.getElementById("milk-choco");
let dark=document.getElementById("dark-choco");
let white=document.getElementById("white-choco");
let calculate1=document.getElementById("calculate");
let totalPrice=document.getElementById("totalPrice");
let totalItems=document.getElementById("totalItems");

calculate1.onclick=function(){
    let milkCho=milk*5;
    let darkCho=dark*6;
    let whiteCho=white*4;
    
    let milkFirst=milkCho.value;
    let darkChoSecond=darkCho.value;
    let whiteChothird=whitecho.value;
    
    let sum_of=parseInt(milkFirst)+parseInt(darkCho)+parseInt(whiteChothird);
    totalPrice=parseInt(milkFirst)+parseInt(darkChoSecond)+parseInt(whiteChothird);
    totalItems=parseInt(milkFirst)+parseInt(darkChoSecond)+parseInt(whiteChothird);
    
    if (totalItems>20){
        totalItems.textContent="Cart items should be below 20";
        totalPricerice.textContent="Invalid";
    }
    
}