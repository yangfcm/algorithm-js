/**
 * @name stack
 * @description Stack is a data structure with elements Last-In-First-Out
 * Create a stack data structure
 * The stack should be a class with methods 'add', 'remove' and 'peek'
 * @example const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop();  // returns 2
 * s.pop();  // returns 1
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  /**
   * @name push
   * @description Add an item to stack.
   * @param {any} data
   */
  push(data) {
    this.stack.push(data);
  }

  /**
   * @name pop
   * @description Remove the top item from the stack.
   * @returns {any} The data removed from stack.
   * */
  pop() {
    return this.stack.pop();
  }

  /**
   * @name peek
   * @description Return the top item in the stack.
   * @returns {any}
   * */
  peek() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @name isEmpty
   * @description Test if the stack is empty.
   * @returns {boolean}
   * */
  isEmpty() {
    return this.stack.length === 0;
  }
}

module.exports = Stack;
