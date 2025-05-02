let nameEle=document.getElementById("name");
let fathername=document.getElementById("father-name");
let email =document.getElementById("email");
let phone =document.getElementById("phone");
let alterPhone =document.getElementById("alt-phone");
let  ssc =document.getElementById("ssc");
let course  =document.getElementById("course");
let msgPara=document.getElementById("message-paragraph");
let submitBtn=document.getElementById("submit");
let resetBtn=document.getElementById("reset");


function submitbtn(){
    if((nameEle.value==="") || (fathername.value==="") || (email.value==="")|| (phone.value==="")|| (alterPhone.value==="")|| (ssc.value="") || (course.value="")){
        msgPara.textContent="Please enter all the fields before submitting!";
        msgPara.style.color="red";
    }
    else if(typeof(nameEle.value)===typeof(1)){
            msgPara.textContent="Name should contain only alphabets!";
            msgPara.style.color="red";
            
        }
    else if(!(email.value.includes("@"))){
         msgPara.textContent="Email must contain @!";
          msgPara.style.color="red";
    }
    else if(phone.value===alterPhone.value){
        msgPara.textContent="Mobile Numbers should not be same!";
          msgPara.style.color="red";
    }
    else if(ssc.value<75){
        msgPara.textContent="Not Eligible to this university";
          msgPara.style.color="red";
    }
    
    
    
}