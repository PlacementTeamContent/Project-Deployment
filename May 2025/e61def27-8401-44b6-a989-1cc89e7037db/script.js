let milk_choco = document.getElementById('milk-choco');

let choclates_list = document.getElementById('chocolates-list');

let dark_choco = document.getElementById('dark-choco');
let white_choco = document.getElementById('white-choco');

let calculation = document.getElementById('calculate');

let total_price = document.getElementById('total-price');
let total_items = document.getElementById('total-items');

calculation.onclick = function(){
  let milk_ = milk_choco.value * 5
  let dark_ = dark_choco.value*6
  let white_ = white_choco.value *4
  
  let milk_val = milk_choco.value
let dark_val = dark_choco.value
let white_val =white_choco.value 
  total_price.textContent = parseFloat(milk_) + parseFloat(dark_) + parseFloat(white_);
  
  let sum_of =  parseFloat(milk_val) + parseFloat(dark_val) +  parseFloat(white_val);
  
  total_items.textContent =  sum_of;
  if(sum_of > 20){
      total_price.textContent = 'Invalid';
      total_items.textContent = 'Cart items should be below 20'
  }


  if(milk_val < 0 || white_val<0 || dark_val<0){
      total_price.textContent = 'Invalid';
      total_items.textContent = 'Please Enter Valid Positive Integers'
  }
  
 
 if(milk_val.includes('.')||white_val.includes('.')||dark_val.includes('.')){
     total_price.textContent = 'Invalid';
      total_items.textContent = 'Please Enter Valid Positive Integers'
 }
 
 if(milk_val===""||white_val===""||dark_val===""){
     total_price.textContent = 'Invalid';
      total_items.textContent = 'Please Enter Valid Positive Integers'
     
 }
};