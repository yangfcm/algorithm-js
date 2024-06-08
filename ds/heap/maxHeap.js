/**
 * @name MaxHeap
 * @description Implement a max heap class and its relevant methods:
 * 1. insert - Insert an element to a heap.
 * 2. print - Return all the elements in the heap.
 * 3. remove - Remove the largest element from the heap and reorder it.
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
      const parentIndex = this._parent(currentIndex);
      if (this.heap[currentIndex] > this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  _parent(i) {
    return Math.floor((i - 1) / 2);
  }
}

module.exports = { MaxHeap };
