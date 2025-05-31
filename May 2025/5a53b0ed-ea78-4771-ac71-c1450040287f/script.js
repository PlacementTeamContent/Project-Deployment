let burger=document.getElementById('burger')
let fries=document.getElementById('fries')
let soda=document.getElementById('soda')
let button=document.getElementById('calculate')
let TotalPrice=document.getElementById('total-price')
let totalItems=document.getElementById('total-items')

button.onclick=function(){
    let it1=parseInt(burger.value)
    let it2=parseInt(fries.value)
    let it3=parseInt(soda.value)
    if (burger.value>=0 && fries.value>=0 && soda.value>=0 && !burger.value.includes(".") && !fries.value.includes(".") &&!soda.value.includes(".") && burger.value!="" && fries.value!="" && soda.value!=""  ){
       if (burger.value<=20 && fries.value<=20 && soda.value<=20 ){
        TotalPrice.textContent=(burger.value*5)+(fries.value*3)+(soda.value*2)
        totalItems.textContent=it1+it2+it3
           
         
       }  
        else{
             TotalPrice.textContent="Invalid" 
             totalItems.textContent="Cart items should be below 20."  
        }
    }
        else{
        TotalPrice.textContent="Invalid"
        totalItems.textContent="Please Enter Valid Positive Integers"
        }
}