let firstname = document.getElementById("first-name")
let lastname = document.getElementById("last-name")
let emailsection = document.getElementById("email")
let skillsec = document.getElementById("skillsec")
let mobnum = document.getElementById("mobile-number")
let message = document.getElementById("message-paragraph")

 
Register.onclick = function(){
    let fn = firstname.value 
    let ln = lastname.value 
    let es = emailsection.value
    let ss = skillsec.value
    let mn = mobnum.value
    if(fn || ln || es || ss || mn =="" ){
        message.textContent = "Please enter all the fields before submitting!"
        message.style.textColor = "red";
    }else if(es!="@"){
        message.textContent = "Please enter a valid email address!"
    }
    else if(mn.length!=10){
        message.textContent = "Mobile number should be exactly 10 digits!"
    }
    else if(ss != "python"){
        message.textContent = "you are only eligible if your skills include python!"
        ss.value = message.textContent
        message.style.color = "red";
    }
}