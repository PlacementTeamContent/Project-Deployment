let calBtn = document.getElementById("calculate");

let milkInput = document.getElementById("milk-choco");
let darkInput = document.getElementById("dark-choco");
let whiteInput = document.getElementById("white-choco");

let items = document.getElementById("total-items");
let totalPrice = document.getElementById("total-price");
    
calBtn.addEventListener("click",function() {
    let milk = Number(milkInput.value);
    let dark = Number(darkInput.value);
    let white = Number(whiteInput.value);
     
    let a = milk + dark + white
    items.textContent = a
    
     if( !milk || !dark || !white)
     {
       totalPrice.textContent = "Invalid";
       items.textContent = "Please Enter Valid Positive Integers";
    }
    
     else if (milk<0 || dark<0 || white<0){
        totalPrice.textContent = "Invalid";
        items.textContent = "Please Enter Valid Positive Integers";
     }
    
    else if (!Number.isInteger(milk) || !Number.isInteger(dark) || !Number.isInteger(white)){

        totalPrice.textContent = "Invalid";
        items.textContent = "Please Enter Valid Positive Integers";
    }
    
    else if (a > 20){
        items.textContent = "Cart items should be below 20";
        totalPrice.textContent = "Invalid";
    }
    
    else{
        totalPrice.textContent = (milk*5)+(dark*6)+(white*4)
        items.textContent = milk+dark+white;
    }
    
    
})