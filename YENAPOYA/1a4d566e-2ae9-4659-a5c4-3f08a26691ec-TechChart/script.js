let errormessage = document.getElementById("errorMsg");
let emailrequried = document.getElementById("email");
let mobilerequired = document.getElementById("mobile");
let mobilenumber = parseInt(mobilerequired);
let mobilelenght = mobilerequired.value.length;

function submit() {
    if (emailrequried.Value === " ") and(emailrequried.value !== "@gmail.com");
    errormessage.textContent = "*Please Enter Valid Email";
} {
    if (mobilelenght !== 10);
    errormessage.textContent = "*Please Enter Valid Mobile No";


}
