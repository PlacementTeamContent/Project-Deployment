let cal=document.getElementById("calculate");
let tot_price=document.getElementById("total-price");
let tot_items=document.getElementById("total-items");


cal.addEventListener("click",function(){
    let veg=document.getElementById("veggie-pizza").value;
    let pep=document.getElementById("pepperoni-pizza").value;
    let ch=document.getElementById("cheese-pizza").value;
    
    if (parseInt(veg)>0 && parseInt(pep)>0 && parseInt(ch)>0 ){
        tot_price.textContent= (parseInt(veg)*8) + (parseInt(pep)*10) + (parseInt(ch)*7);
        tot_items.textContent=parseInt(veg)+parseInt(pep)+parseInt(ch);
    }
    
    if(veg==="" || pep==="" || ch==""){
        tot_price.textContent="Invalid";
        tot_items.textContent="Please Enter Valid Positive Integers";
    }
    
    if(parseInt(veg)<0 || parseInt(pep)<0 || parseInt(ch)<0){
        tot_price.textContent="Invalid";
        tot_items.textContent="Please Enter Valid Positive Integers";
    }
    
    if (veg.includes(".") || pep.includes(".") || ch.includes(".")){
        tot_price.textContent="Invalid";
        tot_items.textContent="Please Enter Valid Positive Integers";
    }
    
     let summ=parseInt(veg)+parseInt(pep)+parseInt(ch);
     
    if (summ>20){
        tot_price.textContent="Invalid";
        tot_items.textContent="Cart items should be below 20";
    }
//   
//   if (sum>=20){
//   
//   }
// })

})