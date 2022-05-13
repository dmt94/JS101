/*
determine whether an input string [is an IP address]
using 4 dot-separated numbers

10.4.5.11 etc. 

isAnIpNumber 
- determines whether a string is a numeric string between 0-255
*/

//Ben's Code:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false; 
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop(); //pop returns deleted char (in this case)
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true; 
}

/* 
REFACTOR: 
1. There is no false condition , just returns true if it is an IP address
2. There should only be 4 splits (components) to be considered a valid IP address
 - 4.5.5  (invalid)
 - 1.2.3.4.5.6  (invalid)
*/
