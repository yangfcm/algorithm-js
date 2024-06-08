/**
 * @name MaxHeap
 * @description Implement a max heap class and its relevant methods:
 * 1. insert - Insert an element to a heap.
 * 2. print - Return all the elements in the heap.
 * @source https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/insert-an-element-into-a-max-heap
 */
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  print() {
    return this.heap;
  }

  insert(num) {
    this.heap.push(num);
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] > this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }
}

module.exports = { MaxHeap };
