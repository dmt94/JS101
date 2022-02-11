// WITH user validation 

let rlSync = require('readline-sync');

function sumOrProduct() {
  function integerAsk() {
    let qInt = parseInt(rlSync.question('\nType an integer greater than 0\n')); 
    if (Number.isNaN(qInt) === true || qInt <= 0) {
      console.log('\nEnter an integer that is greater than 0');
      return integerAsk();
    }
    else {
      return qInt;
    }
  }
  function sOrP() {
    let qSumOrProduct = rlSync.question('Enter "s", to compute sum.\nEnter "p" to compute product\n');
    if (qSumOrProduct === 's' || qSumOrProduct === 'p') {
      return qSumOrProduct;
    }
    else {
      console.log('Enter \'s\' or \'p\'\n');
      return sOrP();
    }
  }
  let integer = integerAsk();   //called the function
  let sumOrP = sOrP();          //called the function
  
  let arrayInt = [];
  for (let i = 1; i <= integer; i++) {
    arrayInt.push(i);
  }
  if (sumOrP === 's') {
    let sumArray = arrayInt.reduce((accumulator, element) => {
      return accumulator + element}, 0); 
    return sumArray;
  }
  else if (sumOrP === 'p') {
    let productArray = arrayInt.reduce((accumulator, element) => {
      return accumulator * element}, 1); 
    return productArray;
  }
} //end

console.log(sumOrProduct());