// Queue
// Create a queue data structure
// The queue should be a class with methods 'add' and 'remove'
// Example:
// const q = new Queue();
// q.add(1);
// q.remove();  // returns 1

class Queue {
  constructor() {
    this.queue = [];
  }

  add(data) {
    this.queue.unshift(data);
  }

  remove() {
    return this.queue.pop();
  }

  // 'peek' method is to return the next element to be returned from the queue (without removing it)
  peek() {
    return this.queue[this.queue.length-1];
  }
}

module.exports = Queue;