let firstname=document.getElementById("first-name")
let lastname=document.getElementById("last-name")
let email=document.getElementById("email")
let skills=document.getElementById("skills")
let mobilenumber=document.getElementById("mobile-number")
let messageparagraph=document.getElementById("message-paragraph")
function REGISTER(){
    if (!email.value.endsWith("@123")){
        messageparagraph.textContent="enter Gmail"
    }
    if (skills.value==="python"){
        messageparagraph.textContent=""
    }else{
        messageparagraph.textContent="You are only eligible if your skills include python!"

    }
    if (mobilenumber.value.length<10){
        messageparagraph.textContent="Mobile number should be exactly 10 digits!"
    }
    if (firstname.value==="" && lastname.value==="" && email.value==="" && skills.value==="" && mobilenumber.value===""){
        messageparagraph.textContent="plz enter all the inputs "
    }
    
}
function reset(){
    firstname.value=""
    lastname.value=""
    email.value=""
    skills.value=""
    mobilenumber.value=""
    messageparagraph.textContent=""
}