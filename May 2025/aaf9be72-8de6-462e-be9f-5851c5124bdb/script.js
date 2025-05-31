let milkq=document.getElementById("milk-choco")
let darkq=document.getElementById("dark-choco")
let whiteq=document.getElementById("white-choco")
let calbutton=document.getElementById("calculate")
let price=document.getElementById("total-price")
let items=document.getElementById("total-items")
let totprice

calbutton.onclick=function(){
    let totmilk=parseInt(milkq.value)
    let totdark=parseInt(darkq.value)
    let totwhite=parseInt(whiteq.value)
    combprice=(totmilk*5)+(totdark*6)+(totwhite*4)
    combitems=totmilk+totdark+totwhite
    
    if((milkq.value).includes(".") || (darkq.value).includes(".") || (whiteq.value).includes(".") ){
        
    }
    if (milkq.value===""&& darkq.value==="" && whiteq.value===""){
         price.textContent="Invalid"
         items.textContent="Please Enter Valid Positive Integers"
    }else{
        if (combitems>20){
        items.textContent="Cart items should be below 20"
        price.textContent="Invalid"
    }
    else if((totmilk<0 || totwhite<0 || totwhite<0) || ((milkq.value).includes(".") || (darkq.value).includes(".") || (whiteq.value).includes("."))){
        price.textContent="Invalid"
        items.textContent="Please Enter Valid Positive Integers"
    }
    else{
        price.textContent=combprice
        items.textContent=combitems
    }
    }
   
    
    
}