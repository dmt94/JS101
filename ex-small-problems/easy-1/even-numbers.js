/*
Log all even numbers from 1 to 99, inclusive, to the console, 
with each number on a separate line.
*/

//MY SOLUTION
for (let i = 0; i < 100; i = i + 2) {
  console.log(i);
}
//________________________________________________________________________________________________________
//LS SOLUTION
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue; //another clever use of continue! 
  }

  console.log(number);
}

/*
NOTE: fizzbuzz continue alternate type of problems */