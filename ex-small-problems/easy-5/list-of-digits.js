function digitList(num) {
  if (num >= 0) {
    return String(num).split('');
  }
  return 'Argument is not a positive number';
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));
console.log(digitList(-4));

