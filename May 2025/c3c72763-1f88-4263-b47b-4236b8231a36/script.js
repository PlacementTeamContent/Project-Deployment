let veggiePizza=document.getElementById('veggie-pizza')
let pepperoniPizza=document.getElementById('pepperoni-pizza')
let cheesePizza=document.getElementById('cheese-pizza')
let calculate=document.getElementById('calculate')
let totalPrice=document.getElementById('total-price')
let totalItems=document.getElementById('total-items')



calculate.onclick=function(){
    let veggiePizzavalue=parseInt(veggiePizza.value)
    let pepperoniPizzavalue=parseInt(veggiePizza.value)
    let cheesePizzavalue=parseInt(veggiePizza.value)
    
    if (veggiePizzavalue>0 && pepperoniPizzavalue>0 && cheesePizzavalue>0){
       let price=veggiePizzavalue*8+pepperoniPizzavalue*10+cheesePizzavalue*7
       totalPrice.textContent=price
       let quantity=veggiePizzavalue+pepperoniPizzavalue+cheesePizzavalue
       if (quantity>20){
           totalItems.textContent="Cart items should be below 20"
           totalPrice.textContent="Invalid"
       }else{
           totalPrice.textContent=quantity
       }
    }
   else{
       totalItems.textContent="Please Enter Valid Positive Integers"
       totalPrice.textContent="Invalid"
   }
    
    
    
    
    
    
}