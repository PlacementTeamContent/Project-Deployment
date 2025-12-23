let k = document.getElementById("name")
let a = document.getElementById("email")
let c = document.getElementById("country")
let nn = document.getElementById("number")
let pas = document.getElementById("password")
let cpas = document.getElementById("conformpassword")
let E = document.getElementById("errorMsg")
let btn = document.getElementById("submitBtn")

function submit() {
    if (a.value[5] !== "@") {
        E.textContent=""
        E.textContent = "Please Enter a Valid Email"
    } else if (length(pas.value) >= 8) {
        E.textContent=""
        E.textContent = "Please Enter Valid Password"

    } else if (length(nn.value) >= 10) {
        E.textContent=""
        E.textContent = "Please Enter Valid Mobile No"

    } else if (pas.value !== cpas.value) {
        E.textContent=""
        E.textContent = "Passwords do not match. Please re-enter."
    }




}
