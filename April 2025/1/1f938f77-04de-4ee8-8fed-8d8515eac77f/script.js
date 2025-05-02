let a=document.getElementById("name")
let b=document.getElementById("mobile-number")
let c=document.getElementById("email")
let d=document.getElementById("experience")
let e=document.getElementById("password")
let g=document.getElementById("message-paragraph")
document.getElementById("submit").addEventListener("click",()=>{
   if (a.value==="" && b.value==="" && c.value==="" && d.value==="" && e.value==="" ) {
       g.textContent="Please enter all the fields before submitting!"
   }else{
       if( (a.value!=="" && b.value!=="" && c.value!=="" && d.value!=="" && e.value!=="" ) && (e.value.length>12 && c.value.includes("@") && Number(d.value)>3 && b.value.length===10) ){
           g.textContent="Applying... 4 seconds"
           let i=0
           let h=setInterval(()=>{
               if(i===4){
                   g.textContent="Application sent"
                   clearInterval(h)
               }else{
                   i+=1
               }
           },1000)
       }else if (b.value.length!==10){
           g.textContent=`Mobile Number should be exactly 10 digits!`
       }
       else if (!(c.value.includes("@"))){
           g.textContent=`Email must contain "@"`
       }else if (e.value.length<=12){
           g.textContent=`Password is to weak`
       }else if (Number(d.value)<=3){
           g.textContent=`Application Rejected!`
       }
   }
})

document.getElementById("reset").addEventListener("click",()=>{
    a.value="";
     b.value="";
      c.value="";
       d.value="";
        e.value="";
})