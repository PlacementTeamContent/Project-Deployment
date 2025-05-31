let milk = document.getElementById("milk-choco");
let dark = document.getElementById("dark-choco");
let white = document.getElementById("white-choco");
let btnEl = document.getElementById("calculate");
let priceMsg = document.getElementById("total-price");
let itemsMsg = document.getElementById("total-items");
btnEl.onclick =function(){
    let milkinput = milk.value;
    let darkinput = dark.value;
    let witeinput = white.value;
    total = parseInt(milkinput)+parseInt(darkinput)+parseInt(witeinput);
    if (milkinput === "" || darkinput === "" || witeinput === ""){
        priceMsg.textContent = "Invalid"
        itemsMsg.textContent = "Please Enter Valid Positive Integers"
    }
    else if (total>20){
        priceMsg.textContent = "Invalid"
        itemsMsg.textContent = "Cart items should be below 20"
    }
    else if (milkinput.includes(".") || darkinput.includes(".") || witeinput.includes(".") ){
         priceMsg.textContent = "Invalid"
        itemsMsg.textContent = "Please Enter Valid Positive Integers"
    }
    else if (parseInt(milkinput) <0 || parseInt(darkinput)<0 || parseInt(witeinput)<0) {
        priceMsg.textContent = "Invalid"
        itemsMsg.textContent = "Please Enter Valid Positive Integers"
    }
    else{
        let price = parseInt(milkinput)*5+parseInt(darkinput)*6+parseInt(witeinput)*4
        priceMsg.textContent = price;
        itemsMsg.textContent = total;
    }
}