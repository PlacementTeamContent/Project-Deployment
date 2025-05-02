let nam=document.getElementById("full-name");
let mail=document.getElementById("email")
let product=document.getElementById("product-name");
let rating=document.getElementById("rating");
let feedback=document.getElementById("feedback-type");
let comments=document.getElementById("comments")
let error=document.getElementById("error-message")
function submit(){
    let m=mail.value 
   if (m.endsWith("@gmail.com")){
       error.textContent="please enter all the fields before submitting"
   }
  if(rating.value!=="Gift"||rating.value!=="trimmer"||rating.value!=="jewel"){
        error.textContent="You didn't purchase this product." 
  }
  else{
      error.textContent=" "
  }
    if (parseInt(rating.value)>5 && parseInt(rating.value)<1){
       error.textContent="Please provide a rating between 1 and 5."
   }
   let comment=comments.value
   if (comment.length<=15){
       error.textContent="Comments must be at least 15 characters long."
   }
   
}
function reset(){
    if (nam!=="" || mail!=="" || product!=="" || rating!==""||feedback!==""||comments!==""||error!==""){
    nam.value=""
    mail.value=""
    product.value=""
    rating.value=""
    feedback.value=""
    comments.value=""
    error.textContent=""
}
}