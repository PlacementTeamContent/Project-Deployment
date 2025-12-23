let generatedCaptcha = '';
document.getElementById('submitBtn').addEventListener('click', function() {
    const emailInput = document.getElementById('email').value;
    const mobileInput = document.getElementById('mobile').value;
    const passwordInput = document.getElementById('password').value;
    const confirmPasswordInput = document.getElementById('conformPassword').value;
    const captchaInput = document.getElementById('capchaEnterArea').value;
    const errorMsg = document.getElementById('errorMsg');

    if (!emailInput.includes('@gmail.com')) {
        errorMsg.textContent = '*Please Enter Valid Email';
    } else if (mobileInput.length !== 10) {
        errorMsg.textContent = '*Please Enter Valid Mobile No.';
    } else if (passwordInput.length < 8) {
        errorMsg.textContent = '*Please Enter Valid Password';
    } else if (passwordInput !== confirmPasswordInput) {
        errorMsg.textContent = '*Passwords do not match. Please re-enter.';
    } else if (captchaInput !== generatedCaptcha) {
        errorMsg.textContent = '*Please Enter Valid Captcha';
    } else {
        errorMsg.textContent = '';
        document.getElementById('mainContainer').style.display = 'none';
        document.getElementById('successContainer').style.display = 'block';

    }
});

function captchaBtn() {
    const captchaNumber = Math.ceil(Math.random() * 100000);
    generatedCaptcha = captchaNumber.toString();
    document.getElementById('capchaNumber').textContent = captchaNumber;
}
