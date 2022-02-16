/*
JSON.parse() 
> takes a single String argument that contains some data 
in JSON format, and converts it to an object. 

> if you pass String to JSON.parse() that isn't valid JSON value, 
JSON.parse will throw an exception
*/

// let data = 'not valid JSON';

// JSON.parse(data);  // throws SyntaxError: Unexpected token i in JSON at position 0

/*
JSON strings look a lot like JavaScript object literals. 
The main differences are that we double quote the keys, 
and the literal value appears inside a String:
*/
let object = { "name": "Ferdinand", "age": 13 };  // object literal
let json = '{ "name": "Ferdinand", "age": 13 }';  // JSON string

console.log(object);
console.log(json);

/*
try/catch/finally to handle JSON.parse errors
*/
function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);  // Throws an exception if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an exception
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);    // Logs "There was a SyntaxError parsing JSON data:
                    //       Unexpected token i in JSON at position 0"
                    // Logs "Finished parsing data."
                    // Returns null