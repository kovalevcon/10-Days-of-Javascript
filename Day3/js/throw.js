// ********** Solution **********

/**
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 **/
function isPositive(a) {
  if (a > 0) {
    return 'YES';
  } else if (a === 0) {
    throw new Error('Zero Error');
  } else if (a < 0) {
    throw new Error('Negative Error');
  }
}

// ********** End of Solution **********

// ********** Test **********

console.log('Task: Throw');
console.log(`Input value: 3`);
console.log(`Result: ${isPositive(3)}`);
console.log(`Input value: 1`);
console.log(`Result: ${isPositive(1)}`);
console.log(`Input value: 2`);
console.log(`Result: ${isPositive(2)}`);
console.log('**************************');

// ********** End of Test **********
