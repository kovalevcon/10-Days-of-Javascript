// ********** Solution **********

function getGrade(score) {
  let grade;
  // Write your code here
  if (25 < score && score <= 30) {
    grade = 'A';
  } else if (20 < score && score <= 25) {
    grade = 'B';
  } else if (15 < score && score <= 20) {
    grade = 'C';
  } else if (10 < score && score <= 15) {
    grade = 'D';
  } else if (5 < score && score <= 10) {
    grade = 'E';
  } else if (0 < score && score <= 5) {
    grade = 'F';
  }

  return grade;
}

// ********** End of Solution **********

// ********** Test **********

const grade = 11;
console.log('Task: Conditional Statements: If-Else');
console.log(`Input value:[${grade}]`);
console.log(`Result: ${getGrade(grade)}`);
console.log('**************************');

// ********** End of Test **********
