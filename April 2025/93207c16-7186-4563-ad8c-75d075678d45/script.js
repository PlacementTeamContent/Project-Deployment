let first_name=document.getElementById("first-name");
let last_name=document.getElementById("last-name");
let mail=document.getElementById("email");
let skills=document.getElementById("skills");
let number =document.getElementById("mobile-number");
let message=document.getElementById("message-paragraph");
let register=document.getElementById("submit");
let reset=document.getElementById("reset");
let b=0
register.onclick=function(){
    if (first_name.value ==="" && last_name.value ==="" && mail.value ==="" && skills.value ==="" && number.value ===""){
        message.textContent="Please enter all the fields before submitting!"
    }
    else{
        if(!(mail.value.includes("@")) ){
            b+=1
              message.textContent="Please enter a valid email address!"
        }
        else if (number.length !=10){
            b+=1
            message.textContent="Mobile number should be exactly 10 digits!"
        }
        
    
    }
    if (skills.value!=="python"){
            b+=1
            message.textContent="You are only eligible if your skills include python!"
        }
}
reset.onclick=function(){
    first_name.value="";
    last_name.value='';
    mail.value="";
    skills.value="";
    number.value=""
    message.textContent=""
}