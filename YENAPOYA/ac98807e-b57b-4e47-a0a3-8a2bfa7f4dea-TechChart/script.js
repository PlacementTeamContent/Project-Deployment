const emailEl = document.getElementById("email")
const mobileEl = document.getElementById("mobile")
const passwordEl = document.getElementById("password")
const conformPasswordEl = document.getElementById("conformPassword")
const captureDisplayEl = document.getElementById("capchaNumber")
const capcthaInputEl = document.getElementById("capchaEnterArea")
const errorMsgEl = document.getElementById("errorMsg")
const submitBtn = document.getElementById("submitBtn")
const mainContainer = document.getElementById("mainContainer")
const successContainer = document.getElementById("successContainer")
let generatedCaptcha = "";

function generateCaptcha() {
    generatedCaptcha = Math.floor(10000 + Math.random() * 90000).toString()
    captureDisplayEl.textContent = generatedCaptcha
}

function captchaBtn() {
    generateCaptcha()
}
generateCaptcha();
submitBtn.addEventListener("click",function(){
   errorMsgEl.textContent="...";
   if (!emailEl.value.includes("@gmail.com")){
       errorMsgEl.textContent="*Please Enter Valid Email";
       return
   }
   if(mobileEl.value.length !==10){
       errorMsgEl.textContent="*Please Enter Valid Mobile No."
       return
   }
   if(passwordEl.value.length <8){
       errorMsgEl.textContent="*Please Enter Valid Password"
       return
   }
   if(passwordEl.value !== conformPasswordEl.value){
       errorMsgEl.textContent ="*Passwords do not match. Please re-enter.";
       return
   }
   if(capcthaInputEl.value!==generatedCaptcha){
       errorMsgEl.textContent ="*Please Enter Valid Captcha"
       return
   }
   mainContainer.style.display="none";
   successContainer.style.display="flex"
});
