// debug.js


let second = 2; 
let counter = 1;
/* when inspecting with a debugger
that lets you pause the program during execution,
debugger wil automatically pause program execution
at the first expression or function call it encounters

accessing this first variable 'counter' here 
returns undefined bc the expression has not yet been
evaluated and so assignment to 1 has not taken place
*/

while (second <= 5) {
  console.log(second);
  console.log(counter);
  debugger;
  second += 1; 
  counter += 1;
}

/* Debugging will say:
Break on start in debugging-2.js:3  means >> program execution stopped on line 3
*/

