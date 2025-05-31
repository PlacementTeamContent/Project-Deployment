let chocolateslist = document.getElementById("chocolates-list");
let milkchoco = document.getElementById("milk-choco");
let darkchoco = document.getElementById("dark-choco");
let whitechoco = document.getElementById("white-choco");
let calculate = document.getElementById("calculate");
let totalprice = document.getElementById("total-price");
let totalitems = document.getElementById("total-items");

calculate.onclick=function(){
    let milk = milkchoco.value*5;
    let dark = darkchoco.value*6;
    let white = whitechoco.value*4;
    
    let milkval =  milkchoco.value;
    let darkval = darkchoco.value;
    let whiteval = whitechoco.value;
    
    let  sum = parseFloat(milkval) + parseFloat(darkval)+ parseFloat(whiteval);
    totalprice.textContent = parseFloat(milk) + parseFloat(dark) + parseFloat(white);
    totalitems.textContent = parseInt(milkval) + parseInt(darkval) + parseInt(whiteval);
    if(milkval==="" || darkval==="" || whiteval===""){
        totalprice.textContent = "Invalid";
        totalitems.textContent = "Please Enter Valid Positive Integers";
    }
    if(sum>20){
        totalprice.textContent = "Invalid";
        totalitems.textContent = "Cart items should be below 20";
    }
    if(milkval.includes(".") || darkval.includes(".") || whiteval.includes(".")){
        totalprice.textContent = "Invalid";
        totalitems.textContent = "Please Enter Valid Positive Integers";
    }
    if(milkval<0 || darkval<0 || whiteval<0){
        totalprice.textContent = "Invalid";
        totalitems.textContent = "Please Enter Valid Positive Integers";
    }
    
}