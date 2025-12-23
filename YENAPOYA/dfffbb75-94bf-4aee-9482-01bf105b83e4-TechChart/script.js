email = document.getElementById("email");
email = email.value;
mobile = document.getElementById("mobile");
mobile = mobile.value

function subbtn() {
    if ("@gmail.com" !== email); {
        console.log("Please Enter Valid Email");
    }
    if (length(mobile) !== 10); {
        console.log("Please Enter Valid Mobile No ");
    }
}
