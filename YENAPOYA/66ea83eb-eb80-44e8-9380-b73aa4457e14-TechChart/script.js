function generatecaptcha(){
    const capcha=math.floor(10000+ math.random() * 90000);
}
document.getElementById('captcha-display').text.content=captcha;
let currentcaptcha=generatecaptcha();
