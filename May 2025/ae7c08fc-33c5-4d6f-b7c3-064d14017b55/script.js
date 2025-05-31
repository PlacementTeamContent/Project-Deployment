let calculates = document.getElementById("calculate");
calculates.onclick = function() {
    let veggiepizza = document.getElementById("veggie-pizza").value;
    let pepperonipizza = document.getElementById("pepperoni-pizza").value;
    let cheesepizza = document.getElementById("cheese-pizza").value;

    veggiepizza = Number(veggiepizza);
    pepperonipizza = Number(pepperonipizza);
    cheesepizza = Number(pepperonipizza);
    let totalprice = document.getElementById('total-price');
    let totalitems = document.getElementById("total-items");
    if (veggiepizza == "" || pepperonipizza == "" || cheesepizza == "") {
        totalprice.textContent = "Invalid";
        totalitems.textContent = "Please Enter Valid Positive Integers";
        return;
    }
    if (veggiepizza < 0 || pepperonipizza < 0 || cheesepizza < 0) {
        totalprice.textContent = "Invalid";
        totalitems.textContent = "Please Enter Valid Positive Integers";
        return;
    }
    if (Math.floor(veggiepizza) != veggiepizza || Math.floor(pepperonipizza) != pepperonipizza || Math.floor(cheesepizza) != cheesepizza) {
        totalprice.textContent = "Invalid";
        totalitems.textContent = "Please Enter Valid Positive Integers";
        return;
    }
    let items = veggiepizza + pepperonipizza + cheesepizza;
    if (items > 20) {
        totalitems.textContent = "Cart items should be below 20";
        totalprice.textContent = "Invalid";
        // return;
    }
    else{
    let price = veggiepizza * 8 + pepperonipizza * 10 + cheesepizza * 7;
    totalprice.textContent = "Total Price: " + price;
    totalitems.textContent = "Total Items: " + items;}
};