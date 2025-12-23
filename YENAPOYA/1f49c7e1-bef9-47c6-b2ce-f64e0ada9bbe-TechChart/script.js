let emailEl = document.getElementById("email");
let numberEl = document.getElementById('mobile');
let passwordEl = document.getElementById('password');
let confirmPassEl = document.getElementById('conformPassword');
let genCapchaEl = document.getElementById('capchaNumber');
let enteredCapchaEl = document.getElementById('capchaEnterArea');
let submitButton = document.getElementById('submitBtn');
let errorAreaEl = document.getElementById('errorMsg');
let mainAreaEl = document.getElementById('mainContainer')
let successContainerEl = document.getElementById('successContainer')
function submit() {
    if (emailEl.textContent.includes("@gmail.com")) {
        errorAreaEl.textContent += "*Please Enter Valid Email"
    } else if (numberEl.length != 10) {
        errorAreaEl.textContent += "*Please Enter Valid Mobile No."
    } else if (passwordEl.textContent.length < 8) {
        errorAreaEl.textContent += "*Please Enter Valid Password."
    } else if (passwordEl.textContent !== confirmPassEl.textContent) {
        errorAreaEl.textContent += "*Passwords do not match. Please re-enter."
    } else if (genCapchaEl.textContent != enteredCapchaEl.textContent) {
        errorAreaEl.textContent += "*Please Enter a Valid Captcha"
    }
}
if (errorAreaEl==""){
    successContainerEl.classList.add('hidden')
}
function captchaBtn() {
    genCapchaEl.textContent = Math.floor(Math.random() * 90000) + 10000;
}
