function staggeredCase(string) {
  return string
    .split("")
    .map((char, index) => {
      if (/[a-zA-Z]/.test(char) && index % 2 === 0) {
        return char.toUpperCase();
      } else if (/[a-zA-Z]/.test(char) && index % 2 !== 0) {
        return char.toLowerCase();
      } else return char;
    }).join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log(staggeredCase("I Love Launch School!"));

//better version

// function staggeredCase2(str) {
//   let lowerToggle;

//   return  [...str].map(char => char.match(/[^a-z]/gi) ? char :
//             (lowerToggle = !lowerToggle) ? char.toUpperCase() :
//             char.toLowerCase() ).join('');
// }