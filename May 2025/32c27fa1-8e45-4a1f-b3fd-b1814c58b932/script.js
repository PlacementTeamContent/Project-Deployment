function calculate() {
    const cokeQty = parseInt(document.getElementById('cokeQty').value) || 0;
    const pepsiQty = parseInt(document.getElementById('pepsiQty').value) || 0;
    const spriteQty = parseInt(document.getElementById('spriteQty').value) || 0;
    const cokePrice = 3.0;
    const pepsiPrice = 2.5;
    const spritePrice = 2.8;
    const totalPrice = (cokeQty * cokePrice) + (pepsiQty * pepsiPrice) + (spriteQty * spritePrice);
    const totalItems = cokeQty + pepsiQty + spriteQty;
    document.getElementById('totalPrice').textContent = Total Price: $$ {
        totalPrice.toFixed(2)
    };
    document.getElementById('totalItems').textContent = Total Items: $ {
        totalItems
    };
}