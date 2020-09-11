const { Node, LinkedList } = require("../../linkedlist/partition");

describe("Test partition method in LinkedList", () => {
  let ll = new LinkedList();
  test("List is defined", () => {
    expect(LinkedList).toBeDefined();
  });

  test("Node is defined", () => {
    expect(Node).toBeDefined();
  });

  beforeEach(() => {
    ll.insertLast(3);
    ll.insertLast(5);
    ll.insertLast(8);
    ll.insertLast(10);
    ll.insertLast(2);
    ll.insertLast(1);
    ll.insertLast(9);
  });

  afterEach(() => {
    ll.clear();
  });

  test("should have correct partition for partition number 5", () => {
    const partitionL = ll.partition(5);
    expect(partitionL.getAt(0).data).toBe(1);
    expect(partitionL.getAt(1).data).toBe(2);
    expect(partitionL.getAt(2).data).toBe(3);
    expect(partitionL.getAt(3).data).toBe(5);
    expect(partitionL.getAt(4).data).toBe(8);
    expect(partitionL.getAt(5).data).toBe(10);
    expect(partitionL.getAt(6).data).toBe(9);
  });

  test("should have correct partition for partition number 2", () => {
    const partitionL = ll.partition(2);
    expect(partitionL.getAt(0).data).toBe(1);
    expect(partitionL.getAt(1).data).toBe(3);
    expect(partitionL.getAt(2).data).toBe(5);
    expect(partitionL.getAt(3).data).toBe(8);
    expect(partitionL.getAt(4).data).toBe(10);
    expect(partitionL.getAt(5).data).toBe(2);
    expect(partitionL.getAt(6).data).toBe(9);
  });

  test("should have correct partition for partition number 10", () => {
    const partitionL = ll.partition(10);
    expect(partitionL.getAt(0).data).toBe(9);
    expect(partitionL.getAt(1).data).toBe(1);
    expect(partitionL.getAt(2).data).toBe(2);
    expect(partitionL.getAt(3).data).toBe(8);
    expect(partitionL.getAt(4).data).toBe(5);
    expect(partitionL.getAt(5).data).toBe(3);
    expect(partitionL.getAt(6).data).toBe(10);
  });
});
