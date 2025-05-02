let nameEl=document.getElementById("name");
let fatherEl=document.getElementById("father-name");
let emailEl=document.getElementById("email");
let number=document.getElementById("phone");
let alternate=document.getElementById("alt-phone");
let percentage=document.getElementById("ssc");
let courseEl=document.getElementById("course");
let msg=document.getElementById("message-paragraph");
let resetEl=document.getElementById("reset");
let submitEl=document.getElementById("submit");
 let uniqueId=null

submitEl.onclick=function(){
    if(nameEl.value==="" || fatherEl.value==="" || emailEl.value==="" || number.value==="" || alternate.value==="" || percentage.value==="" || courseEl.value===""){
        msg.textContent="Please enter all the fields before submitting!";
    }
    else if(!(email.value).includes("@")){
        msg.textContent='Email must contain "@"!'
    }else if(parseInt(number.value)===parseInt(alternate.value)){
        msg.textContent="Mobile Numbers should not be same!";
    }else if(parseInt(percentage.value)<75){
        msg.textContent="Not Eligible to this university";
    }else if(courseEl.value!=="maths" || courseEl.value!=="biology"){
        msg.textContent="Only Maths or Biology courses are allowed!"
    }else if((nameEl.value)){
        msg.textContent="Name should contain only alphabets!"
    }
    else{
        msg.textContent="Registering..."
    }
    uniqueId=setTimeout(function(){
        msg.textContent="Successfully Registered for University"
    },4000)
}

resetEl.onclick=function(){
    clearInterval(uniqueId)
    msg.textContent=""
}