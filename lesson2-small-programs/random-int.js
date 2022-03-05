/*
Math.round() => Math.round(Math.random() * (array.length - 1))
Math.ceil() => Math.ceil((Math.random() * (array.length) - 1))
Math.floor() => Math.floor(Math.random() * array.length)

to get random index ?
*/

let schoolIdols = ['Dragon', 'Phoenix', 'Pegasus', 'Serpentine', 'Sylca'];

let randomDecimal = Math.random()

console.log(Math.round(randomDecimal * (schoolIdols.length - 1)));
console.log(Math.ceil((randomDecimal * schoolIdols.length) - 1));
console.log(Math.floor(randomDecimal * schoolIdols.length));
