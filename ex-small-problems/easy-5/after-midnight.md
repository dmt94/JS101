### After Midnight Problem ###
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

**Solution**

```javascript
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
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}
```

There are 24 hours in one day 
0 and 24 hours = midnight


When coding keep in mind:
- avoid magic numbers
- constrict repetitive actions into functions
  >> **helper function**

- body of method in this problem
```javascript
if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }
```

When **`deltaMinutes`** is less than `0`
add **`MINUTES_PER_DAY`** to the **`deltaMinutes`**
```javascript 
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
```

___

### After Midnight Problem Part 2 ###

LS Solution: 
```javascript 
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
```

**Splitting using destructuring**

```javascript 
function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
}
```

- The `afterMidnight` function splits the time string into hours and minutes, then calculates the result in total minutes. Note that we use **`array destructuring`** to unpack values from arrays into the variables hours and minutes.


**Edge Cases**

```javascript
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
```

- We need to use **`% MINUTES_PER_DAY`** to handle a simple **edge case**. In the given time format, `00:00` and `24:00` are the same. 

<br>

- The way we implemented **`afterMidnight`** calculates these as different times. 

<br>

- We use the **`remainder operator (%)`** and **`MINUTES_PER_DAY`** to:
  - divide the calculated minutes by the number of minutes in a day, **then return the remainder, which will be `0`** for both **`00:00`** and **`24:00`**.

