let full = document.getElementById("full-name");
let email_add = document.getElementById("email");
let prd_name = document.getElementById("product-name");
let rating = document.getElementById("rating");
let feed = document.getElementById("feedback-type");
let comments = document.getElementById("comments")
let error = document.getElementById("error-message");

function submit() {
    if (full.value === "" || email_add.value === "" || prd_name.value === "" || rating.value === "" || feed.value === "" || comments.value === "") {
        error.textContent = "Please enter all the fields before submitting."
        error.style.color = "red"
    } else if (!((email_add.value).includes("@"))) {
        error.textContent = "Please enter a valid email address!"
        error.style.color = "red"
    } else if (!((prd_name.value).includes("Gift") || (prd_name.value).includes("Trimmer") || (prd_name.value).includes("Jewel"))) {
        error.textContent = "You didn't purchase this product."
    } else if (((rating.value) <  1) || ((rating.value) > 5)) {
        error.textContent = "Please provide a rating between 1 and 5."
    } else if (!((feed.value).includes("Complaint") || (feed.value).includes("Suggestion"))) {
        error.textContent = "Feedback type should be either Complaint or Suggestion."
    } else if (((comments.value).length) < 15) {
        error.textContent = "Comments must be at least 15 characters long."
    } else {
        error.textContent = "Processing..."
        error.style.color = "yellow"
        setTimeout(function() {
            error.textContent = "Thank you for your feedback!"
            error.style.color= "green"
        }, 3000)
    }
}

function reset(){
    full.value = ""
    email_add.value = ""
    prd_name.value = ""
    rating.value = ""
    feed.value = ""
    comments.value = ""
    error.textContent = ""
}