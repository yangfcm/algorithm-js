/**
 * Queue
 * Quere is a data structure with elements First-In-First-Out
 * Create a queue data structure
 * The queue should be a class with methods 'add' and 'remove'
 * Example:
 * const q = new Queue();
 * q.add(1);
 * q.remove();  // returns 1
 */

class Queue {
  constructor() {
    this.queue = [];
  }

  /** Add an element to a queue */
  add(data) {
    this.queue.unshift(data);
  }

  /** Remove an element from the queue */
  remove() {
    return this.queue.pop();
  }

  /**
   * return the next element in the queue that is going to be returned next time (without removing it)
   */
  peek() {
    return this.queue[this.queue.length - 1];
  }

  /** Test if the queue is empty */
  isEmpty() {
    return this.queue.length === 0;
  }
}

module.exports = Queue;
