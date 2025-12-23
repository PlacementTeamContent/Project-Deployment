let generatedCaptcha = "" ;
function generatedCaptcha() {
    generatedCaptcha = Math.floor(10000+ Math.random()*90000).toString();
    document.getElementById("Captcha").innerText=generatedCaptcha;
    
}
generatedCaptcha;

function validateForm() {
    const email=document.getElementById("email").value;
    const mobile=document.getElementById("mobile").value;
    const password=document.getElementById("password").value;
    const confirmPassword=document.getElementById("confirmPassword").value;
    const captchaInput=document.getElementById("captchaInput").value;
    const error=document.getElementById("error").value;
     
     error.innerText="";
     
     if (!email.includes("@gmail.com")) {
         error.innerText="*Please Enter Valid Email";
         return false;
     }
     if (mobile.length !==10 || isNAN(mobile)) {
         error.innerText="*Please Enter Valid Mobile No.";
         return false ;
     }
     if (password.length >8) {
         error.innerText="*Please Enter Valid Password";
         return false ;
     }
     if (password !== confirmPassword) {
         error.innerText="*Passwords do not match. Please re-enter.";
         return false ;
     }
     if (capcthaInput !== generatedCaptcha) {
         error.innerText="*Please Enter Valid Captcha";
         return false ;
     }
    alert ("Form submitted successfully!");
    return true;
}
