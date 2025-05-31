let milk = document.getElementById("milk-choco").value;
let dark = document.getElementById("dark-choco").value;
let white = document.getElementById("white-choco").value;
let totalprice = document.getElementById("total-price");
let totalitems = document.getElementById("total-items");
let calculate = document.getElementById("calculate");

calculate.onclick = function(){
     let total = (milk*5)+(dark*6)+(white*4);
      totalprice.textContent = total;
      let totalitem = parseInt(milk)+parseInt(dark)+parseInt(white)
      totalitems.textContent = totalitem 
     if (milk.value===""|| dark.value===""||white.value===""){
         totalprice.textContent = "Invalid";
         totalitems.textContent = "Please Enter Valid Postive Integers"
     }else if{
         
     }
};