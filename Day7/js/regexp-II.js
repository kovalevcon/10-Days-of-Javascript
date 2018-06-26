// ********** Solution **********

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */
  const re = /^(Mr?s|[MDE]r)\.[A-Za-z]+$/;
  // re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.).[A-Za-z]*/;

  /*
   * Do not remove the return statement
   */
  return re;
}

// ********** End of Solution **********

// ********** Test **********

const re = regexVar();
const str1 = 'Mr.X';
const str2 = 'Mrs.Y';
const str3 = 'Dr#Joseph';
const str4 = 'Er .Abc';

console.log('Task: Regular Expressions II');

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