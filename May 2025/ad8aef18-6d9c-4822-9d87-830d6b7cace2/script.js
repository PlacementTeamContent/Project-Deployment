let Chips=document.getElementById("chips");
let Cookies=document.getElementById("cookies");
let Nuts=document.getElementById("nuts");
let Calculate=document.getElementById("calculate");
let Totalprice=document.getElementById("total-price");
let Totalitems=document.getElementById("total-items");


Calculate.onclick=function(){
    let sumofprice=(parseFloat(Chips.value)  *2.5+parseFloat(Cookies.value)  *3+parseFloat(Nuts.value)  *4);
    let sumofitems=(parseFloat(Chips.value)  +parseFloat(Cookies.value)  +parseFloat(Nuts.value));
    let Chipsvalue=Chips.value;
    let Cookiesvalue=Cookies.value;
    let Nutsvalue=Nuts.value;
       Totalitems.textContent=sumofitems;
    Totalprice.textContent=sumofprice;
    
    
    if ((Chipsvalue==="") ||(Cookiesvalue==="") || (Nutsvalue==="")){
        Totalprice.textContent="Invalid";
        Totalitems.textContent="Please Enter Valid Positive Integers";
    }else if ((parseInt(Chipsvalue)<0) ||(parseInt(Cookiesvalue)<0) || (parseInt(Nutsvalue)<0)){
        Totalprice.textContent="Invalid";
        Totalitems.textContent="Please Enter Valid Positive Integers";
    }else if ((Chipsvalue.includes(".")) ||(Cookiesvalue.includes(".")) || (Nutsvalue.includes("."))){
        Totalprice.textContent="Invalid";
        Totalitems.textContent="Please Enter Valid Positive Integers";
    }else if (sumofitems>20){
        Totalprice.textContent="Invalid";
        Totalitems.textContent="Cart items should be below 20";
    }
}