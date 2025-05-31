let veggie=document.getElementById("veggie-pizza")
let pepperoni=document.getElementById("pepperoni-pizza")
let cheese=document.getElementById("cheese-pizza")
let Caliculate=document.getElementById("calculate")
let totalPrice1=document.getElementById("total-price")
let totalItems1=document.getElementById("total-items")
Caliculate.onclick=function(){
    let totalPrice=parseInt(veggie.value)*8+parseInt(pepperoni.value)*10+parseInt(cheese.value)*7
    let totalItems=parseInt(veggie.value)+parseInt(cheese.value)+parseInt(pepperoni.value)
    console.log(parseInt(veggie.value))
    if (((veggie.value)==="") || ((pepperoni.value)==="") || ((cheese.value)==="") ){
        totalPrice1.textContent="Invalid"
        totalItems1.textContent="Please Enter Valid Positive Integers"
    }
    else if ((parseInt(veggie.value)+parseInt(cheese.value)+parseInt(pepperoni.value))>20){
        totalItems1.textContent="Cart items should be below 20"
        totalPrice1.textContent="Invalid"
    }
    else if ((parseInt(veggie.value)<0) || (parseInt(pepperoni.value)<0) || (parseInt(cheese.value)<0) ){
        totalPrice1.textContent="Invalid"
        totalItems1.textContent="Please Enter Valid Positive Integers"
    }
    else{
        totalItems1.textContent=totalItems
        totalPrice1.textContent=totalPrice
    }
}