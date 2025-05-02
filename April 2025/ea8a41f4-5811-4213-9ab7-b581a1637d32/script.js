let names=document.getElementById("full-name");
let adress=document.getElementById("email");
let product=document.getElementById("product-name")
let rating=document.getElementById("rating")
let feedback=document.getElementById("feedback-type")
let comment=document.getElementById("comments")
let error=document.getElementById("error-message")


submit.onclick=function(){
    if (
        names.value=="" ||
        adress.value=="" || 
        product.value=="" || 
        rating.value=="" || 
        feedback.value=="" || 
        comment.value==""
    ){
        error.textContent="please enter all the fields before submitting"
        error.style.color="red"
    }
    else{
        error.textContent=""
    }
}

    if(
        !email.value.includes("@")){
            error.textContent="please enter a valid email address!"
            error.style.color="red"
        }
        else{
            error.textContent=""
        }
    
    if(
        product.value!="Gift" ||
        product.value!="Trimmer" ||
        product.value!="jewel"){
            error.textContent="you didn't purchase this product"
            error.style.color="red"
        }
        else{
            error.textContent=""
        }
        
        
    if (
        rating.value < 1 ||
        rating.value > 5){
            error.textContent="please provide a ranging between 1 and 5"
            error.style.color="red"
        }
        else{
            error.textContent=""
        }
        
    if (
        feedback-type.value !="Complaint" ||
        feedback-type.value != "Suggestion"){
            error.textContent="Feedback type should be either Complaint or Suggestion"
            error.style.color="red"
        }
        else{
            error.textContent=""
        }
        
    if (
        comments.value.length<15){
            error.textContent="Comments must be atleast 15 characters long"
            error.style.color="red"
        }
        else{
            error.textContent=""
        }