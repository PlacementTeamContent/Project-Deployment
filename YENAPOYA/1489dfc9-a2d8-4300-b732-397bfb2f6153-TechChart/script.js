const emaiEl=document.getElementById("email");
const mobilEl=document.getElementById("mobile");
const passwordEl = document.getElementById("password");
const conformPasswordEl =document.getElementById("conformPassword")
const captureDispayEl = document.getElementById("captureDispay")
const capcthaInputEl = document.getElementById("capcthaInputEl")
const errorMsgEl = document.getElementById("errorMsg")
const subitBtn = document.getElementById("subitBtn")
const mainContainer =document.getElementById("subitBtn")
const successContainer =document.getElementById("successContainer")
let generatedCaptcha = "";

function generatedCaptcha(){
    generatedCaptcha = Math.floor(10000 + Math.random() * 90000).toString()
    captureDispayEl.textContent = generatedCaptcha
}

function captchaBtn(){
    generatedCaptcha()
}

generatedCaptcha();
subitBtn.addEventListener("click",function()){
    errorMsgEl.textContent = ". . .";
    if (!emaiEl.value.includes("@gmail.com")){
        errorMsgEl.textContent = "*Please Enter Valide Email";
        return
    }
    if (mobilEl.value.length <8){
        errorMsgEl.textContent="*please enter Valide password"
    }
}
