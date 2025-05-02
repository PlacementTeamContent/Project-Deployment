let namElement=document.getElementById("first-name");
let lastElement=document.getElementById("last-name");
let emailElement=document.getElementById("email");
let skillsElement=document.getElementById("skills");
let numberElement=document.getElementById("mobile-number");
let msg=document.getElementById("message-paragraph")
let resetbutton=document.getElementById("reset");
let registerbutton=document.getElementById("submit");

registerbutton.onclick=function(){
    if(namElement.value===""||lastElement===""||emailElement===""||skillsElement===""||numberElement===""){
        msg.textContent="Please enter all the fields before submitting!";
    }
    else if(!(emailElement.value).includes("@")){
        msg.textContent="Please enter a valid email address!";
    }
    else if(skillsElement.value!=="python"){
        msg.textContent="You are only eligible if your skills include python!"
    }
    else if((numberElement.value).length!==10){
        msg.textContent="Mobile number should be exactly 10 digits!";
    
    }
    else if((numberElement.value)!== (numberElement.value).isInteger()){
        msg.textContent="Mobile number should contain only numbers!";
    }
}
resetbutton.onclick=function(){
    msg.textContent="";
}