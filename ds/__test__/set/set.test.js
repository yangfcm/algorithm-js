const Set = require("../../set/set");

describe("Test Set class", () => {
  let set;
  beforeEach(() => {
    set = new Set();
    set.add("a");
    set.add("b");
    set.add("c");
  });

  test("Should return correct values of set", () => {
    expect(set.values()).toEqual(["a", "b", "c"]);
  });

  test("Should return correct number of items in the set", () => {
    expect(set.size()).toEqual(3);
  });

  test("Should check the availability of a given element", () => {
    expect(set.has("a")).toBe(true);
    expect(set.has("b")).toBe(true);
    expect(set.has("c")).toBe(true);
    expect(set.has("d")).toBe(false);
  });

  test("Should be able to add an element to set", () => {
    expect(set.add("d")).toBe(true);
    expect(set.has("d")).toBe(true);
    expect(set.size()).toBe(4);
  });

  test("Should be not able to add a duplicated element", () => {
    expect(set.add("c")).toBe(false);
    expect(set.size()).toBe(3);
  });

  test("Should be able to remove an element from set", () => {
    expect(set.remove("c")).toBe(true);
    expect(set.has("c")).toBe(false);
    expect(set.size()).toBe(2);
  });

  test("Should be not able to remove a non-existent element", () => {
    expect(set.remove("d")).toBe(false);
    expect(set.size()).toBe(3);
  });
});
