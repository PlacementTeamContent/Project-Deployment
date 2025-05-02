let firstname = document.getElementById("first-name");
let lastname = document.getElementById("last-name");
let mobilenum = document.getElementById("mobile-number");
let email = document.getElementById("email");
let description=document.getElementById("description")
let age = document.getElementById("age");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirm-password");
let messageparagraph = document.getElementById("message-paragraph");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let a = [firstname, lastname, mobilenum, email, age, password, confirmpassword, messageparagraph];
submit.onclick = function() {
        if (firstname.value === "" || lastname.value === "" || mobilenum.value === "" || email.value === "" || age.value === "" || password.value === "" || confirmpassword.value === "") {
            messageparagraph.textContent = "Please enter all the fields before submitting!";
            messageparagraph.style.color = "red"
        } else if (!email.value.includes("@")) {
            messageparagraph.textContent = "Please enter a valid email address!";
            messageparagraph.style.color = "red"
        } else if (password.value != confirmpassword.value) {
            messageparagraph.textContent = "Passwords do not match!";
            messageparagraph.style.color = "red"
        }
        else if(age.value<18){
            messageparagraph.textContent="Age should be above 18!";
            messageparagraph.style.color="red";
        }
        else{
            messageparagraph.textContent="Creating account...";
            messageparagraph.style.color="green";
            
        }
};
reset.onclick=function(){
    firstname.value = ""
    lastname.value = ""
    mobilenum.value = ""
    email.value = ""
    age.value = ""
    password.value = ""
    confirmpassword.value = ""
    messageparagraph.textContent=""
    description.value=""
}