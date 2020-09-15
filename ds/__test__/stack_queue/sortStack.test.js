const { Stack } = require("../../stack_queue/getMin");
const sortStack = require("../../stack_queue/sortStack");

describe("Test sortStack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
    stack.push(10);
    stack.push(5);
    stack.push(7);
    stack.push(12);
    stack.push(-2);
    stack.push(0);
  });

  it("sortStack should be defined", () => {
    expect(sortStack).toBeDefined();
  });

  it("sortStack should sort the stack", () => {
    sortStack(stack);
    expect(stack.pop()).toBe(-2);
    expect(stack.pop()).toBe(0);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(7);
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBe(12);
  });
});
