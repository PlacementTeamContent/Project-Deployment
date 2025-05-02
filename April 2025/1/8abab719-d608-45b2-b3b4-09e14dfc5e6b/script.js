let me = document.getElementById("name");
let father = document.getElementById("father-name");
let mail = document.getElementById("email");
let num1 = document.getElementById("phone");
let num2 = document.getElementById("alt-phone");
let score = document.getElementById("ssc");
let course = document.getElementById("course");
let resetBtn = document.getElementById("reset");
let registerBtn = document.getElementById("submit");
let msg = document.getElementById("message-paragraph");

registerBtn.addEventListener("click", function() {
    
    let nameCheck = (me.value != parseInt(me.value));
    
    if(!nameCheck) {
        msg.textContent = `Name should contain only alphabets!`
    }
    let scoreCheck = score>=75
    if(!scoreCheck){
        msg.textContent = `Not Eligible to this university`
    }
    let courseCheck = (course.value=="maths" || course.value=="biology");
    if(!courseCheck){
        msg.textContent = `Only Maths or Biology courses are allowed!`
    }
    let mailCheck = mail.value.includes("@");
    if(!mailCheck){
        msg.textContent = `Email must contain "@"!`
    }
    

})