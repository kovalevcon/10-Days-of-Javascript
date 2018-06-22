// ********** Solution **********

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  const [a, p] = expressions;
  const sqrtValue = Math.sqrt(p*p - 16 * a);
  const s1 = (p + sqrtValue) / 4;
  const s2 = (p - sqrtValue) / 4;

  return [s2, s1];
}

// ********** End of Solution **********

// ********** Test **********

let s1 = 10;
let s2 = 14;
[s1, s2] = [s1, s2].sort();

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log('Task: Template Literals');
console.log('Result:');
console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);

console.log('**************************');

// ********** End of Test **********