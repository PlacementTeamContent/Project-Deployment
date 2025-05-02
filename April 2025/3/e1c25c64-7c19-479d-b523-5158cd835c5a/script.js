let register = document.getElementById("submit");
let errormsg = document.getElementById("message-paragraph");
let firstname = document.getElementById("first-name");
let lastname = document.getElementById("last-name")
let email = document.getElementById("email")
let skills = document.getElementById("skills");
let mobile = document.getElementById("mobile-number");


register.addEventListener('click' ,function(){
    if (firstname.value === "" || lastname.value == "" || email.value == "" || skills.value == "" || mobile.value == ""){
        errormsg.textContent = "Please enter all Fields before submitting!";
        errormsg.style.color = "red" ;
    } else if (!(email.value.includes("@"))) {
        errormsg.textContent = "Please enter a valid email address!";
        errormsg.style.color = "red" ;
    } else if (mobile.value.length !== 10 ){
        errormsg.textContent = "Mobile number should be exactly 10 digits!";
        errormsg.style.color = "red" ;
    } else if (!(skills.value.includes("python"))){
        errormsg.textContent = "You are only eligible if your skills include python!";
        errormsg.style.color = "red" ;
    }
    
    
    
}
)