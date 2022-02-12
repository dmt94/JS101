/*

Create a function that takes 2 arguments, an array and an object. 
The array will contain 2 or more elements that,
when combined with adjoining spaces, will produce a person's name. 
The object will contain two keys, "title" and "occupation", 
and the appropriate values. 

Your function should return a greeting that uses 
the person's full name, and mentions the person's title.


> I/O: 
  INPUT: 2 arguments (array, object)
    - array:  
      - 2+ elements that combined will produce a person's name 
    - object: 
      - 2 key-value pairs: 
        title: x
        occupation: y
- assume that object comes with set title and occupation values
- assume that no check needed to check if array contains 2+ elements 
or that object contains 2 key-value pairs.
*/

function greetings(array, object) {
  return `Hello, ${array.join(' ')}! Nice to have a ${object['title']} ${object['occupation']} around...`;
}

console.log(greetings(["Maries", "K.", "Goose"], { title: "Noob", occupation: "Software Developer" }));