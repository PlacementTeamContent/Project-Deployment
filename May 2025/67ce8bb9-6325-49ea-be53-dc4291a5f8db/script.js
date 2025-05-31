let burger=document.getElementById("burger");
let fries=document.getElementById("fries");
let soda=document.getElementById("soda");
let total_price=document.getElementById("total-price");
let total_items=document.getElementById("total-items");
let calculate_btn=document.getElementById("calculate");

calculate_btn.onclick = function(){
    let items=parseInt(burger.value)+parseInt(fries.value)+parseInt(soda.value);
    if(burger.value==="" || fries.value==="" || soda.value===""){
        total_price.textContent="Invalid";
        total_items.textContent="Please Enter Valid Positive Integers";
    }
    else if(parseInt(burger.value)<0 || parseInt(fries.value)<0 || parseInt(soda.value)<0){
        total_price.textContent="Invalid";
        total_items.textContent="Please Enter Valid Positive Integers";
    }
    else if(burger.value.includes(".")|| fries.value.includes(".") || soda.value.includes(".")){
        total_price.textContent="Invalid";
        total_items.textContent="Please Enter Valid Positive Integers";
    }
    else if(items>20){
        total_price.textContent="Invalid";
        total_items.textContent="Cart items should be below 20"
    }
    else{
        let price=(burger.value*5)+(fries.value*3)+(soda.value*2);
        total_price.textContent=price;
        total_items.textContent=items;
    }
}