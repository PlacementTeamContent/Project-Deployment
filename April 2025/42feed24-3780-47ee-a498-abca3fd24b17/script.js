let feedbackformEl = document.getElementById("feedback-form");
let fullnameEl = document.getElementById("full-name");
let emailEl = document.getElementById("email");
let productnameEl  = document.getElementById("product-name");
let ratingEl = document.getElementById("rating");
let feedbacktypeEl= document.getElementById("feedback-type");
let commentsEl = document.getElementById("comments");
let errormessageEl = document.getElementById("error-message");
let resetbtnEl =document.getElementById("reset-btn");
let submitbtnEl = document.getElementById("submit-btn");
let count = 0
for(let i of emailEl.value){
    if(i === "@"){
        count += 1
    }
}
submitbtnEl.addEventListener("click",function(){
    if(fullnameEl.value !== "" && count === 1 && (productnameEl.value === "Gift" || productnameEl.value === "Jewel" || productnameEl.value === "Trimmer") && (parseInt(rating.value) > 0 && parseInt(rating.value) <= 5) && (feedbacktypeEl.value === "Complaint" || feedbacktypeEl.value === "Suggestion") && commentsEl.value.length >= 15){
       let count1 = 0
        setTimeout(function() {
            count1 += 1;
            errormessageEl.textContent = "Thank You for your feedback!"
        }, 3000);
    }
})