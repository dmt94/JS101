/*
Inventory Item Availability

Building on the previous exercise, write a function that
returns [true] or [false] based on whether or not
an inventory item is [available].

- calculate final quantity of id
- return true/false if quantity <= 0
*/

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(idNum, list) {
  return list.filter(obj => obj.id === idNum);
}
function isItemAvailable(idNum, tList) {
  let idQuantity = 0;
  transactionsFor(idNum, tList).forEach((obj) => {
    obj.movement === 'in' ? idQuantity += obj.quantity : idQuantity -= obj.quantity;
  });
  return idQuantity >= 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true