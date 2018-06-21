// ********** Solution **********

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
function Polygon(lengths) {
  this.lengths = lengths;
  this.perimeter = getPerimeter;
}

function getPerimeter() {
  return this.lengths.reduce((sum, current) => sum + current, 0);
}

// ********** End of Solution **********

// ********** Test **********

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log('Task: Classes');

console.log('Input value:');
console.log(rectangle);
console.log(`rectangle.perimeter() = ${rectangle.perimeter()}`);

console.log('Input value:');
console.log(square);
console.log(`square.perimeter() = ${square.perimeter()}`);

console.log('Input value:');
console.log(pentagon);
console.log(`pentagon.perimeter() = ${pentagon.perimeter()}`);

console.log('**************************');

// ********** End of Test **********