/**
 * @name MinHeap
 * @description Implement a min heap class and its relevant methods:
 * 1. insert - Insert a number to min heap.
 * 2. remove - Remove the smallest number and return it from min heap.
 * 3. sort - Return an array of all the elements in the min heap sorted from smallest to largest.
 * @source https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/insert-an-element-into-a-max-heap
 */
class MinHeap {
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
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  remove() {
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapify(0);
    return min;
  }

  sort() {
    const sorted = [];
    while (this._size() > 1) {
      sorted.push(this.remove());
    }
    if (this._size() > 0) {
      sorted.push(this.remove());
    }
    return sorted;
  }

  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  _lChild(i) {
    return 2 * i + 1;
  }

  _rChild(i) {
    return 2 * i + 2;
  }

  _size() {
    return this.heap.length;
  }

  _heapify(i) {
    const l = this._lChild(i);
    const r = this._rChild(i);
    let smallest = i;
    if (l < this._size() && this.heap[l] < this.heap[i]) {
      smallest = l;
    }
    if (r < this._size() && this.heap[r] < this.heap[smallest]) {
      smallest = r;
    }

    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this._heapify(smallest);
    }
  }
}

module.exports = { MinHeap };
