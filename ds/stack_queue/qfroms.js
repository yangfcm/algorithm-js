/*
 * Implement a queue data structure using two stacks instead of using array.
 * Queue should implement the methods of 'add', 'remove' and 'peek'
 * --- Examples
 *     const q = new Queue();
 *     q.add(1);
 *     q.add(2);
 *     q.peek();  // returns 1
 *     q.remove(); // returns 1
 *     q.remove(); // returns 2
 */

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(data) {
    this.stack1.push(data);
  }

  remove() {
    while (this.stack1.peek()) {
      // Move all the elements in stack1 to stack2
      const data = this.stack1.pop();
      this.stack2.push(data);
    }
    // Then, the top element in stack2 is exactly the one to remove for the queue
    // So just remove it.
    const dataToRemove = this.stack2.pop();
    while (this.stack2.peek()) {
      // Move the rest elements in stack2 back to stack1 for next remove()
      const data = this.stack2.pop();
      this.stack1.push(data);
    }
    return dataToRemove;
  }

  peek() {
    while (this.stack1.peek()) {
      // Move all the elements in stack1 to stack2
      const data = this.stack1.pop();
      this.stack2.push(data);
    }
    // Then, the top element in stack2 is exactly the one to remove for the queue
    // So just peek it.
    const dataToPeek = this.stack2.peek();
    while (this.stack2.peek()) {
      // Move the rest elements in stack2 back to stack1 for next peek()
      const data = this.stack2.pop();
      this.stack1.push(data);
    }
    return dataToPeek;
  }
}

module.exports = Queue;
