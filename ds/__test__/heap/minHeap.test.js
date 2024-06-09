const { MinHeap } = require('../../heap/minHeap');

describe('Test minHeap.js', () => {
  let heap;

  beforeEach(() => {
    heap = new MinHeap();
    heap.insert(9);
    heap.insert(5);
    heap.insert(12);
    heap.insert(15);
    heap.insert(3);
    heap.insert(22);
    heap.insert(7);
    heap.insert(6);
    heap.insert(20);
  });

  test('Should print the elements in minHeap', () => {
    expect(heap.print()).toEqual([3, 5, 7, 6, 9, 22, 12, 15, 20]);
  });

  test('Should insert a number to minHeap', () => {
    heap.insert(10);
    expect(heap.print()).toEqual([3, 5, 7, 6, 9, 22, 12, 15, 20, 10]);

    heap.insert(4);
    expect(heap.print()).toEqual([3, 4, 7, 6, 5, 22, 12, 15, 20, 10, 9]);

    heap.insert(1);
    expect(heap.print()).toEqual([1, 4, 3, 6, 5, 7, 12, 15, 20, 10, 9, 22]);
  });

  test('Should remove a number from minHeap', () => {
    expect(heap.remove()).toBe(3);
    expect(heap.print()).toEqual([5, 6, 7, 15, 9, 22, 12, 20]);
  });

  test('Should return a sorted array', () => {
    const sorted = heap.sort();
    expect(sorted).toEqual([3, 5, 6, 7, 9, 12, 15, 20, 22]);
  });
});
