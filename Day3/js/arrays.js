/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  let first = nums[0];
  let second = -1;

  for (let i = 0; i < nums.length; i++) {
    if (first < nums[i]) {
      second = first;
      first = nums[i];
    }
    if (second < nums[i] && first > nums[i]) {
      second = nums[i];
    }
  }

  return second;
}

const arrays = [2, 3, 6, 6, 5];
console.log('Task: Arrays');
console.log(`Input value:[${arrays}]`);
console.log(getSecondLargest(arrays));
console.log('**************************');
