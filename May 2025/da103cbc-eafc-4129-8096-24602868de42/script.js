let a=document.getElementById("chips");
let b=document.getElementById("cookies");
let c=document.getElementById("nuts");
let d=document.getElementById("calculate");
let e=document.getElementById("total-price");
let f=document.getElementById("total-items");
function idd(){
    if(a.value===""||b.value===""||c.value===""){
        e.textContent="Invalid"
        f.textContent="Please Enter Valid Positive Integers"
        
    }
}