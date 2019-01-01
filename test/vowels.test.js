const vowels = require('../algo/vowels');

describe('Test vowels.js', () => {
  test('vowels function is defined', () => {
    expect(vowels).toBeDefined();
  });

  test('returns the number of vowels used', () => {
    expect(vowels('aeiou')).toEqual(5);
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels('bcdfghjkl')).toEqual(0);
  });

  test('returns the number of vowels used', () => {
    expect(vowels('I like to eat cheese.')).toEqual(9);
  });
});