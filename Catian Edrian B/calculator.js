/**
 *
 * Name: Catian Edrian B.
 * Course: BS Information Technology
 * Created date: October 02, 2026
 *
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

function calculate(a, operator, b) {
  let result;

  if (typeof a !== 'number') {
    result = 'Error: both values must be numbers';
  } else if (typeof b !== 'number') {
    result = 'Error: both values must be numbers';
  } else if (operator === '+') {
    result = add(a, b);
  } else if (operator === '-') {
    result = subtract(a, b);
  } else if (operator === '*') {
    result = multiply(a, b);
  } else if (operator === '/') {
    if (b === 0) {
      result = 'Error: cannot divide by zero';
    } else {
      result = divide(a, b);
    }
  } else if (operator === '%') {
    if (b === 0) {
      result = 'Error: cannot divide by zero';
    } else {
      result = modulus(a, b);
    }
  } else if (operator === '**') {
    result = power(a, b);
  } else {
    result = 'Error: unknown operator "' + operator + '"';
  }

  return result;
}

console.log('10 + 10 =', calculate(10, '+', 10));
console.log('200 - 50 =', calculate(200, '-', 50));
console.log('10 * 10 =', calculate(10, '*', 10));
console.log('40 / 4 =', calculate(40, '/', 4));
console.log('60 % 4 =', calculate(60, '%', 4));
console.log('3 * 8 =', calculate(3, '*', 8));
console.log('67 / 0 =', calculate(67, '/', 0));
console.log('5 % 0 =', calculate(5, '%', 0));
console.log('5 & 2 =', calculate(5, '&', 2));
console.log("'5' + 2 =", calculate('5', '+', 2));