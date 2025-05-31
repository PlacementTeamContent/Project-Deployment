let veggie = document.getElementById("veggie-pizza")
let pepperoni = document.getElementById("pepperoni-pizza")
let cheese = document.getElementById("cheese-pizza")
let calculate = document.getElementById("calculate")
let totalprice = document.getElementById("total-price")
let totalitems = document.getElementById("total-items")
calculate.onclick = function() {
    veggieval = veggie.value
    pepperonival = pepperoni.value
    cheeseval = cheese.value

    vegprice = veggieval * 8
    pepperprice = pepperonival * 10
    cheeseprice = cheeseval * 7

    let total = parseFloat(veggieval) + parseFloat(pepperonival) + parseFloat(cheeseval)
    totalprice.textContent = parseFloat(vegprice) + parseFloat(pepperprice) + parseFloat(cheeseprice)
    totalitems.textContent = parseInt(veggieval) + parseInt(pepperonival)+parseInt(cheeseval)
    
    if(total>20){
       totalprice.textContent="Invalid"
       totalitems.textContent ="Cart items should be below 20"
    }
    if(veggieval===""||pepperonival===""||cheeseval===""){
        totalprice.textContent="Invalid"
        totalitems.textContent ="Please Enter Valid Positive Integers"
    }
    if(veggieval<0||pepperonival<0||cheeseval<0){
        totalprice.textContent="Invalid"
        totalitems.textContent ="Please Enter Valid Positive Integers"
    }
    if(veggieval.includes(".")||pepperonival.includes(".")||cheeseval.includes(".")){
        totalprice.textContent="Invalid"
        totalitems.textContent ="Please Enter Valid Positive Integers"
    }
}