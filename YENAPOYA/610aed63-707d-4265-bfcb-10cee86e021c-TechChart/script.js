let submitBtn=document.getElementById("submitBtn");

submitBtn.addEventListener("submit", function(event){
    event.preventDefault()
})
let email=document.getElementById("email");
email.addEventListener("click",function(event){
    if (event.target.value ===""){
        errorMsg.textContent = "*Please Enter Valid Email"
    }
})
