let nameEl = document.getElementById("name").value 
let numberEl = document.getElementById("mobile-number").value 
let mailEl = document.getElementById("email").value 
let experienceEl = document.getElementById("experience").value 
let passwordEl = document.getElementById("password")
let messageEl = document.getElementById("message-paragraph")
let resetEl = document.getElementById("reset")
let applyEl = document.getElementById("submit")
let count = 0
for (let i of mailEl){
    if (i === "@"){
        count += 1
    }
}
applyEl.addEventListener("click", function(){
    if (nameEl.value === "" || numberEl.value === "" || mailEl.value === "" || experienceEl.value === "" || passwordEl.value === "" ){
     messageEl.textContent = "Please enter all the fields before submitting!"
     messageEl.style.color = red
    }
    else if (numberEl.length !== 10){
     messageEl.textContent = "Mobile Number should be exactly 10 digits!"
     messageEl.style.color = red 
    }
    else if (count !== 1){
        messageEl.textContent = "Email must contain @"
        messageEl.style.color = red
    }
    
    
    
});