
/*
Log all odd numbers from 1 to 99, inclusive, to the console, 
with each number on a separate line.
*/

//MY SOLUTION
function oddOnly() {
  count = 0; 
  while (count < 100) {
    count += 1; 
    if (count % 2 === 1) {
      console.log(count);
    }
  }
}

oddOnly();

//________________________________________________________________________________________________________
//LS SOLUTION
for (let number = 1; number < 100; number += 2) { //odd is every other number! clever!
  console.log(number);
}