let first=document.getElementById("chips")
let secound=document.getElementById("cookies")
let third =document.getElementById("nuts")
let tp=document.getElementById("total-price")
let ti=document.getElementById("total-items")
let btn=document.getElementById("calculate")

btn.onclick=function(){
    if(first.value===""||secound.value===""||third.value===""){
        ti.textContent="Please Enter Valid Positive Integers";
        tp.textContent="Invalid";
    }
    else if(first.value<0||secound.value<0||third.value<0){
         ti.textContent="Please Enter Valid Positive Integers";
        tp.textContent="Invalid";
    }
    else if(first.value.includes(".")||secound.value.includes(".")||third.value.includes(".")){
        ti.textContent="Please Enter Valid Positive Integers";
        tp.textContent="Invalid";
    }
    else if(parseInt(first.value)+parseInt(secound.value)+parseInt(third.value)>20){
         ti.textContent="Cart items should be below 20";
        tp.textContent="Invalid";
    }
    else{
        let total_items=parseInt(first.value)+parseInt(secound.value)+parseInt(third.value);
        let total_price=(parseInt(first.value)*2.5)+(parseInt(secound.value)*3)+(parseInt(third.value)*4);
        ti.textContent=total_items;
        tp.textContent=total_price;
    }
}