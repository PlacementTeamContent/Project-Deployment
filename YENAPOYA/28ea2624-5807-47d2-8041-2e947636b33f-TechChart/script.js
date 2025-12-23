const emailEl=document.getElementById("email");
const mobileEl=document.getElementById("mobile");
const passwordEl=document.getElementById("password");
const confirmPasswordEl=document.getElementById("confirmPassword");
const captchaDisplayEl=document.getElementById("capchaNumber");
const captchaInputEl=document.getElementById("capchaEnterArea");
const errorMsgEl=document.getElementById("errorMsg");
const submitBtn=document.getElementById("submitBtn");
const mainContainer=document.getElementById("mainContainer");
const successContainer=document.getElementById("successContainer");
let generatedCaptcha="";
function captchaBtn(){
    generatedCaptcha="";
    for (let i=0;i<5; i++){
        generatedCaptcha+=Math.floor(Math.random()*10);
        }
        captchaDisplayEl.textContent=generatedCaptcha;
}
    captchaBtn();
    submitBtn.onclick =function(){
        errorMsgEl.textcontext="";
        const emailValue = emailEl.value;
        const mobileValue = mobileEl.value;
        const passwordValue = passwordEl.value;
        const confirmPasswordValue=confirmPasswordValue
     
 }
