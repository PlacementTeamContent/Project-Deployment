let chipe = document.getElementById('chips');
let cookies = document.getElementById('cookies');
let nuts = document.getElementById('nuts');
let calculate = document.getElementById('calculate');
let totalprice = document.getElementById('total-price');
let totalitems = document.getElementById('total-items');
calculate.onclick = function() {
    let chipe_value = chipe.value
    let cookies_value = cookies.value
    let nuts_value = nuts.value
    let sum_is = parseInt(chipe_value) + parseInt(cookies_value) + parseInt(nuts_value);
    totalitems.textContent=sum_is;
    totalprice.textContent=chipe_value*2.5+cookies_value*3+nuts_value*4
if ((chipe_value < 0) || (cookies_value < 0) || (nuts_value < 0)) {
       totalitems.textContent ="Please Enter Valid Positive Integers";
        totalprice.textContent = "Invalid";
    }
}