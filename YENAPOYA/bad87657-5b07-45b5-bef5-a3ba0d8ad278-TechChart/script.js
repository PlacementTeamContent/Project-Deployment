document.addEventListener("DOMContentLoaded", function () {
let generatedCaptcha = "";

// Generate 5-digit captcha
document.querySelector("captcha-btn").addEventListener("click", () => {
  generatedCaptcha = Math.floor(10000 + Math.random() * 90000).toString();
document.getElementById("captchaNumber").textContent = generatedCaptcha;
});
        
        // Submit validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const captchaInput = document.getElementById("captcha").value;
  const errorMsg = document.getElementById("errorMsg");
                          
  errorMsg.textContent = "";
                
if (!email.includes("@gmail.com")) {
  errorMsg.textContent = "*Please Enter Valid Email";
  return;
}
if (!/^\d{10}$/.test(mobile)) {
  errorMsg.textContent = "*Please Enter Valid Mobile No.";
  return;
}
                                
if (password.length < 8) {
  errorMsg.textContent = "*Please Enter Valid Password";
  return;
}
                  
if (password !== confirmPassword) {
  errorMsg.textContent = "*Passwords do not match. Please re-enter.";
  return;
}
                                    
if (captchaInput !== generatedCaptcha) {
  errorMsg.textContent = "*Please Enter Valid Captcha";
  return;
  }
                      
  
document.getElementById("mainContainer").style.display = "none";
document.getElementById("successContainer").style.display = "block";
});

      // ALL your JS HTMLMeterElement});
      
});
