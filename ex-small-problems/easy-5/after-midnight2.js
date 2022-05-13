function extractHour(hour) {
  let strHour = hour.split('').slice(0,2).join('');
  return strHour[0] === '0' ? Number(strHour[1]) : Number(strHour);
}

function extractMin(min) {
  let strMin = min.split('').slice(3).join('');
  return strMin[0] === '0' ? Number(strMin[1]) : Number(strMin);
}

function isItMidnight(hours, minutes) {
  return (hours === 24 && minutes === 0) || (hours === 0 && minutes === 0);
}

function afterMidnight(string) {
  const MINUTES_PER_HOUR = 60;

  let hour = extractHour(string);
  let min = extractMin(string);

  return isItMidnight(hour, min) ? 0 : Math.floor(
    (hour * MINUTES_PER_HOUR) + min);
}

function beforeMidnight(string) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

  let hour = extractHour(string);
  let min = extractMin(string);

  return isItMidnight(hour, min) ? 0 : Math.floor(
    (MINUTES_PER_DAY - afterMidnight(string)));
}
/*
midnight: 0 & 24 => return 0
after midnight: start at 0
before midnight: subtract from 24
*/



console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

console.log(afterMidnight("00:05"));


/* Launch School Solution

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}
*/
