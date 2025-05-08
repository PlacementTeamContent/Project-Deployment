let submit = document.getElementById("submit")
let reset = document.getElementById("reset")
let messageparagraph = document.getElementById("message-paragraph")
let password = document.getElementById("password")
let experience = document.getElementById("experience")
let email = document.getElementById("email")
let mobilenumber = document.getElementById("mobile-number")
let name1 = document.getElementById("name")
let signupform = document.getElementById("signup-form")
let len = mobilenumber.length
let passlen = password.length
let emailarr = []
for (let i in email.value) {
    emailarr.push(i)
}
submit.onclick = function() {
    if (password.value === "" || experience.value === "" || email.value === "" || mobilenumber.value === "" || name1.value === "") {
        messageparagraph.textContent = "Please enter all the fields before submitting!"
        messageparagraph.style.Color = "red"
    } 
     else if (experience.value < 3) {
        messageparagraph.textContent = "Application Rejected!"
        messageparagraph.style.Color = "red"
    } else if (passlen < 12) {
        messageparagraph.textContent = "Password is to week!"
        messageparagraph.style.Color = "red"
    } else if (!(emailarr.includes("@"))) {
        messageparagraph.textContent = "Email must contain @!"
        messageparagraph.style.color="red"}
        else if (len !== 10) {
        messageparagraph.textContent = "Mobile Number should be excatly 10 digits!"
        messageparagraph.style.Color = "red"
        if (len===10){
            
        }
        else{
            messageparagraph.textContent="Application... 4 seconds"
            messageparagraph.style.color="green"
            let timer = setTimeout(function(){
                messageparagraph.textContent="Application Sent"
            },4000)
        }
reset.onclick=function(){
    name1.value=""
    email.value=""
    mobilenumber.value=""
    experience.value=""
    password.value=""
    messageparagraph.value=""
}
}
}