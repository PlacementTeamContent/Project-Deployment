function calculate(){
    let veggie = document.getElementById("veggie-pizza").value;
    let pepper = document.getElementById("pepperoni-pizza").value;
    let cheese = document.getElementById("cheese-pizza").value;
    let price = document.getElementById("total-price");
    let item = document.getElementById("total-items");
    
    let veg = veggie*8
    let pep = pepper*10
    let che = cheese*7
    
    if ( veggie.includes(".") || pepper.includes(".") || cheese.includes(".")){
        price.textContent="Invalid"
        item.textContent="Please Enter Valid Positive Integers"
    }
    else if ((parseInt(veggie)+ parseInt(pepper)+ parseInt(cheese))>20){
        price.textContent="Invalid"
        item.textContent="Cart items should be below 20"
    }
    else if(parseInt(veggie)>0 && parseInt(pepper)>0 && parseInt(cheese)>0){
        let amount= parseInt(veg+pep+che)
        price.textContent=amount
        let items = (parseInt(veggie)+parseInt(pepper)+parseInt(cheese))
        item.textContent=items
    }
    else if (veggie<0 || pepper<0 || cheese<0){
        price.textContent="Invalid"
        item.textContent="Please Enter Valid Positive Integers"
        
    }
    else if (veggie==="" || papper==="" || cheese===""){
        price.textContent="Invalid"
        item.textContent="Please Enter Valid Positive Integers"
    }
    
    
}