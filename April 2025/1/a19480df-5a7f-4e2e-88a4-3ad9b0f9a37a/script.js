document.addEventListener('DOMContentLoaded', function () {
            const submitButton = document.getElementById('submit');
            const resetButton = document.getElementById('reset');
            const errorMessage = document.getElementById('error-message');
            const fullNameInput = document.getElementById('full-name');
            const emailInput = document.getElementById('email');
            const productNameInput = document.getElementById('product-name');
            const ratingInput = document.getElementById('rating');
            const feedbackTypeInput = document.getElementById('feedback-type');
            const commentsInput = document.getElementById('comments');

            function validateForm() {
                let fullName = fullNameInput.value.trim();
                let email = emailInput.value.trim();
                let productName = productNameInput.value.trim();
                let rating = ratingInput.value.trim();
                let feedbackType = feedbackTypeInput.value.trim();
                let comments = commentsInput.value.trim();

                if (!fullName || !email || !productName || !rating || !feedbackType || !comments) {
                    errorMessage.textContent = "Please enter all the fields before submitting.";
                    errorMessage.style.color = "red";
                    return false;
                }

                if (!email.includes("@")) {
                    errorMessage.textContent = "Please enter a valid email address!";
                    errorMessage.style.color = "red";
                    return false;
                }

                if (productName !== "Gift" && productName !== "Trimmer" && productName !== "Jewel") {
                    errorMessage.textContent = "You didn't purchase this product.";
                    errorMessage.style.color = "red";
                    return false;
                }

                let ratingValue = parseInt(rating);
                if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
                    errorMessage.textContent = "Please provide a rating between 1 and 5.";
                    errorMessage.style.color = "red";
                    return false;
                }

                if (feedbackType !== "Complaint" && feedbackType !== "Suggestion") {
                    errorMessage.textContent = "Feedback type should be either Complaint or Suggestion.";
                    errorMessage.style.color = "red";
                    return false;
                }

                if (comments.length < 15) {
                    errorMessage.textContent = "Comments must be at least 15 characters long.";
                    errorMessage.style.color = "red";
                    return false;
                }

                errorMessage.textContent = "Processing...";
                errorMessage.style.color = "orange";
                return true;
            }

            function resetForm() {
                fullNameInput.value = "";
                emailInput.value = "";
                productNameInput.value = "";
                ratingInput.value = "";
                feedbackTypeInput.value = "";
                commentsInput.value = "";
                errorMessage.textContent = "";
            }

            submitButton.addEventListener('click', function (event) {
                event.preventDefault();
                if (validateForm()) {
                    setTimeout(function () {
                        errorMessage.textContent = "Thank you for your feedback!";
                        errorMessage.style.color = "green";
                        resetForm();
                    }, 3000);
                }
            });

            resetButton.addEventListener('click', function () {
                resetForm();
            });
        });