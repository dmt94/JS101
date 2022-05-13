/*
Write a function that counts the number of occurrences
of each element in a given array.
Once counted, log each element alongside the number of occurrences.
Consider the words case sensitive e.g. ("suv" !== "SUV").
*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

// function countOccurences(vehicles) {
//   const findDuplicates =
//   vehicles => vehicles.filter((car, index) => vehicles.indexOf(car) !== index);

//   const items = findDuplicates(vehicles);
//   return items;
// }

// console.log(countOccurences(arr));

function countOccurences(arr) {
  let count = {};
  arr.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });

  for (let key in count) {
    console.log(`${key} => ${count[key]}`);
  }
}

countOccurences(vehicles);