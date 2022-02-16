function car(newCar) {
  let make = getMake(newCar);
  let model = getModel(newCar);
  return [make, model];
}

function getMake(newCar) {
  return newCar.split(' ')[0];
}

function getModel(newCar) {
  return newCar.split(' ')[2];
}

let [ make, model ] = car('Ford Mustang');

// try {
//   return model[0] === 'M';
// } catch {
//   return false;
// }

console.log(make === 'Ford');   // => true
console.log(model[0] === 'M'); 
// Without try catch => TypeError: Cannot read property '0' of undefined
