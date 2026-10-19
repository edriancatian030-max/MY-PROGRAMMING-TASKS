/**
 *
 * Name: Catian Edrian B.
 * Course: BS Information Technology
 * Created date: October 02, 2026
 *
 */

console.log(5 == '5');
console.log(5 === '5');
console.log(null == undefined);
console.log(null === undefined);
console.log(NaN === NaN);

console.log(Boolean(''));
console.log(Boolean('0'));
console.log(Boolean([]));

let nickname = '';
console.log(nickname || 'opaw'); 
console.log(nickname ?? 'Guest');

const score = 78;
console.log(score >= 75 ? 'PASSED' : 'FAILED');

const account = {
  username: 'dalagan',
  password: 'dalagan gwapo69',
  age: 19,
  status: 'active'
};

function validate(data) {
  const errors = [];

  if (!data.username || data.username.length < 4) {
    errors.push('Username must be at least 4 characters');
  }

  const strongPassword =
    data.password.length >= 8 &&
    /[0-9]/.test(data.password) &&
    /[A-Z]/.test(data.password);

  if (!strongPassword) {
    errors.push('Password needs 8+ characters, a digit and an uppercase letter');
  }

  if (!Number.isInteger(data.age) || data.age < 18) {
    errors.push('Age must be a whole number, 18 or older');
  }

  if (data.status !== 'active') {
    errors.push('Account is not active');
  }

  return errors;
}

const result = validate(account);
console.log(result.length === 0 ? 'Account is valid' : result);

const badAccount = { username: 'js', password: 'abc', age: 16, status: 'locked' };
const badResult = validate(badAccount);
badResult.forEach((e) => console.log('- ' + e));