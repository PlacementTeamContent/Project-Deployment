let FullNameInputEl = document.getElementById("full-name");
let EmailInputEl = document.getElementById("email");
let ProductNameInputEl = document.getElementById("product-name");
let ratingInpuEl = document.getElementById("rating");
let FeedbackInputEl = document.getElementById("feedback-type");
let commentInputEl  =document.getElementById("comments");
let ButtonEl = document.getElementById("submit");
let ErrorMessageEl = document.getElementById("error-message");
let resetButtonEl  =document.getElementById("reset");
ButtonEl.onclick = function(){
    if(FullNameInputEl.value==="" && EmailInputEl.value==="" && ProductNameInputEl.value==="" && ratingInpuEl.value==="" && FeedbackInputEl.value === "" && commentInputEl.value ===""){
        ErrorMessageEl.textContent = "Please enter all the fields before submitting.";
        ErrorMessageEl.style.color = "red";
    }
    else if(!(EmailInputEl.value.includes("@"))){
        ErrorMessageEl.textContent = "Please enter a valid email address!";
        ErrorMessageEl.style.color = "red";
    }
    else if(!(ProductNameInputEl.value==="Gift" || ProductNameInputEl.value==="Trimmer" || ProductNameInputEl.value ==="Jewel")){
        ErrorMessageEl.textContent = "You didn't purchase this product.";
        ErrorMessageEl.style.color = "red";
    }
    else if(ratingInpuEl.value<1 || ratingInpuEl.value>5){
        ErrorMessageEl.textContent = "Please provide a rating between 1 and 5.";
        ErrorMessageEl.style.color = "red";
    }
    else if(!(FeedbackInputEl.value==="Complaint" || FeedbackInputEl.value === "Suggestion")){
        ErrorMessageEl.textContent = "Feedback type should be either Complaint or Suggestion.";
        ErrorMessageEl.style.color = "red";
    }
    else if(commentInputEl.value.length < 15){
        ErrorMessageEl.textContent = "Comments must be at least 15 characters long.";
        ErrorMessageEl.style.color = "red";
    }
    else{
    setTimeout(function(){
         ErrorMessageEl.textContent = "Processing...";
        ErrorMessageEl.style.color = "orange";
    }, 3000);
        ErrorMessageEl.textContent = "Thanks you for your feedback!";
       ErrorMessageEl.style.color = "green";
    }
};
resetButtonEl.onclick = function(){
    FullNameInputEl.value = "";
    EmailInputEl.value = "";
    ProductNameInputEl.value = "";
    ratingInpuEl.value = "";
    FeedbackInputEl.value = "";
    commentInputEl.value = "";
}