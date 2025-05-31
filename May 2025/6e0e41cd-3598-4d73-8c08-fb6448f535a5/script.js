let chipsElement = document.getElementById("chips")
let cookiesElement = document.getElementById("cookies")
let nutsElement = document.getElementById("nuts")

let calculateButton = document.getElementById("calculate")
let priceElement = document.getElementById("total-price")
let itemsElement = document.getElementById("total-items")

calculateButton.onclick = function() {
    
    let chipsvalue = chipsElement.value
    let cookiesvalue = cookiesElement.value
    let nutsvalue = nutsElement.value

    let chipsq = chipsvalue * 2.5
    let cookiesq = cookiesvalue * 3
    let nutsq = nutsvalue * 4

    let total_price = (chipsq) + (cookiesq) + (nutsq)
    let total_items = parseFloat(chipsvalue) + parseFloat(cookiesvalue) + parseFloat(nutsvalue)

    
    if (total_items > 20) {
        itemsElement.textContent = "Cart items should be below 20"
        priceElement.textContent = "Invalid"
    }

    else if (chipsvalue === "" || cookiesvalue === "" || nutsvalue === "") {
        itemsElement.textContent = "Please Enter Valid Positive Integers"
        priceElement.textContent = "Invalid"
    }

    else if ((chipsvalue) < 0 || (cookiesvalue) < 0 || (nutsvalue) < 0) {
        itemsElement.textContent = "Please Enter Valid Positive Integers"
        priceElement.textContent = "Invalid"
    }

    else if (chipsvalue.includes(".") || cookiesvalue.includes(".") || nutsvalue.includes(".")) {
        itemsElement.textContent = "Please Enter Valid Positive Integers"
        priceElement.textContent = "Invalid"
    }
    else{
        priceElement.textContent = total_price
        itemsElement.textContent = total_items
    }

    
}