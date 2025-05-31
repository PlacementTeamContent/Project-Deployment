let veg=document.getElementById("veggie-pizza")
let pep=document.getElementById("pepperoni-pizza")
let che=document.getElementById("cheese-pizza")
let calc=document.getElementById("calculate")
let tp=document.getElementById("total-price")
let ti=document.getElementById("total-items")

calc.onclick=function(){
    let a=veg.value
    let b=pep.value 
    let c=che.value 
    
    let aa=Number(a)
    let bb=Number(b)
    let cc=Number(c)
    if(a==="" || b==="" || c==="" || aa<0 || bb<0 ||c<0 || !Number.isInteger(aa)|| !Number.isInteger(bb)|| !Number.isInteger(cc)){
        ti.textContent="Please Enter Valid Positive Integers"
        tp.textContent="Invalid"
    }
    else if(aa>=0 && bb>=0 && cc>=0){
        let totp=(aa*8)+(bb*10)+(cc*7)
        tp.textContent=totp
        let toti=aa+bb+cc 
        ti.textContent=toti
        if(toti>20){
            ti.textContent="Cart items should be below 20"
            tp.textContent="Invalid"
        }
    }
}