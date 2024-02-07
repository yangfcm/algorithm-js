const Set = require("../../set/set");

describe("Test Set class", () => {
  let set;
  let anotherSet;
  let superSet;
  beforeEach(() => {
    set = new Set();
    set.add("a");
    set.add("b");
    set.add("c");

    anotherSet = new Set();
    anotherSet.add("a");
    anotherSet.add("c");
    anotherSet.add("x");
    anotherSet.add("y");

    superSet = new Set();
    superSet.add("a");
    superSet.add("b");
    superSet.add("c");
    superSet.add("d");
    superSet.add("e");
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

  test("Should be able to union another set", () => {
    const unionedSet = set.union(anotherSet);
    expect(unionedSet.size()).toBe(5);
    expect(unionedSet.values()).toContain("a");
    expect(unionedSet.values()).toContain("b");
    expect(unionedSet.values()).toContain("c");
    expect(unionedSet.values()).toContain("x");
    expect(unionedSet.values()).toContain("y");
  });

  test("Should be able to intersection another set", () => {
    const intersectSet = set.intersection(anotherSet);
    expect(intersectSet.size()).toBe(2);
    expect(intersectSet.values()).toContain("a");
    expect(intersectSet.values()).toContain("c");
  });

  test("Should be able to do difference with another set", () => {
    const diffSet = set.difference(anotherSet);
    expect(diffSet.size()).toBe(1);
    expect(diffSet.values()).toContain("b");
  });

  test("Should check one set is the subset of another set", () => {
    expect(set.isSubsetOf(anotherSet)).toBe(false);
    expect(set.isSubsetOf(superSet)).toBe(true);
  });
});
