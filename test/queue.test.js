const Queue = require('../ds/queue');

describe('Test queue.js', () => {
  test('Queue class is defined', () => {
    expect(Queue).toBeDefined();
  });

  test('can add elements to a queue', () => {
    const q = new Queue();
    expect(() => {
      q.add(1);
    }).not.toThrow();
  });
  
  test('can remove elements from a queue', () => {
    const q = new Queue();
    expect(() => {
      q.add(1);
      q.remove();
    }).not.toThrow();
  });
  
  test('Order of elements is maintained', () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    expect(q.remove()).toEqual(undefined);
  });
});