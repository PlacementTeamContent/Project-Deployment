let first = document.getElementById('first-name')
let last = document.getElementById('last-name')
let em = document.getElementById('email')
let sk = document.getElementById('skills')
let mob = document.getElementById('mobile-number')
let error = document.getElementById('message-paragraph')

function submits() {
    if (first.value === "" || last.value === "" || em.value === "" || sk.value === "" || mob.value === "") {
        error.textContent = "Registering..."
    } else {
        error.textContent = "Please enter all the fields before submitting!"
    }
    if (em.value.includes("@")) {
        error.textContent = "Registering..."
    } else {
        error.textContent = "Please enter a valid email address!"
    }
    if (mob.value.length < 10) {
        error.textContent = "Mobile number should be exactly 10 digits!"
    }
    if (sk.value !== "python") {
        error.textContent = "You are only eligible if your skills include python!"
    }
}
function reset() {
    first.value = ""
    last.value = ""
    em.value = ""
    sk.value = ""
    mob.value = ""
    error.textContent = ""
}