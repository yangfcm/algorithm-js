const fromLast = require("../../linkedlist/fromlast");
const L = require("../../linkedlist/linkedlist");
const List = L.LinkedList;
const Node = L.Node;

describe("test fromlast.js", () => {
  test("fromLast function is defined", () => {
    expect(fromLast).toBeDefined();
  });

  test("fromLast returns the node n elements from the end", () => {
    const l = new List();

    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    l.insertLast("d");
    l.insertLast("e");

    expect(fromLast(l, 0).data).toBe("e");
    expect(fromLast(l, 1).data).toBe("d");
    expect(fromLast(l, 2).data).toBe("c");
    expect(fromLast(l, 3).data).toBe("b");
    expect(fromLast(l, 4).data).toBe("a");
    expect(fromLast(l, 5)).toBe(null);
  });
});
