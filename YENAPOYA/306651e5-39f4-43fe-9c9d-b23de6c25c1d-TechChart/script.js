let mainContainerE1=document.getElementById("mainContainer");
let nameE1=document.getElementById("name");
let emailE1=document.getElementById("email");
let countryE1=document.getElementById("country");
let mobileE1=document.getElementById("mobile");
let passwordE1=document.getElementById("password");
let conformPasswordE1=document.getElementById("conformPassword");
let captchEnterAreaE1=document.getElementById("captchEnterArea");
let errorMsgE1=document.getElementById("errorMsg").style.color="red";

function errorNoEvent(){
    if (mobileE1.length ===10) {
         errorMsgE1.textContent="";
    }
   else {
    errorMsgE1.textContent="*Please Enter Valid Moble No.";
    
     }
}
mobileE1.addEventListener("submit",errorNoEvent());
