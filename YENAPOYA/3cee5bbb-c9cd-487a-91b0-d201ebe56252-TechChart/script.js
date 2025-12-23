const submitBtn = document.getElementById("submitBtn");
    const errorMsg = document.getElementById("errorMsg");
    const captchaNumber = document.getElementById("captchaNumber");

function generateCaptcha() {
    const captcha = Math.floor(10000 + Math.random() * 90000);
    captchaNumber.textContent=captcha;
}
generateCaptcha();
function captchaBtn(){
    generateCaptcha();
}
submitBtn.addEventListener("click", function() {
    errorMsg.textContent="";
const email=document.getElementById("email").value;
const mobile=document.getElementById("mobile").value;
const password=document.getElementById("password").value;
const confirmPassword=document.getElementById("confirmPassword").value;
const CaptchaInput=document.getElementById("captchaEnterArea").value;
const generatedCaptcha=captchaNumber.textContent;

if (!email.includes("@gmail.com")){
   errorMsg.textContent="*Please Enter Valid Email";
   return;
}

if (mobile.length !== 10 || isNaN(mobile)){
   errorMsg.textContent="*Please Enter Valid Mobile No.";
   return;
}

if (password.length<8){
    errorMsg.textContent="*Please Enter Valid Password";
    return;
}

if (confirmPassword !== confirmPassword){
    errorMsg.textContent="*Please do not match. Please re-enter.";
    return;
}

if (CaptchaInput !== generateCaptcha){
    errorMsg.textContent="*Please Enter Valid Captcha";
    return;
}
document.getElementById("mainContainer").style.display="none";
document.getElementById("successContainer").style.display="block";
});
