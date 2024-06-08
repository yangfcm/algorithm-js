const { MaxHeap } = require('../../heap/maxHeap');

describe('Test maxHeap.js', () => {
  let heap = new MaxHeap();

  beforeEach(() => {
    heap = new MaxHeap();
    heap.insert(50);
    heap.insert(20);
    heap.insert(30);
    heap.insert(40);
    heap.insert(60);
    heap.insert(15);
    heap.insert(35);
  });

  test('Should print the elements in maxHeap', () => {
    expect(heap.print()).toEqual([60, 50, 35, 20, 40, 15, 30]);
  });

  test('Should insert and print maxHeap', () => {
    const testHeap = new MaxHeap();

    testHeap.insert(50);
    expect(testHeap.print()).toEqual([50]);

    testHeap.insert(30);
    expect(testHeap.print()).toEqual([50, 30]);

    testHeap.insert(40);
    expect(testHeap.print()).toEqual([50, 30, 40]);

    testHeap.insert(25);
    expect(testHeap.print()).toEqual([50, 30, 40, 25]);

    testHeap.insert(60);
    expect(testHeap.print()).toEqual([60, 50, 40, 25, 30]);

    testHeap.insert(55);
    expect(testHeap.print()).toEqual([60, 50, 55, 25, 30, 40]);

    testHeap.insert(45);
    expect(testHeap.print()).toEqual([60, 50, 55, 25, 30, 40, 45]);
  });

  test('Should remove and return the max value from maxHeap', () => {
    const removed = heap.remove();
    expect(removed).toBe(60);
    expect(heap.print()).toEqual([50, 40, 35, 20, 30, 15]);
  });
});
