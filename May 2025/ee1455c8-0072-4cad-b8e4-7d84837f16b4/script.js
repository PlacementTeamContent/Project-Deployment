let calculate_btn=document.getElementById("calculate");
let total_price=document.getElementById("total-price");
let total_items=document.getElementById("total-items");

calculate_btn.onclick=function(){
    let milk_chc=document.getElementById("milk-choco").value;
    let dark_choco=document.getElementById("dark-choco").value;
    let white_choco=document.getElementById("white-choco").value;
    if(milk_chc==="" || dark_choco==="" || white_choco===""){
        total_price.textContent="Invalid";
        total_items.textContent="Please Enter Valid Positive Integers";
        
    }else if(milk_chc.includes(".") || dark_choco.includes(".") || white_choco.includes(".")){
        total_price.textContent="Invalid";
        total_items.textContent="Please Enter Valid Positive Integers";
    }else if(parseInt(milk_chc)>0 && parseInt(dark_choco)>0 && parseInt(white_choco)>0){
        let sum_price=parseInt(milk_chc)*5 + parseInt(dark_choco)*6 + parseInt(white_choco)*4;
        let sum_items=parseInt(milk_chc)+parseInt(dark_choco)+parseInt(white_choco);
        total_price.textContent=sum_price;
        total_items.textContent=sum_items;
        if(parseInt(milk_chc)+parseInt(dark_choco)+parseInt(white_choco)>20){
            total_price.textContent="Invalid";
            total_items.textContent="Cart items should be below 20";
        }
    }else{
        total_price.textContent="Invalid";
        total_items.textContent="Please Enter Valid Positive Integers";
    }
};