function main() {
  const PI = Math.PI;

  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  let radius = readLine();

  // Print the area of the circle:
  // console.log(radius);
  console.log(PI * Math.pow(radius, 2));

  // Print the perimeter of the circle:
  console.log(2 * PI * radius);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch(error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

function readLine() {
  return 2.6;
}

console.log('Task: Let and Const');
console.log(main());
console.log('**************************');
