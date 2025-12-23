let email1= document.getElementById("email");
let ErrorMsg1=document.getElementById("errorMsg");
 
let mobile1  = document.getElementById("mobile");
let ErrorMsg2 = document.getElementById("errorMsg");

let password1 = document.getElementById("password");
let ErrorMsg3 = document.getElementById("errorMsg");
 
let confirmpass  = document.getElementById("conformPassword");
let ErrorMsg4 = document.getElementById("errorMsg");

let capchaEnterArea1 = document.getElementById("capchaEnterArea");
let ErrorMsg5 = document.getElementById("errorMsg");
 
email1.addEventListener("blur",function(event){
    if(event.target.value=="@gmail.com"){
        ErrorMsg1.textContent="";
        
    }else{
        ErrorMsg1.textContent="*Please Enter Valid Email";
    }
    
}); 
form-container.addEventListener("Submit",function(event){
    event.preventDefault();
});
