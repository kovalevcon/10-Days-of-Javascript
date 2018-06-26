// ********** Solution **********

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  const re = new RegExp('\\d+','\g');

  /*
   * Do not remove the return statement
   */
  return re;
}

// ********** End of Solution **********

// ********** Test **********

const re = regexVar();
const str1 = '102, 1948948 and 1.3 and 4.5';
const str2 = '1 2 3';

console.log('Task: Regular Expressions I');

console.log(`Input values: ${str1}`);
let r = str1.match(re);
console.log(`Result:`);
for (const e of r) {
  console.log(e);
}

console.log(`Input values: ${str2}`);
r = str2.match(re);
console.log(`Result:`);
for (const e of r) {
  console.log(e);
}

console.log('**************************');

// ********** End of Test **********