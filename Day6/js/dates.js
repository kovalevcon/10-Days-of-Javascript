// ********** Solution **********

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  const weekDay = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  // Write your code here
  return weekDay[new Date(dateString).getDay()];
}

// ********** End of Solution **********

// ********** Test **********

const date1 = '10/11/2009';
const date2 = '11/10/2010';

console.log('Task: JavaScript Dates');

console.log(`Input values: [${date1}]`);
console.log(`Result: ${getDayName(date1)}`);
console.log(`Input values: [${date2}]`);
console.log(`Result: ${getDayName(date2)}`);

console.log('**************************');

// ********** End of Test **********