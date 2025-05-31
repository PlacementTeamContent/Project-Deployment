let btn=document.getElementById("calculate")
let  price=document.getElementById("total-price")
let item=document.getElementById("total-items")
let burger=document.getElementById("burger")
let fires=document.getElementById("fries")
let soda=document.getElementById("soda")

let total=parseInt(burger.value*5)+parseInt(fires.value*3)+parseInt(soda.value*2)
let items=parseInt(burger.value)+parseInt(fires.value)+parseInt(soda.value)
btn.onclick=function(){
    if (items>20){
        item.textContent="Cart items should be below 20"
        price.textContent="Invalid"
        
    }
    else if((burger.value>0) ||(fires.value>0) || (soda.value>0) ||(burger.value==="") || (fires.value==="") || (soda.value==="") || (Math.floor(burger)!==burger.value) || (Math.floor(fires)!==fires.value) || (Math.floor(soda)!==soda.value)){
        item.textContent="Please Enter Valid Positive Integers"
        price.textContent="Invalid"
        
    }
    else{
        price.textContent=total
        item.textContent=items
    }
}