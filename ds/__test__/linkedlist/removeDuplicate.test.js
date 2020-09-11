const { Node, LinkedList } = require("../../linkedlist/removeDuplicate");

describe("Test removeDuplicate method in LinkedList", () => {
  let ll = new LinkedList();
  test("List is defined", () => {
    expect(LinkedList).toBeDefined();
  });

  test("Node is defined", () => {
    expect(Node).toBeDefined();
  });

  beforeEach(() => {
    ll.insertLast("a");
    ll.insertLast("b");
    ll.insertLast("b");
    ll.insertLast("b");
    ll.insertLast("c");
    ll.insertLast("c");
    ll.insertLast("d");
    ll.insertLast("d");
    ll.insertLast("d");
    ll.insertLast("d");
    ll.insertLast("b");
    ll.insertLast("c");
  });

  afterEach(() => {
    ll.clear();
  });

  test("should have correct length in the beginning", () => {
    expect(ll.size()).toBe(12);
  });

  test("should remove duplicate nodes", () => {
    ll.removeDuplicate();
    expect(ll.size()).toBe(4);
    expect(ll.getAt(0).data).toBe("a");
    expect(ll.getAt(1).data).toBe("b");
    expect(ll.getAt(2).data).toBe("c");
    expect(ll.getAt(3).data).toBe("d");
  });
});
