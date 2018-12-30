const reverseInt = require('../algo/reverseInt');

describe('Test reverseint.js', () => {

  test('reverseInt function exists', () => {
    expect(reverseInt).toBeDefined();
  });

  test('reverseInt handles 0 as an input', () => {
    expect(reverseInt(0)).toBe(0);
  });

  test('Reverse a positive number successfully', () => { 
    expect(reverseInt(5)).toBe(5);
    expect(reverseInt(500)).toBe(5);
    expect(reverseInt(2834)).toBe(4382); 
  });

  test('Reverse a negative number successfully', () => { 
    expect(reverseInt(-6)).toBe(-6);
    expect(reverseInt(-2834)).toBe(-4382);
    expect(reverseInt(-600)).toBe(-6);
  });
})