let submitEl = document.getElementById("submit");
let resetEl = document.getElementById("reset");
let feedbackformEl = document.getElementById("feedback-form");
let fullnameEl  =document.getElementById("full-name");
let emailEl = document.getElementById("email");
let productnameEl = document.getElementById("product-name");
let ratingEl = document.getElementById("rating");
let feedbacktypeEl = document.getElementById("feedback-type");
let commentsEl = document.getElementById("comments");
let errormessageEl = document.getElementById("error-message");

submitEl.onclick = function(){
    if(fullnameEl.value==""||emailEl.value==""||productnameEl.value==""||ratingEl.value==""||feedbacktypeEl.value==""||commentsEl.value==""){
        errormessageEl.textContent = "Please enter all the fields before submitting.";
        errormessageEl.style.color = "red";
    }
    else if(!(emailEl.value.includes("@"))){
        errormessageEl.textContent = "Please enter a valid email address!";
        errormessageEl.style.color = "red";
    }
    else if((productnameEl.value!="Gift")||(productnameEl.value!="Trimmer")||(productnameEl.value!="Jewel")){
        errormessageEl.textContent = "You didn't purchase this product.";
        errormessageEl.style.color = "red";
    }
    else if(parseInt(ratingEl.value)<1 || parseInt(ratingEl.value)>5){
         errormessageEl.textContent = "Please provide a rating between 1 and 5.";
         errormessageEl.style.color = "red";
    }
    else if((feedbacktypeEl.value!="Complaint")||(feedbacktypeEl.value!="Suggesti")){
        errormessageEl.textContent = "Feedback type should be either Complaint or Suggestion.";
        errormessageEl.style.color = "red";
    }
    else if(commentsEl.value.length<15){
        errormessageEl.textContent = "Comments must be at least 15 characters long.";
        errormessageEl.style.color = "red";
    }
    else{
        errormessageEl.textContent = "Processing...";
        setTimeout(function(){
            errormessageEl.textContent = "Thank you for your feedback!"
        },3000)
    }
} 
resetEl.onclick = function(){
    feedbackformEl.textContent = "";
    errormessageEl.textContent = "";
    
}