let emailEl = document.getElementById("email")
let email = "@gmail.com"
let ErrMsg = document.getElementById("errorMsg")
let SignInBtn = document.getElementById("submitBtn")
let mobileNo = document.getElementById("mobile")
let pass = document.getElementById("password")
let conPass = document.getElementById("conformPassword")
let captcha = document.getElementById("capchaEnterArea")
let count=0;
function captchaBtn() {
    let randomNum = Math.ceil(Math.random * 10000)
    document.getElementById("capchaNumber").textContent = randomNum
}
function Check(val){
    for (let res of [val]){
        if(( res==="@")||(res==="g")||(res==="m")||(res==="a")||(res==="i")||(res==="l")||(res===".")||(res==="c")||(res==="o")||(res==="m")){
            count=count+1;
        }
    }
    if (count==10){
        return true
    }
}
let jean=Check(emailEl)
function Submit() {
    if (((emailEl.value).length)<10){
        ErrMsg.textContent="*Please Enter Valid Email"
    }
    if ((mobileNo.value).length != 10) {
        ErrMsg.textContent = "*Please Enter Valid Mobile No."
    }
    if ((pass.value).length < 8) {
        ErrMsg.textContent = "*Please Enter Valid Password"
    }
    if (pass.value !== conPass.value) {
        ErrMsg.textContent = "*Passwords do not match. Please re-enter."
    }
    if (captcha.value !== document.getElementById("capchaNumber").textContent) {
        ErrMsg.textContent = "*Please Enter Valid Captcha"
    }

}
SignInBtn.addEventListener("click", Submit)
