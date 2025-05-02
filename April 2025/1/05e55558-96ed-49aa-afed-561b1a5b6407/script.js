let signupFormEl = document.getElementById('signup-form');
let resetEl = document.getElementById('reset');
let submitEl = document.getElementById('submit');
let messageparagraphEl = document.getElementById('message-paragraph');
let mobilenumber = document.getElementById('mobile-number');
let skillsEl = document.getElementById('skills');
let emailEl = document.getElementById('email');
let lastname = document.getElementById('last-name');
let firstname = document.getElementById('first-name');
submitEl.onclick = function(){
    if(mobilenumber.value == ""||skillsEl.value == ""||emailEl.value == ""||lastname.value == ""||firstname.value == ""){
        messageparagraphEl.textContent = "Please enter all the fields before submitting!";
    }
    else if(!emailEl.value.includes("@")){
        messageparagraphEl.textContent = "Please enter a valid email address!";
    }
    else if(mobilenumber.value.length!=10){
        messageparagraphEl.textContent = "Mobile number should be exactly 10 digits!";
    }
    else if(mobilenumber.value){
        
    }
    else if (skillsEl.value == "python"){
        messageparagraphEl.textContent = "You are only eligible if your skills include python!";
    }
    else{
        messageparagraphEl.textContent = "Registering...";
        messageparagraphEl.style.color = "green";
        setTimeout(function(){
            messageparagraphEl.textContent = "Successfully Registered  for hackathon";
            messageparagraphEl.style.color = "green";
        },4000);
    }
};
resetEl.onclick = function(){
    signupFormEl.textContent = "";
    messageparagraphEl.textContent = "";
}