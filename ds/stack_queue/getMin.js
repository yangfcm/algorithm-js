const Stack = require("./stack");

/**
 * @name getMin
 * @description Add a method to Stack, which returns the minimum element.
 * (All elements in stack are number)
 * @returns {number}
 * @solution Use a temporary stack to save the items in original stack and compare each number.
 * The runtime for this solution is O(n) - n is the size of stack.
 */
Stack.prototype.getMin = function () {
  if (this.isEmpty()) {
    throw new Error("Stack is empty");
  }
  const stackTmp = new Stack();
  let min = this.peek();
  while (!this.isEmpty()) {
    const currentItem = this.peek();
    if (typeof currentItem !== "number") {
      throw new Error("Item must be a number");
    }
    if (currentItem < min) {
      min = currentItem;
    }
    stackTmp.push(this.pop());
  }
  while (!stackTmp.isEmpty()) {
    this.push(stackTmp.pop());
  }
  return min;
};

/**
 * @returns {number}
 * @solution Add a property minNum to Stack class and check if it is the minimum one when adding number to the stack.
 * The runtime for this solution is O(1)
 */
class StackWithMin extends Stack {
  constructor() {
    super();
    this.minNum = Number.MAX_VALUE;
  }

  push(data) {
    if (typeof data === "number" && data < this.minNum) {
      this.minNum = data;
    }
    return this.stack.push(data);
  }
}

module.exports = { Stack, StackWithMin };
