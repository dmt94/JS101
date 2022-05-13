const staggeredCase = function (str) {
  const arr = str.toLowerCase().split("");

  let counter = 0;
  const newMap = arr
    .map((letter, i) => {
      if (Number(letter) || letter === " ") {
        return letter;
      } else {
        counter++;
        return counter % 2 === 0 ? letter : letter.toUpperCase();
      }
    })
    .join("");
  console.log(newMap);
};

staggeredCase("I Love Launch School!");
staggeredCase("ignore 77 the 444 numbers");