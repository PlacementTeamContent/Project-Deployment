let inp1=document.getElementById("first-name");
let inp2=document.getElementById("last-name");
let inp3=document.getElementById("mobile-number");
let inp4=document.getElementById("email");
let inp5=document.getElementById("age");
let inp6=document.getElementById("password");
let inp7=document.getElementById("confirm-password");
let para = document.getElementById("message-paragraph");
let btn1 = document.getElementById("reset")
let btn2 = document.getElementById("submit")

btn2.onclick=function(){
    if (inp1.value==="" ||inp2.value==="" ||inp3.value==="" ||inp4.value==="" ||inp5.value==="" ||inp6.value==="" ||inp7.value==="" ){
        para.textContent='Please enter all the fields before submitting!'
    }else if (!inp4.value.includes("@")){
        para.textContent="Please enter a valid email address!"
    }else if (inp6.value!==inp7.value){
        para.textContent='Passwords do not match!'
    }else if (inp5.value<18){
        para.textContent="Age should be above 18!"    
    }else if (inp3.value.length !==10){
        para.textContent="Please enter valid mobile number!"
    }else {
        let unq=null 
        para.textContent="Creating account..."
        unq=setInterval(function(){
            para.textContent="Account Sucessfully created"
        },4000)
    }
}
btn1.onclick=function(){
    inp1.value=""
    inp2.value=""
    inp3.value=""
    inp4.value=""
    inp5.value=""
    inp6.value=""
    inp7.value=""
    para.textContent=""
}