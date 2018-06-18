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

const loopStr = 'javascriptloops';
console.log('Task: Loops');
console.log(`Input value:[${loopStr}]`);
vowelsAndConsonants(loopStr);
console.log('**************************');
