// ********** Solution **********

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  const re = /^([aeiou]).*\1$/;

  /*
   * Do not remove the return statement
   */
  return re;
}

// ********** End of Solution **********

// ********** Test **********

const re = regexVar();
const str1 = 'bcd';
const str2 = 'abcd';
const str3 = 'abcda';
const str4 = 'abcdo';

console.log('Task: Regular Expressions I');

console.log(`Input values: ${str1}`);
console.log(`Result: ${re.test(str1)}`);

console.log(`Input values: ${str2}`);
console.log(`Result: ${re.test(str2)}`);

console.log(`Input values: ${str3}`);
console.log(`Result: ${re.test(str3)}`);

console.log(`Input values: ${str4}`);
console.log(`Result: ${re.test(str4)}`);

console.log('**************************');

// ********** End of Test **********