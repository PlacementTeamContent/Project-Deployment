let fullnameE1=document.getElementById("full-name");
let EmailnameE1=document.getElementById("email");
let productE1=document.getElementById("product-name");
let RatingE1=document.getElementById("rating");
let feedbackE1=document.getElementById("feedback-type");
let CommentsE1=document.getElementById("Your comments");
let ErrorE1=document.getElementById("error-message");
let c = null;
function Submitbutton() {
    let fullnameE1val=fullnameE1.value;
    let EmailnameE1val=EmailnameE1.value;
    let productE1val=productE1.value;
    let RatingE1val=RatingE1.value;
    let feedbackE1val=feedbackE1.value;
    let CommentsE1val=CommentsE1.value;
    if (fullnameE1val==='' || EmailnameE1val==='' ||productE1val===''||RatingE1val===''||feedbackE1val===''||CommentsE1val===''){
        ErrorE1.textContent="Please enter all the fields before submitting"
    }
    else{
        let c =setTimeout(function(){
            ErrorE1.textContent="Processing..."
        },1000)
        clearTimeout(c)
        
    }
function Resetbutton(){
    ErrorE1.textContent=''
}
    
}