document.getElementById('submitBtn');
document.getElementById('errorMsg');
document.getElementById('email');
document.getElementById('mobile');
document.getElementById('password');
document.getElementById('conformPassword');
document.getElementById('captchaEnterArea');
document.getElementById('captchaNumber');

var  generatedCaptcha="";

function generatedCaptcha (){
    generatedCaptcha=Math.floor(10000 + Math.random()*90000);
    captchaNumberEl.innerHTML= generatedCaptcha;
    
    
}
function captchaBth (){
    generatedCaptcha();
}
generatedCaptcha();
submitBtn.onclick=function(){
    errorMsg.innerHTML="";
    var email=emailEl.value.trim();
    var mobile=mobileEl.value.trim();
    var password=passwordEl.value.trim();
    var conform=conformEl.value.trim();
    var captchaEntered =captchaInputEl.value.trim();
    
}
if (email.indexOf("@gmail.com")=== -1){
    errorMsg.innerHTML="Please Enter Valid Email";
    return;
}
if ()
