let msg = document.getElementById("error-message");
let fullname = document.getElementById("full-name");
let email =  document.getElementById("email"); 
let product =  document.getElementById("product-name"); 
 let rating = document.getElementById("rating");
 let feedback =  document.getElementById("feedback-type");
 let comment =  document.getElementById("comments");
 function a() {
    
     fullname.value = "";
     email.value = "";
     product.value = "";
     rating.value = "";
     feedback.value = "";
     comment.value = "";
     msg.textContent = "";
 }
function b(){
    
    let b = parseInt(rating.value)
    if (fullname === "" ||email.value === "" || product.value === "" || rating.value === "" ||feedback.value === "" || comment.value === ""){
        msg.textContent = "Please enter all the fields before submitting.";
        msg.style.color = "red";
    }
    
    
  if (product.value === "Gift" ||  product.value === "Trimmer" ||  product.value === "Jewel"){
      msg.textContent = "You didn't purchase this product.";
         msg.style.color = "red";
  }
  if (b<1 || b>5) {
      msg.textContent = "Please provide a rating between 1 and 5.";
         msg.style.color = "red";
      
  }
//  if (feedback.value!= "Complaint" || feedback.value!= "Suggestion" ){
//      msg.textContent = "Feedback type should be either Complaint or Suggestion.";
//          msg.style.color = "red";
//  }
if  (comment.value.length<15){
    msg.textContent = "Comments must be at least 15 characters long.";
         msg.style.color = "red";
    
}
}