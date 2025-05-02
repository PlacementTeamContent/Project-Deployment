let fullName=document.getElementById("full-name");
let email=document.getElementById("email");
let productName=document.getElementById("product-name");
let feedbackType=document.getElementById("feedback-type");
let rating=document.getElementById("rating");
let comments=document.getElementById("comments");
let reset=document.getElementById("reset");
let submit=document.getElementById("submit");
let errorMsg=document.getElementById("error-message");
submit.onclick=function(){
    let fullNameEl=fullName.value;
    let emailEl=email.value;
    let productNameEl=productName.value;
    let ratingEl=rating.value;
    let feedback=feedbackType.value;
    let commentsEl=comments.value;
    if (fullNameEl==="" || emailEl==="" || productName==="" || feedbackType==="" || rating==="" || comments==="" ){
    errorMsg.textContent="Please enter all the fields before submitting.";
    errorMsg.style.color="red";
    }
    else if((!emailEl.includes("@")) || (!emailEl.includes(".com"))){
        errorMsg.textContent="Please enter a valid email address!";
        errorMsg.style.color="red";
    }
else if((productNameEl!=="Jewel") || (productNameEl!=="Gift") || (productNameEl!=="Trimmer")){
        errorMsg.textContent="You didn't purchase this product.";
        errorMsg.style.color="red";
    }    
    else if(ratingEl<0 || ratingEl>5){
        errorMsg.textContent="Please provide a rating between 1 and 5.";
        errorMsg.style.color="red";
    }
    else if(feedback!="Complaint" || feedback!="Suggestion"){
        errorMsg.textContent="Feedback type should be either Complaint or Suggestion.";
        errorMsg.style.color="red";
    }
    else if(commentsEl.length<15){
        errorMsg.textContent="Comments must be at least 15 characters long.";
        errorMsg.style.color="red";
    }
    else if (setInterval(function(){
        console.log("Processing")
        errorMsg.style.color="orange"
    }),3000);
    
    
}
reset.onclick=function(){
    let fullName="";
    let email="";
    let productName="";
    let rating="";
    let feedbackType="";
    let comments="";
}