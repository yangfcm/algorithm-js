const T = require("../tree");
const Node = T.Node;
const Tree = T.Tree;

describe("Test tree.js", () => {
  test("Node is a constructor", () => {
    expect(typeof Node.prototype.constructor).toEqual("function");
  });

  test("Node has a data and children properties", () => {
    const n = new Node("a");
    expect(n.data).toEqual("a");
    expect(n.children.length).toEqual(0);
  });

  test("Node can add children", () => {
    const n = new Node("a");
    n.add("b");
    expect(n.children.length).toEqual(1);
    expect(n.children[0].children).toEqual([]);
  });

  test("Node can remove children", () => {
    const n = new Node("a");
    n.add("b");
    expect(n.children.length).toEqual(1);
    n.remove("b");
    expect(n.children.length).toEqual(0);
  });

  test("starts empty", () => {
    const t = new Tree();
    expect(t.root).toEqual(null);
  });

  test("Tree can traverse Bf", () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node("a");
    t.root.add("b");
    t.root.add("c");
    t.root.children[0].add("d");

    t.traverseBFS(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(["a", "b", "c", "d"]);
  });

  test("Tree can traverse DF", () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node("a");
    t.root.add("b");
    t.root.add("d");
    t.root.children[0].add("c");

    t.traverseDFS(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(["a", "b", "c", "d"]);
  });
});
