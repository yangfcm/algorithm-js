const { LinkedList } = require("../../linkedlist/linkedlist");
const { sumListsRev, sumListsFwd } = require("../../linkedlist/sumLists");

describe("Test sumLists", () => {
  let list1 = new LinkedList();
  let list2 = new LinkedList();
  test("sumLists functions should be defined", () => {
    expect(sumListsRev).toBeDefined();
    expect(sumListsFwd).toBeDefined();
  });

  beforeEach(() => {
    list1.insertLast(7);
    list1.insertLast(1);
    list1.insertLast(6);
    list2.insertLast(5);
    list2.insertLast(9);
    list2.insertLast(2);
  });

  afterEach(() => {
    list1.clear();
    list2.clear();
  });

  test("sumListsRev should return correct sum linked list", () => {
    const sumList = sumListsRev(list1, list2);
    expect(sumList.getAt(0).data).toBe(2);
    expect(sumList.getAt(1).data).toBe(1);
    expect(sumList.getAt(2).data).toBe(9);
  });

  test("sumListsFwd should return correct sum linked list", () => {
    const sumList = sumListsFwd(list1, list2);
    expect(sumList.getAt(0).data).toBe(1);
    expect(sumList.getAt(1).data).toBe(3);
    expect(sumList.getAt(2).data).toBe(0);
    expect(sumList.getAt(3).data).toBe(8);
  });
});
