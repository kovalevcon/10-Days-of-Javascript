// ********** Solution **********

function getMaxLessThanK(n, k) {
  let big = 0;
  for (let a = 1; a < n; a++) {
    for (let b = a + 1; b <= n; b++) {
      if ((a & b) < k && (a & b) > big) {
        big = a & b;
      }
    }
  }

  return big;
}

// ********** End of Solution **********

// ********** Test **********

const bitwise1 = [5, 2];
const bitwise2 = [8, 5];
const bitwise3 = [2, 2];

console.log('Task: Bitwise Operators');

console.log(`Input values: [${bitwise1}]`);
console.log(`Result: ${getMaxLessThanK(...bitwise1)}`);
console.log(`Input values: [${bitwise2}]`);
console.log(`Result: ${getMaxLessThanK(...bitwise2)}`);
console.log(`Input values: [${bitwise3}]`);
console.log(`Result: ${getMaxLessThanK(...bitwise3)}`);

console.log('**************************');

// ********** End of Test **********