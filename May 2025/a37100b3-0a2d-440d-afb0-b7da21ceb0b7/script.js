let chips = document.getElementById("chips");
let cookies = document.getElementById("cookies");
let nuts = document.getElementById("nuts");
let calculate = document.getElementById("calculate");
let total_price = document.getElementById("total-price");
let total_items = document.getElementById("total-items");

calculate.onclick=function(){
    if(chips == 0 & cookies == 0 & nuts == 0){
        total_price.textContent="Invalid"
        total_items.textContent="Please Enter Valid Positive Integers"
    }
    else{
        total_price.textContent="Invalid"
        total_items.textContent="Please Enter Valid Positive Integers"
    }
   
    total_items = chips+cookies+nuts
    let total_chips_price = chips*2.5
    let total_cookies_price = cookies*3
    let total_nuts_price = nuts*4
    total_price = total_chips_price+total_cookies_price+total_nuts_price
    if (total_items<20){
        
    }
    
}