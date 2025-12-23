const emailEl = document.getElementById("email");
const mobileEl = document.getElementById("mobile");
const passwordEl = document.getElementById("password");
const confirmpasswordEl = document.getElementById("confirmPassword");
const capchaDisplayEl = document.getElementById("captchaNumber");
const captchainputEl = document.getElementById("captchaEnterArea");
const errorMessageEl = document.getElementById("errorMsg")
const submitBtnEl = document.getElementById("sumbitBtn")
const successContainer = document.getElementById("successContainer")
const mainContainer = document.getElementById("mainContainer")

function captchaBtn() {
    generatedcaptcha = "";
    for (let i = 0; i < 5; i++) {
        generatedcaptcha += Math.floor(Math.random() * 10);
    }
    capchaDisplayEl.textContent = generatedcaptcha;
}
function captchaBtn() {
    submitBtn.onclick = function() {
        errorMsgEl.textContent = "";
        const emailvalue = emailEL.value
        const mobileValue = mobileEl.value
        const passwordValue = passwordEl.value
        const confirmpasswordValue = confirmpassword.value
        const captchaValue = captchainputEl.value

        if (!emailvalue.includes("@gmail.com")) {
            errorMessageEl.textContent = "*Please Enter Valid Email";
            return
        }
        if (mobileValue.length !== 10 || isNaN(mobileValue)) {
            errorMessageEl.textContent = "*Please Enter Valid Mobile No.";
            return
        }
        if (passwordValue.length < 8) {
            errorMessageEl.textContent = "*Please Enter Valid Password";
            return

        }
        if (passwordValue !== confirmpasswordValue) {
            errorMessageEl.textContent = "*Password do not match. Please re-enter.";
            return

        }
        if (captchaValue !== generatedcaptcha) {
            errorMessageEl.textContent = "*Please Enter Valid Captcha";
            return
        }
        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("successContainer").style.display = "block";


    }


}
