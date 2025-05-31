let chocolateslist=document.getElementById("chocolates-list")
let milkchoco=document.getElementById("milk-choco")
let darkchoco=document.getElementById("dark-choco")
let whitechoco=document.getElementById("white-choco")
let calculate=document.getElementById("calculate")
let totalprice=document.getElementById("total-price")
let totalitems=document.getElementById("total-items")
let milkchoco1=milkchoco.value
let darkchoco1=darkchoco.value
let whitechoco1=whitechoco.value
milkchoco1=parseInt(milkchoco1)
darkchoco1=parseInt(darkchoco1)
whitechoco1=parseInt(whitechoco1)

calculate.onclick=function(){
if (!(milkchoco1==""||darkchoco1==""||whitechoco1=="")){
    let milkchoco1=milkchoco.value
    let darkchoco1=darkchoco.value
    let whitechoco1=whitechoco.value
    let marks=((milkchoco1*5)+(darkchoco1*6)+(whitechoco1*4))
    let totalmarks=parseInt(milkchoco1)+parseInt(darkchoco1)+parseInt(whitechoco1)
    totalprice.textContent=marks
    totalitems.textContent=totalmarks
    
}

else if ((milkchoco1==""||darkchoco1==""||whitechoco1=="")) {
    totalprice.textContent="Invaild"
    totalitems.textContent="Enter a valid positive integers"
}
}