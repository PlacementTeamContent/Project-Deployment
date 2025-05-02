let name1=document.getElementById("name")
let mobile_no=document.getElementById('mobile-number')
let email=document.getElementById("email")
let experience=document.getElementById("experience")
let password=document.getElementById("password")
let msg=document.getElementById("message-paragraph")
let resetbtn=document.getElementById("reset")
let submitbtn1=document.getElementById("submit")

submitbtn1.onclick=function(){
  
    if ((name1.value==="") || (mobile_no.value==="") || (email.value==="") || (experience.value==="") || (password.value==="")){
        msg.textContent="Please enter all the fields before submitting!"
        msg.style.color="red"
        return
        
    }
    if (mobile_no.value.length<10){
        msg.textContent="Mobile Number should be exactly 10 digits!"
        msg.style.color="red"
        return
        
    }
    if (!email.value.includes('@')){
        msg.textContent="Email must contain @!"
        msg.style.color="red"
        return
        
    }
    if (experience.value<3){
        msg.textContent="Application Rejected"
        msg.style.color="red"
        return
    }
    if (password.value.length<12){
        msg.textContent="Password is to weak"
        msg.style.color="red"
        return
        
    }
    msg.textContent="Applying... 4 seconds"
    msg.style.color="green"
    let time=setTimeout(function(){
        msg.textContent="Application Sent"
        msg.style.color="green"
        
        
    },4000)
}
resetbtn.onclick=function(){
    name1.value="";
    mobile_no.value="";
    email.value="";
    experience.value="";
    password.value="";
}