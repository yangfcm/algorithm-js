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

  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = Stack;
