function wordSizes(string) {

  let strArr = string.split(' ');

  const count = {};

  strArr.forEach(element => {
    count[element.length] = (count[element.length] || 0) + 1;
  });

  console.log(count);
}

// const arr = ['one', 'two', 'one', 'one', 'two', 'three'];


wordSizes('Four score and seven.');
wordSizes('Hey diddle diddle, the cat and the fiddle!');