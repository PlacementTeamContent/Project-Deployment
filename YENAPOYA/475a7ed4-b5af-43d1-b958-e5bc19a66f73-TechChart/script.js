const captchaText = document.getElementById("captchaText");
const errorMsg = document.getElementById("errorMsg");

function generateCaptcha() {
    captchaText.innertext = Math.floor(10000 + Math.random() * 90000);
}
generateCaptcha();
document.getElementById("refreshcaptcha").onclick = generateCaptcha;
document.getElementById("submitBtn").onclick = function() {
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    const captchainput = document.getElementById("captchainput").value;

    errorMsg.innertext = "";
    if (!email.includes("@gmail.com"))
        errorMsg.innertext = "*Please Enter Valid Email";
    else if (mobile.length !== 10)
        errorMsg.innertext = "*Please Enter Valid Mobile No.";
    else if (password.length < 8)
        errorMsg.innertext = '*Please Enter Valid Password';
    else if (password !== confirmpassword)
        errorMsg.innertext = '*Passwords do not match. Please re-enter.';
    else if (captchainput !== captchaText.innertext)
        errorMsg.innertext = '*Please Enter Valid Captcha';
};
