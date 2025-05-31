function calculate(){
    let milkCh = document.getElementById('milk-choco').value;
    let darkCh = document.getElementById('dark-choco').value;
    let whiteCh = document.getElementById('white-choco').value;
    let totalPrice = document.getElementById('total-price');
    let totalItems = document.getElementById('total-items');
    if(milkCh===""||darkCh===""||whiteCh===""){
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Please Enter Valid Positive Integers";
    }
    milkCh = parseInt(milkCh);
    darkCh = parseInt(darkCh);
    whiteCh = parseInt(whiteCh);
    if (milkCh+darkCh+whiteCh >=20){
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Cart items should be below 20";
    }
    else if(!Number.isInteger(milkCh)||!Number.isInteger(darkCh)||!Number.isInteger(whiteCh)||milkCh<0||darkCh<0||whiteCh<0){
        totalPrice.textContent = "Invalid";
        totalItems.textContent = "Please Enter Valid Positive Integers";
    }
    else{
        totalPrice.textContent = ((milkCh*5)+(darkCh*6)+(whiteCh*4));
        totalItems.textContent = milkCh+darkCh+whiteCh;
    }
    
}