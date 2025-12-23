let errorMsg = document.getElementById("errorMsg")
errorMsg.style.color = "red"
let formName = document.getElementById("name")
let formEmail = document.getElementById("email")
let formMobile = document.getElementById("mobile")
let formPassword = document.getElementById("password")
let formConfirmPassword = document.getElementById("conformPassword")
let formCaptcha = document.getElementById("capchaNumber")
let formCaptchaNumber = document.getElementById("capchaEnterArea")
let formSubmit = document.getElementById("submitBtn")
let captchaConfirm = 0
function captchaBtn() {
    captchaConfirm = Math.random(10000, 99998).ceil
    formCaptcha.textContent = captchaConfirm
}
formSubmit.onclick = function(Event) {
        Event.preventDefault()
        if (formEmail.value.slice(formEmail.value.length - 10, formEmail.value.length) !== "@gmail.com") {
            errorMsg.textContent = "*Please Enter Valid Email"
        } else if (formMobile.value.length !== 10) {
            errorMsg.textContent = "*Please Enter Valid Mobile No."
        } else if (formPassword.value.length !== 8) {
            errorMsg.textContent = "*Please Enter Valid Password"
        } else if (formConfirmPassword.value !== formPassword.value) {
            errorMsg.textContent = "*Passwords do not match. Please re-enter."
        } else if (formCaptchaNumber.value !== captchaConfirm) {
            errorMsg.textContent = "*Please Enter Valid Captcha"
        } else {
            document.getElementById("mainContainer").classList.add("d-none")
            document.getElementById("successContainer").classList.add("d-block")
        }
}
