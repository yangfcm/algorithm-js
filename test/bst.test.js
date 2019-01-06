const Node = require('../ds/bst');

describe('Test bst.js', () => {

  test('Node is a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });
  
  test('Node can insert correctly', () => {
    const node = new Node(10);
    node.insert(5);
    node.insert(15);
    node.insert(17);
  
    expect(node.left.data).toEqual(5);
    expect(node.right.data).toEqual(15);
    expect(node.right.right.data).toEqual(17);
  });
  
  test('Contain returns node with the same data', () => {
    const node = new Node(10);
    node.insert(5);
    node.insert(15);
    node.insert(20);
    node.insert(0);
    node.insert(-5);
    node.insert(3);
  
    const three = node.left.left.right;
    expect(node.contain(3)).toEqual(three);
  });
  
  test('Contain returns null if value not found', () => {
    const node = new Node(10);
    node.insert(5);
    node.insert(15);
    node.insert(20);
    node.insert(0);
    node.insert(-5);
    node.insert(3);
  
    expect(node.contain(9999)).toEqual(null);
  });
});