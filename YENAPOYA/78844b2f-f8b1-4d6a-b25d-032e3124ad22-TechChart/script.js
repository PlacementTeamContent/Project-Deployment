function generatecaptcha(){
    let captcha = math.floor(10000+math.random()*90000);
    document.getElementById("captcha").innerText=captcha;
}
generatecaptcha();
