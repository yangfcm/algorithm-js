const { Stack, StackWithMin } = require("../../stack_queue/getMin");
describe("Test two solutions for min number in stack", () => {
  describe("Test getMin method in Stack", () => {
    let stack = new Stack();
    beforeEach(() => {
      stack.push(3);
      stack.push(9);
      stack.push(7);
      stack.push(-3);
      stack.push(0);
      stack.push(22);
    });

    afterEach(() => {
      stack = new Stack();
    });

    test("stack is defined", () => {
      expect(Stack).toBeDefined();
    });

    test("getMin method is defined", () => {
      expect(stack.getMin).toBeDefined();
    });

    test("getMin should return the minimum number from stack", () => {
      expect(stack.getMin()).toBe(-3);
      expect(stack.peek()).toBe(22); // Make sure the stack is intact.
    });
  });

  describe("Test StackWithMin class", () => {
    let stack = new StackWithMin();
    beforeEach(() => {
      stack.push(3);
      stack.push(9);
      stack.push(7);
      stack.push(-3);
      stack.push(0);
      stack.push(22);
    });
    afterEach(() => {
      stack = new StackWithMin();
    });

    test("StackWithMin class is defined", () => {
      expect(StackWithMin).toBeDefined();
    });

    test("StackWithMin", () => {
      expect(stack.minNum).toBe(-3);
    });
  });
});
