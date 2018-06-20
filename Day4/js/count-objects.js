// ********** Solution **********

/**
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let counts = 0;

  for (let p in objects) {
    counts += (objects[p].x === objects[p].y);
  }

  return counts;
}

// ********** End of Solution **********

// ********** Test **********

const n = 5;
let objects = [];

for (let i = 0; i < n; i++) {
  const [a, b] = [getRandomArbitrary(n-n, n), getRandomArbitrary(n-n, n)];
  objects.push({
    x: +(a),
    y: +(b)
  });
}

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

console.log('Task: Count Objects');
console.log(`Input value: n = ${n}`);
console.log('Array of objects:');
console.log(objects);
console.log('Result: ' + getCount(objects));
console.log('**************************');

// ********** End of Test **********