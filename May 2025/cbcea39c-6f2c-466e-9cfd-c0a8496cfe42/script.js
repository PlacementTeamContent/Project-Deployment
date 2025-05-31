document.getElementById('calculate').addEventListener("click",function(){
    const milk = document.getElementById('milk-choco').value
    const dark = document.getElementById('dark-choco').value
    const white = document.getElementById('white-choco').value
    
    const milkChoco = Number(milk)
    const darkChoco = Number(dark)
    const whiteChoco = Number(white)
    
    const totalPrice = document.getElementById('total-price')
    const totalItems = document.getElementById('total-items')
    
    if (milk === "" || dark === "" || white === "" || 
    milkChoco < 0 || darkChoco < 0 || whiteChoco < 0 ){
        totalItems.textContent = "Please Enter Valid Positive Integers"
        totalPrice.textContent = "Invalid"
        return
    }
    if (!Number.isInteger(milkChoco) || !Number.isInteger(darkChoco) || !Number.isInteger(whiteChoco)){
        totalItems.textContent = "Please Enter Valid Positive Integers"
        totalPrice.textContent = "Invalid"
        return
    }
    
    const totalQty = milkChoco + darkChoco + whiteChoco
    
    if (totalQty > 20){
        totalItems.textContent = "Cart items should be below 20"
        totalPrice.textContent = "Invalid"
        return
    }
    
    const totalCost = milkChoco*5  + darkChoco*6 + whiteChoco*4
    totalPrice.textContent = totalCost
    totalItems.textContent = totalQty
})