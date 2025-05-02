let fullName = document.getElementById("full-name");
let email = document.getElementById("email");
let productName = document.getElementById("product-name");
let rating = document.getElementById("rating");
let feedbackType = document.getElementById("feedback-type");
let comments = document.getElementById("comments");
let resetButton = document.getElementById("reset");
let submitButton = document.getElementById("submit");
let errorMessage = document.getElementById("error-message");

submitButton.onclick = function(){
    if (fullName.value === "" || email.value === "" || productName.value === "" || rating.value === "" || feedbackType.value === "" || comments.value === "") {
        errorMessage.textContent= "Please enter all the fields before submitting.";
        errorMessage.style.color = "red";
    }
    else if(email.value != "@"){
        errorMessage.textContent="Please enter a valid email address!";
        errorMessage.style.color = "red";
    }
    else if(productName.value != "Gift" || productName.value != "Trimmer" ||productName.value != "Jewel"){
        errorMessage.textContent="You didn't purchase this product.";
        errorMessage.style.color = "red";
    }
    else if(rating.value > 1 || rating.value < 5){
        errorMessage.textContent="Please provide a rating between 1 and 5.";
        errorMessage.style.color = "red";
    }
    else if(feedbackType.value  != "Complaint" || feedbackType.value != "Suggestion"){
        errorMessage.textContent="Feedback type should be either Complaint or Suggestion";
        errorMessage.style.color = "red";
    }
    else if(comments.value.length  > 15){
        errorMessage.textContent="Comments must be at least 15 characters long.";
        errorMessage.style.color = "red";
    }
    else {
        errorMessage.textContent="Processing...";
        errorMessage.style.color = "orange";
        setTimeout(function(){
            errorMessage.textContent="Thank you for your feedback!";
            errorMessage.style.color = "green";
        }, 3000)
    }
}

resetButton.onclick = function(){
    errorMessage.textContent("");
}