let Snack=document.getElementById("snacks-list")
let Chips=document.getElementById("chips");
let Cookies=document.getElementById("cookies");
let Nuts=document.getElementById("nuts");
let Calculate=document.getElementById("calculate");
let Totalprice=document.getElementById("total-price");
let Totalitems=document.getElementById("total-items");
calculate.onclick=function(){
    let Chips = list.value*2.5;
    let Cookies = list.value*3;
    let Nuts = list.value*4;
    let Chips_qun = Chips.value;
    let Cookies_qun = Cookies.value;
    let Nuts_qun = Nuts.value;
    let sum_of=parseFloat(Chips_qun)+parseInt(Cookies_qun)+parseInt(Nuts_qun);
    Totalprice.textContent=parseFloat(chips)+parseInt(Cookies)+parseInt(Nuts);
    Totalprice.textContent=sum_of;
    
if (Chips_qun===""||Cookies_qun===""||Nuts_qun===""){
    Totalprice.textContent="Invalid"
    Totalprice.textContent="Please Enter Valid Positive Integer";
}
if (sum_of>20){
    Totalprice.textContent = "Invalid";
    Totalprice.textContent = "Cart Item Should be below 20";
}
}