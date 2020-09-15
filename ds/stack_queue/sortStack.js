/**
 * Sort a stack such that the smallest item are on the top.
 * You can use an additional temporary stack, but you cannot copy the elements into any other data structure, such as array.
 */
const Stack = require("./stack");

const sortStack = (stack) => {
  const sortedStack = new Stack();
  const tempStack = new Stack();
  while (!stack.isEmpty()) {
    const currentEl = stack.pop();
    if (typeof currentEl !== "number") {
      throw new Error("All items in stack must be a number");
    }
    if (sortedStack.isEmpty()) {
      sortedStack.push(currentEl);
    } else {
      while (!sortedStack.isEmpty() && sortedStack.peek() > currentEl) {
        stack.push(sortedStack.pop());
      }
      sortedStack.push(currentEl);
    }
  }
  while (!sortedStack.isEmpty()) {
    stack.push(sortedStack.pop());
  }
};

module.exports = sortStack;
