document.addEventListener('DOMContentLoaded', function() {  
    const submitButton = document.querySelector('button[type="submit"]');  
    const resetButton = document.querySelector('button[type="reset"]');  
    const errorMessage = document.getElementById('error-message');  

    submitButton.addEventListener('click', function(event) {  
        event.preventDefault();  

        const fullName = document.getElementById('full-name').value;  
        const email = document.getElementById('email').value;  
        const product = document.getElementById('product').value;  
        const rating = document.getElementById('rating').value;  
        const feedbackType = document.getElementById('feedback-type').value;  
        const comments = document.getElementById('comments').value;  

        if (!fullName || !email || !product || !rating || !feedbackType || !comments) {  
            errorMessage.textContent = "Please enter all the fields before submitting.";  
            errorMessage.style.color = "red";  
            return;  
        }  

        if (!email.includes('@') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {  
            errorMessage.textContent = "Please enter a valid email address!";  
            errorMessage.style.color = "red";  
            return;  
        }  

        if (product !== "Gift" && product !== "Trimmer" && product !== "Jewel") {  
            errorMessage.textContent = "You didn't purchase this product.";  
            errorMessage.style.color = "red";  
            return;  
        }  

        const ratingValue = parseInt(rating);  
        if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {  
            errorMessage.textContent = "Please provide a rating between 1 and 5.";  
            errorMessage.style.color = "red";  
            return;  
        }  

        if (feedbackType !== "Complaint" && feedbackType !== "Suggestion") {  
            errorMessage.textContent = "Feedback type should be either Complaint or Suggestion.";  
            errorMessage.style.color = "red";  
            return;  
        }  

        if (comments.length < 15) {  
            errorMessage.textContent = "Comments must be at least 15 characters long.";  
            errorMessage.style.color = "red";  
            return;  
        }  

        errorMessage.textContent = "Processing...";  
        errorMessage.style.color = "orange";  

        setTimeout(function() {  
            errorMessage.textContent = "Thank you for your feedback!";  
            errorMessage.style.color = "green";  
        }, 3000);  
    });  

    resetButton.addEventListener('click', function() {  
        document.getElementById('full-name').value = "";  
        document.getElementById('email').value = "";  
        document.getElementById('product').value = "";  
        document.getElementById('rating').value = "";  
        document.getElementById('feedback-type').value = "";  
        document.getElementById('comments').value = "";  
        errorMessage.textContent = "";  
    });  
});