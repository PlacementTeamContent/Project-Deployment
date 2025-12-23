document.querySelector('button[type="submit"]').addEventListener('click',function(event)
    event.preventDefault());//  prevent from submission 
   
 const emailInput=
document.getElementById('email').value;
 const errorMsg=
document.getElementById('errorMsg');
if(!
emailInput.includes('@gmail.com')){
    errorMsg.textContent='*Please Enter valid Email';
} else{
    errorMsg.textContent='';
}
