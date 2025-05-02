document.addEventListener('DOMContentLoaded', function() {
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const productNameInput = document.getElementById('product-name');
    const ratingInput = document.getElementById('rating');
    const feedbackTypeInput = document.getElementById('feedback-type');
    const commentsInput = document.getElementById('comments');
    const errorMessage = document.getElementById('error-message');
    const submitButton = document.getElementById('submit');
    const resetButton = document.getElementById('reset');

    submitButton.addEventListener('click', function() {
        let isValid = true;

        
        if (!fullNameInput.value || !emailInput.value || !productNameInput.value || !ratingInput.value || !feedbackTypeInput.value || !commentsInput.value) {
            errorMessage.textContent = "Please enter all the fields before submitting.";
            errorMessage.style.color = 'red';
            isValid = false;
            return;
        }

       
        if (!emailInput.value.includes('@') || emailInput.value.indexOf('@') === 0 || emailInput.value.indexOf('@') === emailInput.value.length - 1) {
            errorMessage.textContent = "Please enter a valid email address!";
            errorMessage.style.color = 'red';
            isValid = false;
            return;
        }

       
        const validProducts = ["Gift", "Trimmer", "Jewel"];
        if (!validProducts.includes(productNameInput.value)) {
            errorMessage.textContent = "You didn't purchase this product.";
            errorMessage.style.color = 'red';
            isValid = false;
            return;
        }

        
        const rating = parseInt(ratingInput.value);
        if (isNaN(rating) || rating < 1 || rating > 5) {
            errorMessage.textContent = "Please provide a rating between 1 and 5.";
            errorMessage.style.color = 'red';
            isValid = false;
            return;
        }

        
        const validFeedbackTypes = ["Complaint", "Suggestion"];
        if (!validFeedbackTypes.includes(feedbackTypeInput.value)) {
            errorMessage.textContent = "Feedback type should be either Complaint or Suggestion.";
            errorMessage.style.color = 'red';
            isValid = false;
            return;
        }

        
        if (commentsInput.value.length < 15) {
            errorMessage.textContent = "Comments must be at least 15 characters long.";
            errorMessage.style.color = 'red';
            isValid = false;
            return;
        }

        
        if (isValid) {
            errorMessage.textContent = "Processing...";
            errorMessage.style.color = 'orange';

            setTimeout(function() {
                errorMessage.textContent = "Thank you for your feedback!";
                errorMessage.style.color = 'green';
            }, 3000);
        }
    });

    resetButton.addEventListener('click', function() {
        fullNameInput.value = '';
        emailInput.value = '';
        productNameInput.value = '';
        ratingInput.value = '';
        feedbackTypeInput.value = '';
        commentsInput.value = '';
        errorMessage.textContent = '';
    });
});