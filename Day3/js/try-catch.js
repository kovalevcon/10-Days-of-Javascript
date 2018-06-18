/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    // split, reverse, and join
    s = s.split('').reverse().join('');
  }
  catch (e) {
    console.log(e.message);
  }
  finally {
    console.log(s);
  }
}

const number = "1234";
console.log('Task: Try, Catch, and Finally');
console.log(`Input value:[${number}]`);
reverseString(number);
console.log('**************************');
