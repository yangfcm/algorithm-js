/*
 * Stack: A data structure with Last-In-First-Out
 * Create a stack data structure
 * The stack should be a class with methods 'add' and 'remove'
 * Example:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop();  // returns 2
 * s.pop();  // returns 1
 */

class Stack {
  constructor() {
    this.stack = [];
  }

  /** Add an item to stack */
  push(data) {
    this.stack.push(data);
  }

  /** Remove the top item from the stack */
  pop() {
    return this.stack.pop();
  }

  /** Return the top item in the stack */
  peek() {
    return this.stack[this.stack.length - 1];
  }

  /** Test if the stack is empty */
  isEmpty() {
    return this.stack.length === 0;
  }
}

module.exports = Stack;
