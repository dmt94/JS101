/*

1. split string ('+') for individual flights
2. split

FORMAT:
[DELAYED DEPARTURE] from [FAO] to [TXL] (11h25)
[ARRIVAL] from [BRU] to [FAO] (11h45)
[DELAYED ARRIVAL] from [HEL] to [FAO] (12h05)
[DEPARTURE] from [FAO] to [LIS] (12h30)


flightObj = {
  'Delayed Departure': ['FAO', 'TXL', '11h25'] ...
  'Arrival': []
  'Delayed Arrival': []
  'Departure': []
}

for (let flights in flightObj) {
  let expectFlight = flights.slice(1).replaceAll('_',' ');
  let departFrom = flightObj[flights][0].slice(0,3).toUpperCase();
  let arriveTo = flightObj[flights][1].slice(0,3).toUpperCase();
  let time = flightObj[flights][2].replace(':', 'h');

  console.log(`${expectFlight} from ${departFrom} to ${arriveTo} (${time})`)
}
*/

// let indFlights = flights.split('+');
// let flightObj = {};

// let eachInfo;
// for (let i = 0; i < indFlights.length; i++) {
//   eachInfo = indFlights[i].split(';');
//   flightObj[eachInfo[0]] =  [eachInfo[1], eachInfo[2], eachInfo[3]];
// }

// for (let flights in flightObj) {
//   let expectFlight = flights.slice(1).replaceAll('_',' ');
//   let departFrom = flightObj[flights][0].slice(0,3).toUpperCase();
//   let arriveTo = flightObj[flights][1].slice(0,3).toUpperCase();
//   let time = flightObj[flights][2].replace(':', 'h');

//   console.log(`${expectFlight} from ${departFrom} to ${arriveTo} (${time})`);
// }

function displayFlights(object) {
  for (let flights in object) {
    let expectFlight = flights.slice(1).replaceAll('_',' ');
    let departFrom = object[flights][0].slice(0,3).toUpperCase();
    let arriveTo = object[flights][1].slice(0,3).toUpperCase();
    let time = object[flights][2].replace(':', 'h');

    console.log(`${expectFlight} from ${departFrom} to ${arriveTo} (${time})`);
  }
}

function theFlights(string) {
  let indFlights = string.split('+');
  let flightObj = {};
  let eachInfo;

  for (let i = 0; i < indFlights.length; i++) {
    eachInfo = indFlights[i].split(';');
    flightObj[eachInfo[0]] =  [eachInfo[1], eachInfo[2], eachInfo[3]];
  }
  return displayFlights(flightObj);
}

const flightData =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(theFlights(flightData));


const msgs = flights.split('+');
console.log(msgs);

const getCode = str => str.slice(0, 3).toUpperCase();

for (const msg of msgs) {
  const [ms, from, to, time] = msg.split(';');
  const output = ${ms.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(
    to
  )} (${time.replace(':', 'h')});
  console.log(output.padStart(msgs[0].length));
}