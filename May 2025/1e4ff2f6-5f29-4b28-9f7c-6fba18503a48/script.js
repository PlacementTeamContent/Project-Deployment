document.getElementById("calculate").addEventListener('click',function(){
    let milkQnty=parseFloat(document.getElementById("milk-choco").value) ;
    let darkQnty=parseFloat(document.getElementById("dark-choco").value) ;
    let whiteQnty=parseFloat(document.getElementById("white-choco").value);
    
    
    let totalPriceEl=document.getElementById("total-price");
    let totalItemsEl=document.getElementById("total-items");
    
    
    if( milkQnty<0 || !Number.isInteger(milkQnty)  || darkQnty<0 || !Number.isInteger(darkQnty)  || whiteQnty<0 || !Number.isInteger(whiteQnty) ){
        totalItemsEl.textContent="Please Enter Valid Positive Integers";
        totalPriceEl.textContent="Invalid";
        return;
    }
    
    let totalItems= milkQnty + darkQnty + whiteQnty;
    
    if(totalItems >20){
        totalItemsEl.textContent="Cart items should be below 20";
        totalPriceEl.textContent="Invalid";
        return;
    }
    
    totalPriceEl.textContent=(milkQnty*5)+(darkQnty*6)+(whiteQnty*4);
    totalItemsEl.textContent=totalItems;
})