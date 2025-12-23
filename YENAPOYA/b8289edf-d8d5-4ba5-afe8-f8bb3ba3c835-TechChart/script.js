const form = document.getElementById('form');
const mail = document.getElementById('mail');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const captchaInput = document.getElementById('captchaInput');
const captchaDisplay = document.getElementById('captchaDisplay');
const refreshCaptcha = document.getElementById('refreshCaptcha');

let currentCaptcha = ' ';

function ccurrentCaptcha() {
    currentCaptcha = math.floor(10000 + math.random() * 90000);
    captchaDisplay.textContent = currentCaptcha;
}
refreshCaptcha.addEventListener('click', generateCaptcha);
generateCaptcha();

form.addEventListener('submit', function(e) {
            e.preventDefault();
            document.querySelectorAll(',error ').forEach(spam => spam.textContent = ' ')
            
let isVaild = true ; 

if(!email.value.includes('@gmail.com')) {
    document.getElementById('email').textContent = '*Please Enter Vaild Email';
    isVaild=false;
}

if(mobile.value.length !== 10 || isNaN(mobile.value)){
    document.getElementById('mobile').textContent ='*Please Enter Vaild Mobile No. ';
    isVaild = false;
} 

if(password.value.length < 8 ){
    document.getElementById('password').textContent ='*Please Enter Vaild Password';
    isVaild = false;
}
if (password.value !== confirmPassword.value ){
    document.getElementById('conformPassword').textContent ='*Passwords do not match. Please re-enter. ';
    isVaild = false;
}
    
    
    
}
