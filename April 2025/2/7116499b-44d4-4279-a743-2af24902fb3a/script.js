document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let fatherName = document.getElementById("father-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let altPhone = document.getElementById("alt-phone").value.trim();
    let ssc = document.getElementById("ssc").value.trim();
    let course = document.getElementById("course").value.trim();
    let messageParagraph = document.getElementById("message-paragraph");


    if (!name || !fatherName || !email || !phone || !altPhone || !ssc || !course) {
        messageParagraph.textContent = "Please enter all the fields before submitting!";
        messageParagraph.style.color = "red";
        return;
    }


    if (!/^[A-Za-z\s]+$/.test(name)) {
        messageParagraph.textContent = "Name should contain only alphabets!";
        messageParagraph.style.color = "red";
        return;
    }


    if (!email.includes("@")) {
        messageParagraph.textContent = 'Email must contain "@"!';
        messageParagraph.style.color = "red";
        return;
    }


    if (phone === altPhone) {
        messageParagraph.textContent = "Mobile Numbers should not be same!";
        messageParagraph.style.color = "red";
        return;
    }


    if (isNaN(ssc) || ssc <= 75) {
        messageParagraph.textContent = "Not Eligible to this university";
        messageParagraph.style.color = "red";
        return;
    }


    if (course.toLowerCase() !== "maths" && course.toLowerCase() !== "biology") {
        messageParagraph.textContent = "Only Maths or Biology courses are allowed!";
        messageParagraph.style.color = "red";
        return;
    }


    messageParagraph.textContent = "Registering...";
    messageParagraph.style.color = "green";


    setTimeout(() => {
        messageParagraph.textContent = "Successfully Registered for University";
        messageParagraph.style.color = "green";
    }, 4000);
});




document.getElementById("reset").addEventListener("click", function() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    let messageParagraph = document.getElementById("message-paragraph");
    messageParagraph.textContent = "";
    messageParagraph.style.color = "black";
});