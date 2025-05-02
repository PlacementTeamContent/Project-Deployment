let formid = document.getElementById("signup-form");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let mobileNumber = document.getElementById("mobile-number");
let Email = document.getElementById("email");
let description = document.getElementById("description");
let age = document.getElementById("age");
let password1 = document.getElementById("password");
let conformPassword1 = document.getElementById("confirm-password");

let errorMsg = document.getElementById("message-paragraph");
let btnSubmit = document.getElementById("submit");
let btnReset = document.getElementById("reset");

let emailvalue = Email.value;
let passwordvalue = password1.value;
let conformPasswordvalue = conformPassword1.value;


btnSubmit.addEventListener("click", function(event) {
    if (firstName.value === "" || lastName.value === "" || mobileNumber.value === "" || Email.value === "" || description.value === "" || age.value === "" || password.value === "" || conformPassword.value === "") {
        errorMsg.textContent = "Please enter all the fields before submitting!";
    } else {
        errorMsg.textContent = "";
    }
})




btnReset.addEventListener("click", function(event) {
    firstName.value="";
    lastName.value="";
    mobileNumber.value="";
    Email.value="";
    description.value="";
    age.value="";
    password1.value="";
    conformPassword1.value="";
    errorMsg.textContent="";
})