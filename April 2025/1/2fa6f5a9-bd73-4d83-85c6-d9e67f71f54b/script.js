const form =document.getElementById('feedback-form');
const errorMessage =document.getElementById('error-message');
from.addEventListener('submit',function(event){
    event.preventDefault();
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const product=document.getElementById('product').value.trim();
    const rating=document.getElementById('rating').value.trim();
    const feedback=document.getElementById('feedback').value.trim();
    const comments=document.getElementById('comments').value.trim();
    if (!name || !email || !product || !rating || !feedback || !comments){
        errorMessage.textContent="please enter all the feilds before submitting.";
        errorMessage.style.color="red";
        return;
    }
    
    if(!email.includes('@')|| email.startsWith('@')|| email.endsWith('@')){
        errorMessage.textContent="Please enter a vail email";
        errorMessage.style.color="red";
    }
    const vaildProduct=["Gift", "Trimmer", "Jewel"];
    if (!validProduct.includes(product)){
        errorMessage.textContent="You didn't purchase this product.";
        errorMessage.style.color="red";
        return;
    }
    if(isNaN(rating)|| rating<1 || rating>5){
     errorMessage.textContent="Please provide rating between 1 and 5.";
     ErrorEvent.style.color="red";
     return;
    }
    if (feedback!== "Complaint" && feedback !=="Suggestions"){
        errorMessage.textContent="Feedback type should beeither Complaint or Suggestion.";
        errorMessage.style.captionSide="red";
        return;
    }
    if (comments.length<15){
        errorMessage.textContent="Comment must be at least 15 characters long";
        errorMessage.style.color="red";
        return;
    }
    errorMessage.textContent="Processing...";
    errorMessage.style.color="orange";
    
    SetTimeout(()=>{
        errorMessage.textContent="Thankyou for youe feedback!";
        errorMessage.style.color="Green";
        
        form.reset();
        },3000);
});