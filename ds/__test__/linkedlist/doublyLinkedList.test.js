const { DoublyLinkedList, Node } = require("../../linkedlist/doublyLinkedList");

describe("Test doublyLinkedList.js", () => {
  let dll;

  beforeEach(() => {
    dll = new DoublyLinkedList();
    dll.append(1);
    dll.append(5);
    dll.append(10);
    dll.append(100);
  });

  test("Should get all the elements of the linked list", () => {
    expect(dll.getAll()).toEqual([1, 5, 10, 100]);
  });

  test("Should get the size of the linked list", () => {
    expect(dll.size()).toBe(4);
  });

  test("Should be able to append data to the linked list", () => {
    dll.append(101);
    expect(dll.size()).toBe(5);
    expect(dll.getAll()).toEqual([1, 5, 10, 100, 101]);
  });

  test("Should be able to remove data from linked list.", () => {
    expect(dll.remove(10)).toBe(10);
    expect(dll.size()).toBe(3);
    expect(dll.getAll()).toEqual([1, 5, 100]);

    expect(dll.remove(100)).toBe(100);
    expect(dll.size()).toBe(2);
    expect(dll.getAll()).toEqual([1, 5]);

    expect(dll.remove(1)).toBe(1);
    expect(dll.size()).toBe(1);
    expect(dll.getAll()).toEqual([5]);

    expect(dll.remove(5)).toBe(5);
    expect(dll.size()).toBe(0);
    expect(dll.getAll()).toEqual([]);

    // Attempt to remove a non-existent element.
    expect(dll.remove(9)).toBe(undefined);
  });

  test("Should reverse a doubly linked list", () => {
    dll.reverse();
    expect(dll.getAll()).toEqual([100, 10, 5, 1]);
  });
});
