let cap = "";

function captchatBtn() {
    cap = Math.floor(10000 + math()*90000).toString();
    document.getElementById("capchanumber").textContent=captcha;
}
captchabtn();
document.getElementById("submitbtn").onclick=function(){
 let emailEL=email.value.trim();
 let mobileEL=mobile.value.trim();
 let passEL=password.value.trim();
 let cpassEL=conformpassword.value.trim(); 
 let capEL=captchaEnterArea.value.trim(); 
 
}
 if(!emailEL.endsWith("@gmail.com")){
  errormsg.textContent="*please enter a valid email";
  return;
 }
if(mobileEL.length!==10 || isNaN(mobileEL)){
 errormsg.textContent="*please enter a valid mobile number";
  return;  
}
if(passEL.length <8){
errormsg.textContent="*please enter a valid password";
return;
}
if(passEL !== cpassEL){
 errormsg.textContent="*password do not match please re-enter.";
 return;
}
if(capEL !== cap){
 errormsg.textContent="*please enter a valid captcha";
 return;
}
maincontainer.styLe.display="none";
successcontainer.style.display="flex";
};
</script>
