/*
Write a function that takes a floating point number
representing an angle between 0 and 360 degrees and

returns a string representing that angle in degrees, minutes, and seconds.

You should use a degree symbol (˚) to represent degrees,
a single quote (') to represent minutes, and a double quote (")
to represent seconds.

There are 60 minutes in a degree, and 60 seconds in a minute.

INPUT: represents an angle
OUTPUT: angle in: degrees, minutes, seconds

angle
degree(duplicate of angle)
      (whole number, so makes sense that Math.floor is used)
min (1 degree = 60 min)
sec (1 min = 60 sec)
*/

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  //DEGREESINT is a whole number, so when argument is a float,
  //it takes the whole number
  let degreesInt = Math.floor(degreesFloat);

  //MINUTES will convert the leftover decimal value of
  //whole degree and float argument
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);

  //SECONDS will convert the leftover decimal value of
  //whole degree and float argument
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

// padZeroes are necessary because
// the MIN and SEC are
// read with 0 first from left -> right
function padZeroes(number) {
  //checks if the minutes and seconds need the zero in the first place
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

console.log(dms(-1));
console.log(dms(30));

/* Short and Simple Solution

function dms(angle) {
  angle %= 360;
  if (angle < 0) angle += 360;
  let degrees = Math.floor(angle);
  angle -= degrees;
  let minutes = Math.floor(angle * 60);
  let seconds = Math.floor(((angle * 60) - minutes) * 60);
  return `${degrees}°${minutes < 10 ? '0' + minutes :
          String(minutes)}'${seconds < 10 ? '0' + seconds : String(seconds)}"`;
}
*/