let firstnameEle = document.getElementById("first-name");
let lastnameEle = document.getElementById("last-name");
let emailEle = document.getElementById("email");
let skillsEle = document.getElementById("skills");
let mobilenumberEle = document.getElementById("mobile-number");
let messageparagraphEle = document.getElementById("message-paragraph");
let resetbtn = document.getElementById("reset");
let submitbtn = document.getElementById("submit");

submitbtn.onclick = function(){
messageparagraphEle.value = "";    
let firstnameEleVal = firstnameEle.value;    
let emailEleVal = emailEle.value;    
let skillsEleVal = skillsEle.value;    
let mobilenumberEleVal = mobilenumberEle.value;
let uniquId = null;
for(let i=0; i<mobilenumberEleVal.length; i++){
    if (mobilenumberEleVal[i]){
        
    }
}    
    if (firstnameEleVal === "" || emailEleVal === "" || skillsEleVal === "" || mobilenumberEleVal === ""){
        messageparagraphEle.textContent = "Please enter all the fields before submitting!";
        messageparagraphEle.style.color="red";
    }
    else if(mobilenumberEleVal.length != 10){
        messageparagraphEle.textContent = "Mobile number should be exactly 10 digits!";
        messageparagraphEle.style.color="red";
    }
    else if(!emailEleVal.includes("@")){
        messageparagraphEle.textContent = "Please enter a valid email address!";
        messageparagraphEle.style.color="red";
    }
    else if(!skillsEleVal.includes("python")){
        messageparagraphEle.textContent = "You are only eligible if your skills include python!";
        messageparagraphEle.style.color="red";
    }
    else{
        messageparagraphEle.value = "Registering";
        messageparagraphEle.style.color = "green";
        setTimeout(function() {
            messageparagraphEle.textContent = "Successfully Registered for hackathon";
        }, 4000);
    }
};

resetbtn.onclick = function(){
    messageparagraphEle.textContent = "";
    firstnameEle.value = "";
    emailEle.value = "";
    skillsEle.value = "";
    mobilenumberEle.value = "";
}