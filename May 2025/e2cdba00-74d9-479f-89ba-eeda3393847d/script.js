let milkchoco=document.getElementById("milk-choco")
let darkchoco=document.getElementById("dark-choco")
let whitechoco=document.getElementById("white-choco")
let totalprice=document.getElementById("total-price")
let totalitems=document.getElementById("total-items")
document.getElementById("calculate").addEventListener("click",function(){
    let milkchocoQty=Number(milkchoco.value)
    let darkchocoQty=Number(darkchoco.value)
    let whitechocoQty=Number(whitechoco.value)
    let totali=milkchocoQty+darkchocoQty+whitechocoQty
    if(Number.isInteger(milkchocoQty) && milkchocoQty>0 &&
       Number.isInteger(darkchocoQty) && darkchocoQty>0 &&
       Number.isInteger(whitechocoQty) && whitechocoQty>0
       ){
           if(totali>20){
                totalprice.textContent="Invalid"
                totalitems.textContent="Cart items should be below 20"
            }
            else{
               let totalp=(milkchocoQty*5)+(darkchocoQty*6)+(whitechocoQty*4)
               let totali=milkchocoQty+darkchocoQty+whitechocoQty
               totalprice.textContent=totalp
               totalitems.textContent=totali
            }
           
           
       }
    else{
        totalprice.textContent="Invalid"
        totalitems.textContent="Please Enter Valid Positive Integers"
    }
})