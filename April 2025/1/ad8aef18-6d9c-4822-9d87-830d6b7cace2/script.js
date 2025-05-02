let Submit=document.getElementById("submit");
let Reset=document.getElementById("reset");
let ErrorMsg=document.getElementById("message-paragraph");
Submit.addEventListener("click",function(){
    let Name=document.getElementById("name").value;
let MobileNumber=document.getElementById("mobile-number").value;
let Email=document.getElementById("email").value;
let Experince=document.getElementById("experience").value;
let Password=document.getElementById("password").value;
if (Name==="" || MobileNumber===""||Email===""||Experince===""|| Password===""){
    ErrorMsg.textContent="Please enter all the fields before submitting"
}else{
    if (MobileNumber.length!=10){
        ErrorMsg.textContent="Mobile Number should be exactly 10 digits!";
    }else if (!Email.includes("@",".com")){
        ErrorMsg.textContent="Email must contain '@'! ";
    }else if (Experince<3){
        ErrorMsg.textContent="Application Rejected";
    }else if(Password.length<12){
        ErrorMsg.textContent="Password is too weak";
    }else{
        let count=0;
        let uni=setInterval(function(){
            ErrorMsg.textContent="Applying... 4 seconds";
            count++;
        },1000)
        setTimeout(function(){
            clearInterval(uni);
            ErrorMsg.textContent="Application Sent";
        },4000)
        // ErrorMsg.textContent="Application Sent";
    }
    
    
    
    
}
    
    
    
})