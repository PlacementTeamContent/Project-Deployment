let meallist=document.getElementById("meal-list");
let burgerr=document.getElementById("burger");
let friess=document.getElementById("fries");
let sodaa=document.getElementById("soda");
let calculatee=document.getElementById("calculate");
let totalprice=document.getElementById("total-price");
let totalitems=document.getElementById("total-items");

calculatee.onclick=function(){
    let burgervalue=burgerr.value;
    let friesvalue=friess.value;
    let sodavalue=sodaa.value;
    
    let burgerp=burgervalue*5;
    let friesp=friesvalue*3;
    let sodap=sodavalue*2;
    
    let sum_of=parseFloat(burgerp)+parseFloat(friesp)+parseFloat(sodap);
    totalprice.textContent=parseFloat(burgerp)+parseFloat(friesp)+parseFloat(sodap);
    totalitems.textContent=parseInt(burgervalue)+parseInt(friesvalue)+parseInt(sodavalue);
    
    if(sum_of>20){
        totalitems.textContent="Cart items should be below 20";
        totalprice.textContent="Invalid"
    }
    if(burgervalue==="" || friesvalue==="" || sodavalue===""){
        totalitems.textContent="Please Enter Valid Positive Integers";
        totalprice.textContent="Invalid";
    }
    if(burgervalue<0 || friesvalue<0 || sodavalue<0){
        totalitems.textContent="Please Enter Valid Positive Integers";
        totalprice.textContent="Invalid";
    }
    if(burgervalue.includes(".") || friesvalue.includes(".") || sodavalue.includes(".")){
        totalitems.textContent="Please Enter Valid Positive Integers";
        totalprice.textContent="Invalid";
    }
    
}