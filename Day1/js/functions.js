// ********** Solution **********

/*
 * Create the function factorial here
 */
function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  }

  return 1;
}

// ********** End of Solution **********

// ********** Test **********

const numbFactorial = 4;
console.log('Task: Functions');
console.log(`Input value: numb = ${numbFactorial}`);
console.log(`Result: factorial = ${factorial(numbFactorial)}`);
console.log('**************************');

// ********** End of Test **********