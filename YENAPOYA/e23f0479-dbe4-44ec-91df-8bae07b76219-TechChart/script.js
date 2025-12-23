let nameEle = document.getElementById("name");
let mailEle = document.getElementById("email");
let numberEle = document.getElementById("mobile");
let passwordEle = document.getElementById("password");
let cofirmpasswordEle = document.getElementById("conformPassword");
let captchaEle = document.getElementById("capchaEnterArea")
let errorMsg = document.getElementById("errorMsg");
let submit= document.getElementById("submitBtn");

nameEle.addEventListener("blur", function() {
    if (nameEle.value === "") {
        errorMsg.textContent = "*Please Enter your name";
        errorMsg.textContent.style.color = "red";
    } else {
        errorMsg.textContent = "";
    }
})

mailEle.addEventListener("blur", function() {
    if (!mailEle.value.includes("@gmail.com")) {
        errorMsg.textContent = "*Please Enter Valid Email";
        errorMsg.textContent.style.color = "red";
    } else {
        errorMsg.textContent = "";
    }
})

submitBtn.addEventListener("blur", function() {
    if (numberEle.value.length!==10) {
        errorMsg.textContent = "*Please Enter Valid Mobile No.";
        errorMsg.textContent.style.color = "red";
    } else {
        errorMsg.textContent = "";
    }
})

passwordEle.addEventListener("blur", function() {
    if (passwordEle.value.length!==8) {
        errorMsg.textContent = "*Please Enter Valid Password"
        errorMsg.textContent.style.color = "red";
    } else {
        errorMsg.textContent = "";
    }
})

cofirmpasswordEle.addEventListener("blur", function() {
    if (passwordEle.value !== cofirmpasswordEle.value) {
        errorMsg.textContent = "*Password do not match. Please re-enter.";
        errorMsg.textContent.style.color = "red";
    } else {
        errorMsg.textContent = "";
    }
})


function captchaBtn() {
    const capcha = Math.floor(Math.random() * 1000)
    document.getElementById("capchaNumber").textContent = capcha
    captchaEle.addEventListener("blur", function() {
    if (captchaEle.value !== capcha.value) {
        errorMsg.textContent = "*Please Enter Valid Captcha";
        errorMsg.textContent.style.color = "red";
    } else {
        errorMsg.textContent = "";
    }
})
}
