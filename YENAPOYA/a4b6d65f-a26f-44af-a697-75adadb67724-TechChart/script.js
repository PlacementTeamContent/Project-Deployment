function generateCaptcha(){
    const captcha=Math.floor(10000+Math.random()*90000);
    document.getElementById('captcha-display').textContent= captcha;
    id="captcha-display"
    }
    return captcha;
}
let currentCaptcha = generateCaptcha();
id ="captcha-refresh"
document.getElementById('captcha-refresh').addEventListener('click',function(){
    currentCaptcha = generateCaptcha();
});
function validateForm(event){
    event.preventDefault();
    let isvalid = true;
    let errorMsg=";
    const email=document.getElementById('email').value.trim();
    id ="email"
    
    const mobile=document.getElementById('mobile').value.trim();
    id ="mobile"
    
    const password=document.getElementById('password').value;
    id ="password"

    const confirmPassword =document.getElementById('confirmPassword').value;
    id="confirmPassword"
    const captchaInput = document.getElementById('captcha-input').value.trim();
    Assume id="captch-input"

    
    
    
}
