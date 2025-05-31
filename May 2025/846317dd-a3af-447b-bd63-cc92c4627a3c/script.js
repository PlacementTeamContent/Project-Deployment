let milk_choco = document.getElementById("milk-choco")
let dark_choco = document.getElementById("dark-choco")
let white_choco = document.getElementById("white-choco")
let Calculate = document.getElementById("calculate")
let total_price = document.getElementById("total-price")
let total_items = document.getElementById("total-items")

Calculate.onclick = function(){
    let price = parseInt( milk_choco.value)*5 + parseInt( dark_choco.value)*6 +parseInt( white_choco.value)*4
    let total =  parseInt( milk_choco.value) +  parseInt( dark_choco.value) +  parseInt( white_choco.value)
    if (total >20){
        total_price.textContent = "Invalid"
        total_items.textContent = "Cart items should be below 20"
    }else if (milk_choco.value ==="" || dark_choco.value ==="" || white_choco.value ===""){
        total_price.textContent = "Invalid"
        total_items.textContent = "Please Enter Valid Positive Integers"
    } else if (milk_choco.value<0 || dark_choco.value<0 || white_choco.value <0){
        total_price.textContent = "Invalid"
        total_items.textContent = "Please Enter Valid Positive Integers"
    }else if (Number(milk_choco.value) !== parseInt(milk_choco.value) || Number(dark_choco.value) !== parseInt(dark_choco.value) || Number(white_choco.value) !== parseInt(white_choco.value) ){
        total_price.textContent = "Invalid"
        total_items.textContent = "Please Enter Valid Positive Integers"
    }else{
        total_price.textContent = price
        total_items.textContent = total
    }
}