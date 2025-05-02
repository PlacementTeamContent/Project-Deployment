// Getting elements
const nameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const productname = document.getElementById('product-name');
const rating = document.getElementById('rating');
const feedback= document.getElementById('feedback-type');
const comments = document.getElementById('comments');
const errorMessage = document.getElementById('error-message');

const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

// Submit button click event
submitButton.addEventListener('click', function () {
    errorMessage.textContent = '';

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const product = productname.value.trim();
    const rate = rating.value.trim();
    const feed = feedback.value.trim();
    const comm = comments.value.trim();

    // Check if any field is empty
    if (name === '' || product === '' || email === '' || rate === '' || feed === '' || comm ==='') {
        errorMessage.textContent = "Please enter all the fields before submitting.";
        errorMessage.style.color = "red";
        return;
    }
    if (parseInt(rate) <= 1 && parseInt(rate) >= 5) {
        errorMessage.textContent = 'Please provide a rating between 1 and 5.'
        errorMessage.style.color = "red";
        return;
    }

    if (!email.includes('@') || !email.includes('.com')) {
        errorMessage.textContent = "Please enter a valid email address!";
        errorMessage.style.color = "red";
        return;
    }
    
      if (comm.length <= 15) {
        errorMessage.textContent = 'Comments must be at least 15 characters long.';
        errorMessage.style.color = "red";
        return;
    }
    
     if (product != "Gift" || product != "Trimmer" || product != "Jewel") {
        errorMessage.textContent = 'You didn'+"'"+"t purchase this product.";
        errorMessage.style.color = "red";
        return;
    }

    
})
// Reset button click event
resetButton.addEventListener('click', function () {
    nameInput.value = '';
   productname.value = '';
    emailInput.value = '';
    rating.value = '';
    feedback.value = '';
    comments.value='';
    
    errorMessage.textContent = '';
  
});

    // Check if mobile number is exactly 10 digits
//     if (parseInt(rate) >= 1 && parseInt(rate) <= 5) {
//         errorMessage.textContent = "Mobile number should be exactly 10 digits.";
//         errorMessage.style.color = "red";
//         return;
//     }

//     // Check if email contains both "@" and ".com"
//     if (!email.includes('@') || !email.includes('.com')) {
//         errorMessage.textContent = "Please enter a valid email address.";
//         errorMessage.style.color = "red";
//         return;
//     }

//     // All validations passed
//     processingMessage.textContent = "Processing...";
//     processingMessage.style.color = "orange";

//     setTimeout(function () {
//         processingMessage.textContent = "Your data is saved. Thank you!";
//         processingMessage.style.color = "orange";
//     }, 3000);
// });

// // Reset button click event
// resetButton.addEventListener('click', function () {
//     nameInput.value = '';
//     mobileInput.value = '';
//     emailInput.value = '';
//     stateInput.value = '';
//     ageInput.value = '';
//     errorMessage.textContent = '';
//     processingMessage.textContent = '';
// });