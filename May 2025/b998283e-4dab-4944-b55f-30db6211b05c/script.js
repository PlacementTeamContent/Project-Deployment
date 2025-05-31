let pizzas_list=document.getElementById("pizzas-list");
let veggie=document.getElementById("veggie-pizza");
let pepperoni=document.getElementById("pepperoni-pizza");
let cheese=document.getElementById("cheese-pizza");
let total_price=document.getElementById("total-price");
let total_items=document.getElementById("total-items");
let Calculate=document.getElementById("calculate");

calculate.onclick=function(){
    if(veggie==0 & pepperoni==0 & cheese==0){
        pass
    }else{
        total_price.textContent="Invalid";
        total_items.textContent="Please Enter Valid Positive Integers";
    }
}