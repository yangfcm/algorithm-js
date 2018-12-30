const isPalindrome = require('../algo/palindrome');

describe('Test palindrome.js', () => {

  test('isPalindrome function exists', () => {
    expect(isPalindrome).toBeDefined();
  });

  test('"cars" is not a palindrome', () => {
    expect(isPalindrome('cars')).toBe(false);
  })

  test('"racecar" is a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('"  racecar" is not a palindrome', () => {
    expect(isPalindrome('  racecar')).toBe(false);
  });
})
