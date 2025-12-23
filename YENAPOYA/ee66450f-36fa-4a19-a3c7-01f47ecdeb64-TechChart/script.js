let email=document.getElementById("email");
let nameuser=document.getElementById("name");
let pass=document.getElementById("password");
let number=document.getElementById("mobile");
let conpass=document.getElementById("conformPassword");
let captcha=document.getElementById("capchaEnterArea");
let capchagiven=document.getElementById("capchaNumber");
let para=document.getElementById("mainContainer");
let lastpara=document.getElementById("successContainer");
let submit=document.getElementById("submitBtn");
let error=document.getElementById("errorMsg");
submit.addEventListener("click", function(){
    if (!email.value.includes("@gmail.com")){
        error.textContent="*Please Enter Valid Email";
    } 
    else if (number.value.length!==10){
        error.textContent="*Please Enter Valid Mobile No.";
    }
    else if (pass.value.length <8){
        error.textContent="*Please Enter Valid Password";
    }
    else if (pass.value !== conpass.value){
        error.textContent="*Passwords do not match. Please re-enter.";
    }
    else if (captcha.value !== capchagiven.textContent){
        error.textContent="*Please Enter Valid Captcha";
    }
    else{
        para.style.display="hidden";
        lastpara.style.display="block";
    }
});
function captchaBtn(){
    capchagiven.textContent="AsdJf";
}
