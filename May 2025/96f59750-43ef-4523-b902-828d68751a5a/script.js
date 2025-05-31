let chipsEl=document.getElementById("chips");
let cookiesEl=document.getElementById("cookies");
let nutsEl=document.getElementById("nuts");
let totalpriceEl=document.getElementById("total-price");
let totalitemsEl=document.getElementById("total-items");
let totalitems=0;


function calculate(){
   if(chipsEl.value>0 && cookiesEl.value>0 && nutsEl.value>0){
    totalitems=parseInt(chipsEl.value)+parseInt(cookiesEl.value)+parseInt(nutsEl.value);
    totalitemsEl.textContent=totalitems
       if(totalitems>20){
          totalitemsEl.textContent="Cartitems should bebelow 20";
          totalpriceEl.textContent="Invalid";
       }
       else{
       let total=0;
       total=(chipsEl.value*2.5)+(cookiesEl.value*3)+(nutsEl.value*4);
       totalpriceEl.textContent=total;
       totalitemsEl.textContent=totalitems}
   }
   else{
     totalitemsEl.textContent="Plase Enter Valid Positive Integers";
      totalpriceEl.textContent="Invaild"  
   }
    
}