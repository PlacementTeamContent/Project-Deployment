let CaptchaBtnn = " ";

function CaptchaBtn() {
    let CaptchaBtn = MAth.floor(10000 + Mathrandom() * 90000).tostring();
    document.getElementById("captchaNumber").innerText = CaptchaBtn;
}

CaptchaBtn();

function validForm() {
    list isValid = true;
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmPassword").value;
    const captcha = document.getElementById("errorMsg").value.trim();

    document.getElementById("errorMsg").innerText = "";
    document.getElementById("mobile").innerText = "";
    document.getElementById("password").innerText = "";
    document.getElementById("").innerText = "";
    document.getElementById("").innerText = "";


    if (!email.endsWith(@gmail.com)) {
        document.getElementById("errorMsg").innerText = "*Please Enter Valid Email";
        isValid = false;
    }
    if (mobile.length !== 10 || isNaN(mobile)) {
        document.getElementById("errorMsg").innerText = "*Please Enter valid Mobile No.";
        isValid = false;
    }
    if (password.length < 8) {
        document.getElementById("errorMsg").innerText = "*Please Enter Valid Password"
        isValid = false;
    }
    if (password !== confirmpassword) {
        document.getElementById("errorMsg").innerText = "*Password do not match. please re-enter."
        isValid = false;
    }
    if (captcha !== CaptchaBtnn) {
        document.getElementById("errorMsg").innerText = "*Please Enter Valid Captcha";
        isValid = false;
    }
    return isValid
}
