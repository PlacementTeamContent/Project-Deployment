document.getElementById('calculate').addEventListener('click', function() {
    const milk = document.getElementById('milk-choco').value.trim();
    const dark = document.getElementById('dark-choco').value.trim();
    const white = document.getElementById('white-choco').value.trim();

    const milkqty = parseFloat(milk);
    const darkqty = parseFloat(dark);
    const whiteqty = parseFloat(white);
     const totalelements=document.getElementById('total-items');
     const totalamount=document.getElementById('total-price');
    if (!milk || !dark || !white || !Number.isInteger(milkqty) || !Number.isInteger(darkqty) || !Number.isInteger(whiteqty) || milkqty < 0 || darkqty < 0 || whiteqty < 0){
    totalelements.textContent="Please Enter Valid Positive Integers";
    totalamount.textContent="Invalid";
    return;}
     totalchocolates= milkqty+darkqty+whiteqty;
    if (totalchocolates>20){
        totalelements.textContent="Cart items should be below 20";
        totalamount.textContent="Invalid";
        return;
    }
    totalprice= (milkqty*5)+(darkqty*6)+(whiteqty*4);
    
    totalelements.textContent=totalchocolates;
    totalamount.textContent=totalprice;
}
);