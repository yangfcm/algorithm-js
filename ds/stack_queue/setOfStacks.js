/**
 * @name SetOfStacks
 * @description Imagine a (literal) stack of plates. If the stack goes too high, it might topple.
 * Therefore, in real life, we would start a new stack when the previous stack exceeds a threshold.
 * Implement a data structure SetOfStacks to mimic this.
 * SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
 * Also implement a function popAt(index) to perform pop operation on a specific sub-stack.
 * Think about the sub-stack is not at full capacity when pop an element from it.
 */
class SetOfStacks {
  constructor(capacity) {
    if (typeof capacity !== "number") {
      throw new Error("Must use a number to initialize a set of stacks");
    }
    this.capacity = capacity;
    this.stacks = [];
  }

  push(data) {
    if (this.stacks.length === 0) {
      this.stacks.push([]);
    }
    const lastSubStack = this.stacks[this.stacks.length - 1];
    if (lastSubStack.length >= this.capacity) {
      this.stacks.push([data]);
    } else {
      lastSubStack.push(data);
    }
  }

  pop() {
    if (this.stacks.length === 0) {
      return;
    }
    const lastSubStack = this.stacks[this.stacks.length - 1];
    const popedEl = lastSubStack.pop();
    if (lastSubStack.length === 0) {
      this.stacks.pop();
    }
    return popedEl;
  }

  /**
   * This is a bit trickier to implement, but we can imagine a "rollover" system. If we pop an element from stack
   * 1, we need to remove the bottom of stack 2 and push it onto stack 1. We then need to rollover from stack 3
   * to stack 2, stack 4 to stack 3, etc.
   * You could make an argument that, rather than "rolling over;' we should be okay with some stacks not
   * being at full capacity. This would improve the time complexity (by a fair amount, with a large number of
   * elements), but it might get us into tricky situations later on if someone assumes that all stacks (other than
   * the last) operate at full capacity. There's no "right answer" here; you should discuss this trade-off with your interviewer.
   * In my implementation, the sub-stack will be removed only when it gets empty.
   */
  popAt(index) {
    if (typeof index !== "number") {
      throw new Error("Index must be a number");
    }
    if (this.stacks.length < index) {
      return;
    }
    const subStack = this.stacks[index];
    const popedEl = subStack.pop();
    if (subStack.length === 0) {
      this.stacks.splice(index, 1);
    }
    return popedEl;
  }
}

module.exports = SetOfStacks;
