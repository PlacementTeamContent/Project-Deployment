// function validateForm(event) {
//     event.preventDefault();

//     // Get form elements
//     let firstName = document.getElementById('firstName').value.trim();
//     let lastName = document.getElementById('lastName').value.trim();
//     let mobile = document.getElementById('mobile').value.trim();
//     let email = document.getElementById('email').value.trim();
//     let description = document.getElementById('description').value.trim();
//     let age = parseInt(document.getElementById('age').value);
    // let password = document.getElementById('password').value;
    // let confirmPassword = document.getElementById('confirmPassword').value;
    // let messageParagraph = document.getElementById('message-paragraph');

    // // Reset message
    // messageParagraph.textContent = '';

    // // Validation checks
    // if (!firstName) {
    //     messageParagraph.textContent = 'Please enter the first name.';
    //     messageParagraph.style.color = 'red';
    //     return false;
    // }

    // if (!lastName) {
    //     messageParagraph.textContent = 'Please enter the last name.';
    //     messageParagraph.style.color = 'red';
    //     return false;
    // }

    // if (!/^\d{10}$/.test(mobile)) {
    //     messageParagraph.textContent = 'Please enter a valid 10-digit mobile number.';
    //     messageParagraph.style.color = 'red';
    //     return false;
    // }

    // if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    //     messageParagraph.textContent = 'Please enter a valid email address (e.g., abc@xyz.com).';
    //     messageParagraph.style.color = 'red';
    //     return false;
    // }

    // if (!description) {
    //     messageParagraph.textContent = 'Please enter the description.';
    //     messageParagraph.style.color = 'red';
    //     return false;
    // }

    // if (isNaN(age) || age <= 18) {
    //     messageParagraph.textContent = 'Age should be greater than 18.';
    //     messageParagraph.style.color = 'red';
    //     return false;
    // }

//     if (!password) {
//         messageParagraph.textContent = 'Please enter the password.';
//         messageParagraph.style.color = 'red';
//         return false;
//     }

//     if (password !== confirmPassword) {
//         messageParagraph.textContent = 'Passwords do not match.';
//         messageParagraph.style.color = 'red';
//         return false;
//     }

//     // If all validations pass
//     messageParagraph.textContent = 'Account Successfully Created!';
//     messageParagraph.style.color = 'green';

//     // Reset form after 4 seconds
//     setTimeout(() => {
//         document.getElementById('accountForm').reset();
//         messageParagraph.textContent = '';
//     }, 4000);

//     return false;
// } 






















// function validateForm(event) {
//     event.preventDefault();

//     // Get form elements
//     let firstName = document.getElementById('firstName').value.trim();
//     let lastName = document.getElementById('lastName').value.trim();
//     let mobile = document.getElementById('mobile').value.trim();
//     let email = document.getElementById('email').value.trim();
//     let description = document.getElementById('description').value.trim();
//     let age = parseInt(document.getElementById('age').value);
//     let password = document.getElementById('password').value;
//     let confirmPassword = document.getElementById('confirmPassword').value;
//     let messageParagraph = document.getElementById('message-paragraph');

    // // Reset message
    // messageParagraph.textContent = '';

    // // Check for empty fields
    // if (!firstName || !lastName || !mobile || !email || !description || !password || !confirmPassword || isNaN(age)) {
    //     messageParagraph.textContent = 'Please enter all the fields before submitting!';
    //     messageParagraph.style.color = 'red';
    //     return false;
    // }

    // // Validate age
    // if (age <= 18) {
    //     messageParagraph.textContent = 'Age should be above 18!';
    //     messageParagraph.style.color = 'red';
    //     return false;
    // }

    // // Validate passwords
    // if (password !== confirmPassword) {
    //     messageParagraph.textContent = 'Passwords do not match!';
    //     messageParagraph.style.color = 'red';
    //     return false;
    // }

//     // Validate mobile number (10 digits)
//     if (!/^\d{10}$/.test(mobile)) {
//         messageParagraph.textContent = 'Please enter a valid 10-digit mobile number.';
//         messageParagraph.style.color = 'red';
//         return false;
//     }

//     // Validate email
//     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//         messageParagraph.textContent = 'Please enter a valid email address!';
//         messageParagraph.style.color = 'red';
//         return false;
//     }

//     // If all validations pass
//     messageParagraph.textContent = 'Account Successfully Created!';
//     messageParagraph.style.color = 'green';

//     // Reset form after 4 seconds
//     setTimeout(() => {
//         document.getElementById('accountForm').reset();
//         messageParagraph.textContent = '';
//     }, 4000);

//     return false;
// }

// Add event listener for the reset button to clear the form and message
// document.getElementById('accountForm').addEventListener('reset', function() {
//     let messageParagraph = document.getElementById('message-paragraph');
//     messageParagraph.textContent = '';
// });
//  document.getElementById('submit').addEventListener('click', function(event) {
//     event.preventDefault();

    // // Get form elements
    // let firstName = document.getElementById('first-name').value.trim();
    // let lastName = document.getElementById('last-name').value.trim();
    // let mobile = document.getElementById('mobile-number').value.trim();
    // let email = document.getElementById('email').value.trim();
    // let description = document.getElementById('description').value.trim();
    // let age = parseInt(document.getElementById('age').value);
    // let password = document.getElementById('password').value;
    // let confirmPassword = document.getElementById('confirm-password').value;
    // let messageParagraph = document.getElementById('message-paragraph');

    // // Reset message
    // messageParagraph.textContent = '';

    // // Check for empty fields
    // if (!firstName || !lastName || !mobile || !email || !description || !password || !confirmPassword || isNaN(age)) {
    //     messageParagraph.textContent = 'Please enter all the fields before submitting!';
    //     messageParagraph.style.color = 'red';
    //     return;
    // }

    // // Validate age
    // if (age <= 18) {
    //     messageParagraph.textContent = 'Age should be above 18!';
    //     messageParagraph.style.color = 'red';
    //     return;
    // }

    // // Validate passwords
    // if (password !== confirmPassword) {
    //     messageParagraph.textContent = 'Passwords do not match!';
    //     messageParagraph.style.color = 'red';
    //     return;
    // }

    // // Validate mobile number (10 digits)
    // if (!/^\d{10}$/.test(mobile)) {
    //     messageParagraph.textContent = 'Please enter a valid 10-digit mobile number.';
    //     messageParagraph.style.color = 'red';
    //     return;
    // }

    // // Validate email
    // if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    //     messageParagraph.textContent = 'Please enter a valid email address!';
    //     messageParagraph.style.color = 'red';
    //     return;
    // }

    // If all validations pass
//     messageParagraph.textContent = 'Account Successfully Created!';
//     messageParagraph.style.color = 'green';

//     // Reset form after 4 seconds
//     setTimeout(() => {
//         document.getElementById('signup-form').reset();
//         messageParagraph.textContent = '';
//     }, 4000);
// });

// document.getElementById('reset').addEventListener('click', function() {
//     let messageParagraph = document.getElementById('message-paragraph');
//     document.getElementById('signup-form').reset();
//     messageParagraph.textContent = '';
// });
 

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    // Get form elements
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const mobile = document.getElementById('mobile-number').value.trim();
    const email = document.getElementById('email').value.trim();
    const description = document.getElementById('description').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageParagraph = document.getElementById('message-paragraph');

    // Reset message
    messageParagraph.textContent = '';

    // Check if any field is empty
    if (!firstName || !lastName || !mobile || !email || !description || !password || !confirmPassword || isNaN(age)) {
        messageParagraph.textContent = 'Please enter all the fields before submitting!';
        messageParagraph.style.color = 'red';
        return;
    }

    // Validate age
    if (age <= 18) {
        messageParagraph.textContent = 'Age should be above 18!';
        messageParagraph.style.color = 'red';
        return;
    }

    // Validate passwords
    if (password !== confirmPassword) {
        messageParagraph.textContent = 'Passwords do not match!';
        messageParagraph.style.color = 'red';
        return;
    }

    // Validate mobile number (10 digits)
    if (!/^\d{10}$/.test(mobile)) {
        messageParagraph.textContent = 'Please enter a valid 10-digit mobile number.';
        messageParagraph.style.color = 'red';
        return;
    }

    // Validate email
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        messageParagraph.textContent = 'Please enter a valid email address!';
        messageParagraph.style.color = 'red';
        return;
    }

    // If all validations pass
    messageParagraph.textContent = 'Account Successfully Created!';
    messageParagraph.style.color = 'green';

    // Reset form after 4 seconds
    setTimeout(() => {
        document.getElementById('signup-form').reset();
        messageParagraph.textContent = '';
    }, 4000);
});

// Add event listener for the reset button
document.getElementById('reset').addEventListener('click', function() {
    const messageParagraph = document.getElementById('message-paragraph');
    document.getElementById('signup-form').reset();
    messageParagraph.textContent = '';
});