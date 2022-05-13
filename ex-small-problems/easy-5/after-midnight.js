/*
The time of day can be represented as the
number of minutes before or after midnight.

0 === 00:00 (midnight)
-3 === 23:57

-num = before midnight;
+num = after midnight;

24 hour format - hh:mm

1 hr = 60 min

const MIN_TO_HOUR = 60;
const HOUR_TO_MIN = 1 / 60;
const MIDNIGHT_ZERO_HOUR = 0;

if argument is negative => 24:[00] + (-min)
if argument is positive => 00:[00] + (min)
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes %= MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}


console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(35));
console.log(timeOfDay(-4231));