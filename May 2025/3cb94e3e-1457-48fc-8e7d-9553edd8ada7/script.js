function calculate(){
    const milkQty = document.getElementById('milk-choco').value;
    const darkQty = document.getElementById('dark-choco').value;
    const whiteQty = document.getElementById('white-choco').value;
    
    const milkprice = 5;
    const darkprice = 6;
    const whiteprice = 4;
    
    const qtyMilk = parseInt(milkQty) || 0;
    const qtyDark = parseInt(darkQty) || 0;
    const qtyWhite = parseInt(whiteQty) || 0;
    
    const totalPrice = (qtyMilk * milkprice) + (qtyDark * darkprice) + ( qtyWhite * whiteprice);
    
    const totalitems = qtyMilk+qtyDark + qtyWhite;
    
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total-items').innerText = totalitems;
}