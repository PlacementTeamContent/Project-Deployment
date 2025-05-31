let milk_choco = document.getElementById("milk-choco");
let dark_choco = document.getElementById("dark-choco");
let white_choco = document.getElementById("white-choco");
let price = document.getElementById("total-price");
let items = document.getElementById("total-items");


function button(){
    let milk = (milk_choco.value);
    let white = (white_choco.value);
    let dark = (dark_choco.value);
    if(((milk) > 0) && ((white) > 0) && ((dark) > 0) && ((milk == parseInt(milk)) && (dark == parseInt(dark)) && (white == parseInt(white)))){
        let m = Number(milk);
        let d = Number(dark);
        let w = Number(white);
        sum = m + d + w;
        console.log(d);
        if (sum > 20){
            items.textContent = "Cart items should be below 20";
            price.textContent = "Invalid";
        }
        else{
            items.textContent = sum;
            price.textContent = (m*5) + (d*6) + (w*4);
        }
        
    }
    else {
        items.textContent = "Please Enter Valid Positive Integers";
        price.textContent = "Invalid";
    }
}