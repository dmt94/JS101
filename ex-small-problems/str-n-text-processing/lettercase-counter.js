/*
Write a function that takes a string and returns
an object containing three properties:
one representing the number of characters in the string
that are lowercase letters,

one representing the number of
characters that are uppercase letters,

and one representing the number of characters that are neither.
*/

function letterCaseCount(string) {
  let obj = {lowercase: 0, uppercase: 0, neither: 0};

  string.split('').forEach(char => {
    if (/[a-zA-Z]/.test(char)) {
      if (char === char.toLowerCase()) {
        obj.lowercase += 1;
      } else obj.uppercase += 1;
    } else obj.neither += 1;
  });

  console.log(obj);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }


/*
Nice and short way:
*/
function letterCaseCount2(str) {
  let arrChar = str.split('');

  let result = {};
  result.lowercase = arrChar.filter(char => /[a-z]/.test(char)).length;
  result.uppercase = arrChar.filter(char => /[A-Z]/.test(char)).length;
  result.neither = arrChar.filter(char => !(/a-zA-Z/).test(char)).length;

  return result;
}


console.log(letterCaseCount2('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount2('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount2('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount2(''));            // { lowercase: 0, uppercase: 0, neither: 0 }