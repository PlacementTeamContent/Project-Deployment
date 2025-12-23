const submitBtn = document.getElementById("submitBtn");
const emailEl=document.getElementById("email");
const errormsg=document.getElementById("errorMsg");
submitBtn.addEventListener("click",function(event){
    event.preventDefault();
    const emailValue=emailEl.value;
if (!emailElValue.includes("@gmail.com")){
    errorMg.textContent="*Please Enter Valid Email";
}else{
  errorMsg.textContent="";
}
});
