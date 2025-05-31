let chocolates_list=document.getElementById("chocolates-list")
let Milk_Chocolate=document.getElementById("milk-choco")
let Dark_Chocolate=document.getElementById("dark-choco")
let White_Chocolate=document.getElementById("white-choco")
let total_price=document.getElementById("total-price")
let total_items=document.getElementById("total-items")
let Calculate=document.getElementById("calculate")

calculate.onclick=function(){
    if(chocolates_list==0 & Milk_Chocolate==0 & Dark_Chocolate==0 & White_Chocolate==0){
        pass
    }else{
        total_price.textContent="Invalid"
        total_items.textContent="Please Enter Valid Positive Integers"
    }
}