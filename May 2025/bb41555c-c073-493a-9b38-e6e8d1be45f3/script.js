let calculatee = document.getElementById("calculate")

calculatee.onclick = function() {
    let totalprice = document.getElementById("total-price")
    let totalitems = document.getElementById("total-items")


    let milkchoco = document.getElementById("milk-choco").value
    let darkchoco = document.getElementById("dark-choco").value
    let whitechoco = document.getElementById("white-choco").value

if (milkchoco === "" && darkchoco === "" && whitechoco == "") {
        totalprice.textContent = "Invalid"
        totalitems.textContent = "Please Enter Valid Positive Integers"
    
} 
else if (milkchoco.includes(".") || darkchoco.includes(".") || whitechoco.includes(".")) {
        totalprice.textContent = "Invalid"
        totalitems.textContent = "Please Enter Valid Positive Integers"
    } 
else if (parseInt(milkchoco) > 0 && parseInt(darkchoco) > 0 && parseInt(whitechoco) > 0) {
        total_p = parseInt(milkchoco)* 5 + parseInt(darkchoco) * 6 + parseInt(whitechoco) * 4
        totalprice.textContent = parseInt(total_p)
        total_i = parseInt(milkchoco) + parseInt(darkchoco) + parseInt(whitechoco)
        totalitems.textContent = parseInt(total_i)
        if (total_i > 20) {
            totalprice.textContent = "Invalid"
            totalitems.textContent = "Cart items should be below 20"
      } 

}
else  if (parseInt(milkchoco) < 0 && parseInt(darkchoco) < 0 && parseInt(whitechoco) < 0){
    totalprice.textContent = "Invalid"
    totalitems.textContent = "Please Enter Valid Positive Integers"
 }
}