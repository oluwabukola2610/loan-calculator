
// document.getElementById('result')
document.getElementById('loan-form').addEventListener('submit', calculateResults);



//calculate results 
function calculateResults(e){
console.log('caculating...');
   
  
 //creatingthe  UI LIST varaible
 const amount = document.getElementById('amount');
 const interest = document.getElementById('interest');
 const years = document.getElementById('years');
 const monthlyPayment = document.getElementById('monthly-payment');
 const totalPayment = document.getElementById('total-payment');
 const totalInterest = document.getElementById('total-interest');

 const principal = parseFloat(amount.value);
 const calculatedInterest = parseFloat(interest.value) /100 /12;
 const calculatedPayments = parseFloat(years.value) * 12;

 //compute montly paymently
 const x = Math.pow(1 + calculatedInterest, calculatedPayments);
 const monthly = (principal*x*calculatedInterest) /(x-1); 
  


 if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value =(monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
 } else {
    showError('please check your number');
 }
 e.preventDefault()

document.getElementById('loading').style.display = 'block';
setTimeout(removeLoaderAndShowResult, 3000)

 
}

function removeLoaderAndShowResult(){
   document.getElementById('loading').remove()
   document.getElementById('results').style.display = 'block';
}



// //to show error
//  function showError(error){
//  //crete a new div for error
//  const errorDiv = document.createElement('div');
//  // create/get ellement
//  const card = document.getElementsByClassName('card');
//  const heading = document.getElementsByClassName('heading');


//  errorDiv.className = 'alert alert-danger';
//  //create atext node and append to errordiv
//  errorDiv.appendChild(document.createTextNode(error));
//   //inser eror brfore heading
//  card.insertBefore(errorDiv, heading);
//  // clear error
//  setTimeout(clearError,3000);
//  }
//  function clearError(){
//     document.querySelector('.alert').remove(); 
//  }
  


