let a=document.getElementById("burger")
let b=document.getElementById("fries")
let c=document.getElementById("soda")
let d=document.getElementById("calculate")
let e=document.getElementById("total-price")
let f=document.getElementById("total-items")
function idd(){
    if(a.value===""||b.value===""||c.value===""){
        e.textContent="Invalid"
        f.textContent="Please Enter Valid Positive Integers"
    }
}