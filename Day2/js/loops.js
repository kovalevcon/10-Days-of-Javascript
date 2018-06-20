// ********** Solution **********

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowelChar = 'aeiou';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (vowelChar.indexOf(s[i]) === -1) {
      result += s[i] + '\n';
    } else {
      console.log(s[i]);
    }
  }

  console.log(result.trim());
}

// ********** End of Solution **********

// ********** Test **********

const loopStr = 'javascriptloops';
console.log('Task: Loops');
console.log(`Input value:[${loopStr}]`);
console.log('Result:');
vowelsAndConsonants(loopStr);
console.log('**************************');

// ********** End of Test **********
