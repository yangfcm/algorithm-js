const { LinkedList, Node } = require("../../linkedlist/linkedlist");
const { sumLists, sumListNodes } = require("../../linkedlist/sumLists");

describe("Test sumLists", () => {
  let list1 = new LinkedList();
  let list2 = new LinkedList();
  test("sumLists functions should be defined", () => {
    expect(sumLists).toBeDefined();
  });

  test("sumLists should return correct sum linked list - case 1", () => {
    list1.clear();
    list2.clear();
    list1.insertLast(7);
    list1.insertLast(1);
    list1.insertLast(6);
    list2.insertLast(5);
    list2.insertLast(9);
    list2.insertLast(2);
    const sumList = sumLists(list1, list2);
    expect(sumList.getAt(0).data).toBe(2);
    expect(sumList.getAt(1).data).toBe(1);
    expect(sumList.getAt(2).data).toBe(9);
  });

  test("sumLists should return correct sum linked list - case 2", () => {
    list1.clear();
    list2.clear();
    list1.insertLast(9);
    list1.insertLast(9);
    list1.insertLast(9);
    list1.insertLast(9);
    list2.insertLast(1);
    const sumList = sumLists(list1, list2);
    expect(sumList.getAt(0).data).toBe(0);
    expect(sumList.getAt(1).data).toBe(0);
    expect(sumList.getAt(2).data).toBe(0);
    expect(sumList.getAt(3).data).toBe(0);
    expect(sumList.getAt(4).data).toBe(1);
  });

  test("sumLists should return correct sum linked list - case 3", () => {
    list1.clear();
    list2.clear();
    list1.insertLast(9);
    list1.insertLast(8);
    list2.insertLast(9);
    list2.insertLast(9);
    list2.insertLast(9);
    const sumList = sumLists(list1, list2);
    expect(sumList.getAt(0).data).toBe(8);
    expect(sumList.getAt(1).data).toBe(8);
    expect(sumList.getAt(2).data).toBe(0);
    expect(sumList.getAt(3).data).toBe(1);
  });
});

describe("Test sumListNodes", () => {
  test("sumListNodes should return correct sum linked list - case 1", () => {
    // node1 = 7 -> 1 -> 6
    // node2 = 5 -> 9 -> 2
    // sum   = 2 -> 1 -> 9
    const node1 = new Node(7);
    node1.next = new Node(1);
    node1.next.next = new Node(6);

    const node2 = new Node(5);
    node2.next = new Node(9);
    node2.next.next = new Node(2);
    const sum = sumListNodes(node1, node2);
    expect(sum.data).toBe(2);
    expect(sum.next.data).toBe(1);
    expect(sum.next.next.data).toBe(9);
    expect(sum.next.next.next).toBeFalsy();
  });

  test("sumListNodes should return correct sum linked list - case 2", () => {
    // node1 = 9 -> 9 -> 9 -> 9
    // node2 = 1
    // sum   = 0 -> 0 -> 0 -> 0 -> 1
    const node1 = new Node(9);
    node1.next = new Node(9);
    node1.next.next = new Node(9);
    node1.next.next.next = new Node(9);

    const node2 = new Node(1);
    const sum = sumListNodes(node1, node2);
    expect(sum.data).toBe(0);
    expect(sum.next.data).toBe(0);
    expect(sum.next.next.data).toBe(0);
    expect(sum.next.next.next.data).toBe(0);
    expect(sum.next.next.next.next.data).toBe(1);
    expect(sum.next.next.next.next.next).toBeFalsy();
  });

  test("sumListNodes should return correct sum linked list - case 3", () => {
    // node1 = 9 -> 8
    // node2 = 9 -> 9 -> 9
    // sum   = 8 -> 8 -> 0 -> 1
    const node1 = new Node(9);
    node1.next = new Node(8);

    const node2 = new Node(9);
    node2.next = new Node(9);
    node2.next.next = new Node(9);

    const sum = sumListNodes(node1, node2);

    expect(sum.data).toBe(8);
    expect(sum.next.data).toBe(8);
    expect(sum.next.next.data).toBe(0);
    expect(sum.next.next.next.data).toBe(1);
    expect(sum.next.next.next.next).toBeFalsy();
  });
});
