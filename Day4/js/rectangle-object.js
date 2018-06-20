// ********** Solution **********

/**
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}

// ********** End of Solution **********

// ********** Test **********

const a = 4;
const b = 5;
const rec = new Rectangle(a, b);

console.log('Task: Create a Rectangle Object');
console.log(`Input value: a = ${a}, b = ${b}`);
console.log(`rec.length = ${rec.length}`);
console.log(`rec.width = ${rec.width}`);
console.log(`rec.perimeter = ${rec.perimeter}`);
console.log(`rec.area = ${rec.area}`);
console.log('**************************');

// ********** End of Test **********