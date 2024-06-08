/**
 * @name MaxHeap
 * @description Implement a max heap class and its relevant methods:
 * 1. insert - Insert an element to a heap.
 * 2. print - Return all the elements in the heap.
 * 3. remove - Remove the largest element from the heap (the first element) and return it.
 * It should also reorder the heap so the heap propperty is maintained.
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

  remove() {
    const max = this.heap[0];
    const last = this.heap.pop();
    this.heap[0] = last;
    this._heapify(0);
    return max;
  }

  // Get the index of the parent of the element at i-th index.
  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // Get the index of the left child of the element at i-th index.
  _lChild(i) {
    return 2 * i + 1;
  }

  // Get the index of the right child of the element at i-th index.
  _rChild(i) {
    return 2 * i + 2;
  }

  _size() {
    return this.heap.length;
  }

  // _heapify, re-order the maxHeap from the given index.
  _heapify(i) {
    const l = this._lChild(i);
    const r = this._rChild(i);
    let largest = i;
    if (l < this._size() && this.heap[l] > this.heap[i]) {
      largest = l;
    }
    if (r < this._size() && this.heap[r] > this.heap[largest]) {
      largest = r;
    }

    if (largest !== i) {
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      this._heapify(largest);
    }
  }
}

module.exports = { MaxHeap };
