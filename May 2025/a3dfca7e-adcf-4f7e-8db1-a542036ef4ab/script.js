let calculate_btn = document.getElementById("calculate");
let totalprice = document.getElementById("total-price");
let totalitems = document.getElementById("total-items");
calculate_btn.onclick = function(){
    let burgervalue = document.getElementById("burger").value;
    let friesvalue = document.getElementById("fries").value;
    let sodavalue = document.getElementById("soda").value;
    if( burgervalue === "" && friesvalue === ""&& sodavalue === ""){
        totalprice.textContent ="Invalid"
        totalitems.textContent ="Please Enter Valid Positive Integers";
    }
    else if (burgervalue.includes(".") || friesvalue.includes(".") || sodavalue.includes(".")){
        totalprice.textContent ="Invalid"
        totalitems.textContent ="Please Enter Valid Positive Integers";
    }
    else if(parseInt(burgervalue)>0 && parseInt(sodavalue)>0 && parseInt(friesvalue)>0 ) {
        let total_price_items = parseInt(burgervalue)*5+parseInt(sodavalue)*2+parseInt(friesvalue)*3
        let no_of_items = parseInt(burgervalue)+parseInt(sodavalue)+parseInt(friesvalue)
        totalprice.textContent = total_price_items
        totalitems.textContent = no_of_items
        if (no_of_items>20){
            totalprice.textContent ="Invalid"
        totalitems.textContent ="Cart items should be below 20";
            
        }

    }
    else {
           totalprice.textContent ="Invalid"
        totalitems.textContent ="Please Enter Valid Positive Integers"; 
        }
}