let myFormE1 = document.getElementById("mainContainer");
myFormE1.addEventListener("Submit", function(event) {
    event.prenentDefault()
});
let mypassword = document.getElementById("password");
let myErrormsg = document.getElementById("errorMsg");
mypassword.addEventListener("blur", function(event) {
    if (event.target.value >8 ) {
        myErrormsg.textContent = "required*";

    } 
    else {
        myErrormsg.textContent = ""
    }
});
