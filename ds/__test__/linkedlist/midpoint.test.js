const midpoint = require("../../linkedlist/midpoint");
const L = require("../../linkedlist/linkedlist");
const Node = L.Node;
const LinkedList = L.LinkedList;

describe("Test midpoint.js", () => {
  test("midpoint function is defined", () => {
    expect(midpoint).toBeDefined();
  });

  test("midpoint returns null if linked list is empty", () => {
    expect(midpoint(new LinkedList())).toBe(null);
  });
});

describe("Midpoint returns the middle node of an odd numbered list", () => {
  test("when the list has 3 elements", () => {
    const l = new LinkedList();
    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    expect(midpoint(l).data).toEqual("b");
  });

  test("when the list has 5 elements", () => {
    const l = new LinkedList();
    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    l.insertLast("d");
    l.insertLast("e");
    expect(midpoint(l).data).toEqual("c");
  });
});

describe("Midpoint returns the middle node of an even numbered list", () => {
  test("when the list has 2 elements", () => {
    const l = new LinkedList();
    l.insertLast("a");
    l.insertLast("b");
    expect(midpoint(l).data).toEqual("a");
  });

  test("when the list has 4 elements", () => {
    const l = new LinkedList();
    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    l.insertLast("d");
    expect(midpoint(l).data).toEqual("b");
  });
});
