let names=document.getElementById("name");
let number=document.getElementById("mobile-number");
let mail=document.getElementById("email");
let exp=document.getElementById("experience");
let pass=document.getElementById("password");
let resetbtn=document.getElementById("reset");
let submitbtn=document.getElementById("submit");
let message=document.getElementById("message-paragraph");


submit.onclick=function(){
    if(
        names.value=="" ||
        number.value==""||
        mail.value=="" ||
        exp.value=="" ||
        pass.value==""
        ){
            message.textContent="Please enter all the fields before submitting!"
            message.style.color="red"
        
    }
    
    
    if (number.value.length!=10){
        message.textContent="Mobile Number should be exactly 10 digits"
        message.style.color="red"
    }
    if(!email.value.includes("@")){
        message.textContent="Email must contain @ ! "
        message.style.color="red"
        
        
    }
    if ((exp.value<3)){
        message.textContent=" Application Rejected "
        message.style.color="red"
        
    }
    if(pass.value.length<12){
        message.textContent=" Password is to weak "
        message.style.color="red"
        
    }
     else{
        message.textContent="Appliying... 4 seconds"
        message.style.color="green"
        setTimeout(function(){
            message.textContent="Application Sent"
            
        },4000)
    }
        
}

restbtn.onclick=function(){
    names.value=""
    number.value=""
    email.value=""
    exp.value=""
    pass.value=""
    message.textContent=""
}