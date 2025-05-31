let priceEl=document.getElementById("total-price");
let itemsEl=document.getElementById("total-items");
function calculate(){
    let burgerEl=document.getElementById("burger").value;
    let friesEl=document.getElementById("fries").value;
    let sodaEl=document.getElementById("soda").value;
    let bug=parseInt(burgerEl)*5;
    let fri=parseInt(friesEl)*3;
    let sod=parseInt(sodaEl)*2;
    
    if (burgerEl==="" || friesEl==="" || sodaEl===""){
        priceEl.textContent="Invalid";
        itemsEl.textContent="Please Enter Valid Positive Integers";
    }
    else if(parseInt(burgerEl)<0 || parseInt(friesEl)<0 || parseInt(sodaEl)<0){
        priceEl.textContent="Invalid";
        itemsEl.textContent="Please Enter Valid Positive Integers";
    }
    else if(burgerEl.includes(".") || friesEl.includes(".") || sodaEl.includes(".")){
        priceEl.textContent="Invalid";
        itemsEl.textContent="Please Enter Valid Positive Integers";
    }
    else if ((parseInt(burgerEl)+parseInt(friesEl)+parseInt(sodaEl))>20){
        priceEl.textContent="Invalid";
        itemsEl.textContent="Cart items should be below 20";
    }
    else if (parseInt(burgerEl)>0 && parseInt(friesEl)>0 && parseInt(sodaEl)>0){
        let totalprice=bug+fri+sod;
        priceEl.textContent=totalprice;
        let totalitems= parseInt(burgerEl)+parseInt(friesEl)+parseInt(sodaEl);
        itemsEl.textContent=totalitems;
    }
}