let nameEl = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let mobileEl = document.getElementById("mobile-number");
let emailEl = document.getElementById("email");
let ageEl = document.getElementById("age");
let passEl = document.getElementById("password");
let confirmPassEl = document.getElementById("confirm-password");

let resetBtn = document.getElementById("reset");
let submitBtn = document.getElementById("submit");

let msgEl = document.getElementById("message-paragraph");

function submit() {
    let nameVal = nameEl.value.trim();
    let lastNameVal = lastName.value.trim();
    let mobileVal = mobileEl.value.trim();
    let emailVal = emailEl.value.trim();
    let ageVal = ageEl.value.trim();
    let passVal = passEl.value.trim();
    let confirmPassVal = confirmPassEl.value.trim();

    if (!nameVal || !lastNameVal || !mobileVal || !emailVal || !ageVal || !passVal || confirmPassVal) {
        msgEl.textContent = "Please enter all the fields before submitting!";
        msgEl.style.color = "red";
    } else if (!emVal.includes("@")) {
        msgEl.textContent = "Please enter a valid email address!";
        msgEl.style.color = "red";
    } else if (passVal !== confirmPassVal) {
        msgEl.textContent = "Passwords do not match!";
        msgEl.style.color = "red";
    } else if (ageVal < 18) {
        msgEl.textContent = "Age should be above 18!";
        msgEl.style.color = "red";
    } else {
        msgEl.textContent = "Creating account...";
        paraEl.style.color = "green";
        setTimeout(() => {
            msgEl.textContent = "Account Successfully created";
            msg.style.color = "green";
        }, 4000);
    }
}
submitBtn.addEventListener("click", submit);

function reset() {
    let nameVal = "";
    let lastNameVal = "";
    let mobileVal = "";
    let emailVal = "";
    let ageVal = "";
    let passVal = "";
    let confirmPassVal = "";
    msgEl.textContent = "";
}
resetBtn.addEventListener("click", reset);