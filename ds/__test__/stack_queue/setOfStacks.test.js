const SetOfStacks = require("../../stack_queue/setOfStacks");

describe("Test SetOfStacks class", () => {
  let stacks;
  beforeEach(() => {
    stacks = new SetOfStacks(4);
    stacks.push(1);
    stacks.push(2);
    stacks.push(3);
    stacks.push(4);
    stacks.push(5);
    stacks.push(6);
    stacks.push(7);
    stacks.push(8);
    stacks.push(9);
  });

  it("class should be defined", () => {
    expect(SetOfStacks).toBeDefined();
  });

  it("Elements should have correct order and value", () => {
    expect(stacks.pop()).toBe(9);
    expect(stacks.pop()).toBe(8);
    expect(stacks.pop()).toBe(7);
    expect(stacks.pop()).toBe(6);
    expect(stacks.pop()).toBe(5);
    expect(stacks.pop()).toBe(4);
    expect(stacks.pop()).toBe(3);
    expect(stacks.pop()).toBe(2);
    expect(stacks.pop()).toBe(1);
  });

  it("Can pop an element at a given sub-stack", () => {
    expect(stacks.popAt(0)).toBe(4);
    expect(stacks.popAt(0)).toBe(3);
    expect(stacks.popAt(0)).toBe(2);
    expect(stacks.popAt(0)).toBe(1);
    expect(stacks.popAt(0)).toBe(8);
  });
});
