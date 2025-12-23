let nam = document.getElementById("name").value
let Email = document.getElementById("email")
let mobile = document.getElementById("mobile").value
console.log(mobile)
let password = document.getElementById("password").value
let confirmPassword = document.getElementById("confirmPassword").value
let submitBtn = document.getElementById("submitBtn")
let errors = document.getElementById("errorMsg")
let para = document.getElementById("capchaNumber")
let EnterC = document.getElementById("capchaEnterArea")

function captchaBtn() {
    let Capch = Math.ceil(Math.random() * 100000)
    para.textContent = Capch
}

function Signup() {
    if (nam == "") {
        errors.textContent = "*Please Enter Valid name"
    } else if (mobile.length !== 10) {
        errors.textContent = "*Please Enter Valid Mobile No."
    } else if (password.length < 8) {
        errors.textContent = "*Please Enter Valid Password"
    } else if (confirmPassword !== password) {
        errors.textContent = "*Password do not match. Please re-enter."
    } else if (EnterC !== Capch) {
        errors.textContent = "*Please Enter Valid Captcha"
    }
}
