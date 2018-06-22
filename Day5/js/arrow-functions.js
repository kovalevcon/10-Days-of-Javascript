// ********** Solution **********

/**
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  return nums.map((num) => num % 2 ? num * 3 : num * 2);
}

// ********** End of Solution **********

// ********** Test **********

const numbers = [1, 2, 3, 4, 5];

console.log('Task: Arrow functions');
console.log(`Input value: numbers = [${numbers}]`);
console.log(`Result: [${modifyArray(numbers)}]`);
console.log('**************************');

// ********** End of Test **********