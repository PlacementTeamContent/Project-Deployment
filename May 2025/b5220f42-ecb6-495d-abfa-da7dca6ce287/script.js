let milk=document.getElementById("milk-choco")
let dark=document.getElementById("dark-choco")
let white=document.getElementById("white-choco")
let calculate=document.getElementById("calculate")
let totalprice=document.getElementById("total-price")
let totalitems=document.getElementById("total-items")
calculate.onclick=function(){
    let cart=parseInt(milk.value)+parseInt(dark.value)+parseInt(white.value)
    let m=milk.value
    let d=dark.value
    let w=white.value
    if(milk.value===""||dark.value===""||white.value===""){
        totalprice.textContent="Invalid"
        totalitems.textContent="Please Enter Valid Positive Integers"
    }
    else if(cart>20){
        totalitems.textContent="Cart items should be below 20"
        totalprice.textContent="Invalid"
    }
    else if(milk.value<0||dark.value<0||white.value<0){
        totalprice.textContent="Invalid"
        totalitems.textContent="Please Enter Valid Positive Integers"
    }
    // else if(!m.isInteger()||!d.isInteger()||!w.isInteger()||m<=0||d<=0||w<=0){
    //     totalprice.textContent="Invalid"
    //     totalitems.textContent="Please Enter Valid Positive Integers"
    // }
    else{
        totalprice.textContent=milk.value*5+dark.value*6+white.value*4
        totalitems.textContent=cart
    }
}