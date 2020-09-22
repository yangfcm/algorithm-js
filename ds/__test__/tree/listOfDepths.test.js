const {
  Node,
  createLevelList,
  createLevelListAlt,
} = require("../../tree/listOfDepths");

describe("Test createLevelList", () => {
  let testTree1;
  beforeEach(() => {
    testTree1 = new Node(0);
    testTree1.left = new Node(1);
    testTree1.right = new Node(3);
    testTree1.left.left = new Node(4);
    testTree1.left.right = new Node(6);
    testTree1.right.left = new Node(5);
  });

  afterEach(() => {
    testTree1 = null;
  });

  it("Solution should create a list for nodes on each level correctly", () => {
    const lists = createLevelList(testTree1);
    expect(lists[0][0].data).toBe(0);
    expect(lists[1][0].data).toBe(1);
    expect(lists[1][1].data).toBe(3);
    expect(lists[2][0].data).toBe(4);
    expect(lists[2][1].data).toBe(6);
    expect(lists[2][2].data).toBe(5);
  });

  it("The alternative solution should create a list for nodes on each level correctly", () => {
    const lists = createLevelListAlt(testTree1);
    expect(lists[0][0].data).toBe(0);
    expect(lists[1][0].data).toBe(1);
    expect(lists[1][1].data).toBe(3);
    expect(lists[2][0].data).toBe(4);
    expect(lists[2][1].data).toBe(6);
    expect(lists[2][2].data).toBe(5);
  });
});
