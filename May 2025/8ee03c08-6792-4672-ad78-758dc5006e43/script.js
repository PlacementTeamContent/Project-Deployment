let milk = document.getElementById("milk-choco")
let dark = document.getElementById("dark-choco")
let white = document.getElementById("white-choco")
let btn = document.getElementById("calculate")
let price = document.getElementById("total-price")
let items = document.getElementById("total-items")

btn.onclick=function(){
    a = milk.value
    b = dark.value
    c = white.value
    let milki = parseInt(a)*5
    let darki = parseInt(b)*6
    let whiti = parseInt(c)*4
    let total = milki+darki+whiti
    let cart = parseInt(a) + parseInt(b) + parseInt(c)
    if(a=="" || b=="" || c=="" || parseInt(a)<=0 || parseInt(b)<=0 || parseInt(c)<=0){
        items.textContent="Please Enter Valid Positive Integers"
        price.textContent="Invalid"
    }
    else if(cart>20){
        items.textContent="Cart items should be below 20"
        price.textContent="Invalid"
    }
    else{
        price.textContent=total
        items.textContent=cart
    }
    
}