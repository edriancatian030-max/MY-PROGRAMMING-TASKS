function assessGrade(score) {
  let result;

  if (typeof score !== 'number') {
    result = 'Invalid score';
  } else if (isNaN(score)) {
    result = 'Invalid score';
  } else if (score === Infinity || score === -Infinity) {
    result = 'Invalid score';
  } else if (score < 0) {
    result = 'Invalid score';
  } else if (score > 100) {
    result = 'Invalid score';
  } else if (score >= 95) {
    result = 'Excellent';
  } else if (score >= 85) {
    result = 'Very Good';
  } else if (score >= 75) {
    result = 'Passing';
  } else {
    result = 'Failing';
  }

  return result;
}

const tests = [-5, 0, 74, 75, 84, 85, 94, 95, 100, 120, NaN, 'abc', null];

for (let i = 0; i < tests.length; i++) {
  const currentScore = tests[i];
  const grade = assessGrade(currentScore);
  const label = String(currentScore).padStart(4);

  console.log('Score ' + label + ' -> ' + grade);
}