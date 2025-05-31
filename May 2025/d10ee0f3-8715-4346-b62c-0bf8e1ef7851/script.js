let chips = document.getElementById('chips');
let cookies = document.getElementById('cookies');
let nuts = document.getElementById('nuts');
let calculate = document.getElementById('calculate');
let totalprice = document.getElementById("total-price");
let totalitems = document.getElementById("total-items");

calculate.addEventListener("click", function() {
    let chipsvalue = parseInt(chips.value.trim());
    let cookiesvalue = parseInt(cookies.value.trim());
    let nutsvalue = parseInt(nuts.value.trim());
    
    let totalitems_el = chipsvalue+cookiesvalue+nutsvalue;
    let totalprice_el = (chipsvalue*2.5)+(cookiesvalue*3)+(nutsvalue*4);
    totalitems.textContent = totalitems_el
    totalprice.textContent = totalprice_el
    if (totalitems_el>20){
        totalitems.textContent = "Cart items should be below 20";
        totalprice.textContent = "Invalid";
    }
    
    if (isNaN(chipsvalue) || isNaN(cookiesvalue) || isNaN(nutsvalue)){
        totalitems.textContent = "Please Enter Valid Positive Integers";
        totalprice.textContent = "Invalid";
    }
    
    if (chipsvalue<0 || cookiesvalue<0 || nutsvalue<0){
        totalitems.textContent = "Please Enter Valid Positive Integers";
        totalprice.textContent = "Invalid";
    }
    
})