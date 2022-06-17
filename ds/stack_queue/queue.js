/**
 * @name queue
 * @description Quere is a data structure with elements First-In-First-Out
 * Create a Queue data structure
 * The queue should be a class with methods 'add', 'remove', and 'peek'
 * @example const q = new Queue();
 * q.add(1);
 * q.add(2);
 * q.remove();  // returns 1
 * q.remove();  // returns 2
 */
class Queue {
  constructor() {
    this.queue = [];
  }

  /**
   * @name add
   * @description Add an element to a queue
   * @param {any} data
   * @returns {undefined}
   */
  add(data) {
    this.queue.unshift(data);
  }

  /**
   * @name remove
   * @description Remove an element from the queue
   * @returns {any} The data removed from queue.
   * */
  remove() {
    return this.queue.pop();
  }

  /**
   * @name peek
   * @description Return the next element in the queue that is going to be returned next time (without removing it)
   * @returns {any}
   */
  peek() {
    return this.queue[this.queue.length - 1];
  }

  /**
   * @name isEmpty
   * @description Test if the queue is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.queue.length === 0;
  }
}

module.exports = Queue;
