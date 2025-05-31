let veggie = document.getElementById("veggie-pizza");
let pepp = document.getElementById("pepperoni-pizza");
let cheese = document.getElementById("cheese-pizza");
let calculate= document.getElementById("calculate");
let totalprice = document.getElementById("total-price");
let totalitem = document.getElementById("total-items");
calculate.onclick= function(){
    let veggiee=veggie.value * 8;
    let peppe=pepp.value * 10;
    let cheesee=cheese.value * 7;
    let vegval=veggie.value;
    let pepval=pepp.value;
    let chesval=cheese.value;
    let sum_of=parseFloat(vegval)+parseFloat(pepval)+parseFloat(chesval);
    totalprice.textContent=parseFloat(veggiee)+parseFloat(peppe)+parseFloat(cheesee);
    totalitem.textContent=parseInt(vegval)+parseInt(pepval)+parseInt(chesval);
    if(vegval===""||pepval===""||chesval===""){
        totalprice.textContent="Invaild";
        totalitem.textContent="Please Enter Valid Positive Integers";
        
    }
    if(sum_of>20){
         totalprice.textCiontent="Invaild";
         totalitem.textContent="Cart items should be below 20";
        
    }
    if(vegval.includes(".")||pepval.includes(".")||chesval.includes(".")){
           totalprice.textContent="Invaild";
           totalitem.textContent="Please Enter Valid Positive Integers";  
    }
    if(vegval<0||pepval<0||chesval<0){
        totalprice.textCiontent="Invaild";
        totalitem.textContent="Cart items should be below 20";
        
    }
}