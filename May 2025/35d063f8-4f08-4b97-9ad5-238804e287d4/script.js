document.getElementById("calculate").addEventListener("click", function(){
    let mealList= document.getElementById("meal-list");
    let burger=document.getElementById("burger").value.trim();
    let fries=document.getElementById("fries").value.trim();
    let soda=document.getElementById("soda").value.trim();
    let totalPrice=document.getElementById("total-price");
    let totalItems=document.getElementById("total-items");
    
    
    
    if(burger==="" || fries==="" || soda==="" ||
    !Number.isInteger(burger) || !Number.isInteger(fries) || !Number.isInteger(soda) ||
    Number(burger) <0 || Number(fries) <0 || Number(soda)<0)
    {
        totalItems.textContent="Please Enter Valid Positive Integers";
        totalPrice.textContent="Invalid";
        return;
    }
    
    totalPrice=((Number(burger) * 5) +(Number(fries) * 3) + (Number(soda) * 2));
    totalItems.textContent= (Number(burger) + Number(Fries) + Number(soda));
     if(totalItems > 20){
        totalItems.textContent="Cart items should be below 20";
        totalPrice.textContent="Invalid";
        return;
     }
    
});