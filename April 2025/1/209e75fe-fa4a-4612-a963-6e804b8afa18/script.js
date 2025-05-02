let nameEl = document.getElementById("full-name")
let emailEl = document.getElementById("email")
let productEl = document.getElementById("product-name")
let ratingEl = document.getElementById("rating")
let feedbackEl = document.getElementById("feedback-type")
let commentsEl = document.getElementById("comments")
let msgEl = document.getElementById("error-message")

 function submit(){
    if (commentsEl.value.length<15){
        msgEl.textContent = 'Comments must be at least 15 characters long.'
        msgEl.style.color = "red"
    }
    else if (feedbackEl.value!=="Complaint" || feedbackEl.value!=="Suggestion"){
        msgEl.textContent = 'Feedback type should be either Complaint or Suggestion.'
        msgEl.style.color = "red"
    }
    
 
 }
 function reset(){
 nameEl.value=""
 emailEl.value=""
 productEl.value = ""
ratingEl.value = ""
 feedbackEl.value =""
commentsEl.value = ""
 msgEl.textContent=""
 }