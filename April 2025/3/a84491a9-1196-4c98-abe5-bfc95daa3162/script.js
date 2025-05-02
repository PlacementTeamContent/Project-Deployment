let names=document.getElementById("name")
let number=document.getElementById("mobile-number")
let email=document.getElementById("email")
let experience=document.getElementById("experience")
let password=document.getElementById("password")
let msg=document.getElementById("message-paragraph")
let resetbtn=document.getElementById("reset")
let submitbtn=document.getElementById("submit")
submitbtn.onclick=function(){
    if(names.value===""||number.value===""||email.value===""||experience.value===""||password.value===""){
        msg.textContent="Please enter all the fields before submitting!"
}
}