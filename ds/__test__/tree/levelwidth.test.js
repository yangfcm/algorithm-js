const levelwidth = require("../../tree/levelwidth");
const { Node } = require("../../tree/tree");

describe("Test levelwidth.js", () => {
  test("levelwidth function is defined", () => {
    expect(levelwidth).toBeDefined();
  });

  test("levelWidth returns number of nodes at widest point", () => {
    const root = new Node(0);
    root.add(1);
    root.add(2);
    root.add(3);
    root.children[0].add(4);
    root.children[2].add(5);

    expect(levelwidth(root)).toEqual([1, 3, 2]);
  });

  test("levelWidth returns number of nodes at widest point", () => {
    const root = new Node(0);
    root.add(1);
    root.children[0].add(2);
    root.children[0].add(3);
    root.children[0].children[0].add(4);

    expect(levelwidth(root)).toEqual([1, 1, 2, 1]);
  });
});
