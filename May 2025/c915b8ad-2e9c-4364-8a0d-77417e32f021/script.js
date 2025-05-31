let mchoco=document.getElementById("milk-choco");
let dchoco=document.getElementById("dark-choco");
let wchoco=document.getElementById("white-choco");
let price=document.getElementById("total-price");
let items=document.getElementById("total-items");
calculate.onclick=function(){
    let mc=mchoco.value*5;
    let dc=dchoco.value*6;
    let wc=wchoco.value*4;
    let m=mchoco.value;
    let d=dchoco.value;
    let w=wchoco.value;
    let totalprice=parseInt(mc)+parseInt(dc)+parseInt(wc);
    let totalitems=parseInt(m)+parseInt(d)+parseInt(w);
    price.textContent=totalprice;
    items.textContent=totalitems
    if(m==="" || d==="" || w===""){
        price.textContent="Invalid";
        items.textContent="Please Enter Valid Positive Integers"
    }
    if(totalitems>20){
        price.textContent="Invalid";
        items.textContent="Cart items should be below 20"
    }
    if(m.includes(".") || d.includes(".") || w.includes(".")){
        price.textContent="Invalid";
        items.textContent="Please Enter Valid Positive Integers"
    }
    if(m<0 || d<0 || w<0){
        price.textContent="Invalid";
        items.textContent="Please Enter Valid Positive Integers"
    }
};