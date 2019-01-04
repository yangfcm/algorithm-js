const L = require('../ds/linkedlist');
const List = L.LinkedList;
const Node = L.Node;

describe('Test linkedlist.js', () => {
  test('List is defined', () => {
    expect(List).toBeDefined();
  });

  test('Node is defined', () => {
    expect(Node).toBeDefined();
  });

  test('A Node class has properties of "data" and "next"', () => {
    const node = new Node('some data', 'next node');
    expect(node.data).toEqual('some data');
    expect(node.next).toEqual('next node');
  });

  test('A linked list object has a head property with the default value of null', () => {
    const list = new List();
    expect(list.head).toEqual(null);
  });

  test('Insert first appends a node to the start of the list', () => {
    const list = new List();
    list.insertFirst(1);
    expect(list.head.data).toEqual(1);
    list.insertFirst('abc');
    expect(list.head.data).toEqual('abc');
  });

  test('Size method returns the number of items in the linked list', () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.insertFirst(1);    
    expect(l.size()).toEqual(1);
    l.insertFirst(1);    
    expect(l.size()).toEqual(2);
    l.insertFirst(1);
    l.insertFirst(1);
    expect(l.size()).toEqual(4);
  });

  test('Get the first element', () => {
    const l = new List();
    l.insertFirst(1);
    expect(l.getFirst().data).toEqual(1);
    l.insertFirst(2);
    expect(l.getFirst().data).toEqual(2);
  });

  test('Get the last element', () => {
    const l = new List();
    l.insertFirst(2);
    expect(l.getLast()).toEqual({ data: 2, next: null });
    l.insertFirst(1);
    expect(l.getLast()).toEqual({ data: 2, next: null });
  });

  test('Empty out the list', () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    expect(l.size()).toEqual(4);
    l.clear();
    expect(l.size()).toEqual(0);
  });

  test('Remove the first node when the list has a size of one', () => {
    const l = new List();
    l.insertFirst('a');
    l.removeFirst();
    expect(l.size()).toEqual(0);
    expect(l.getFirst()).toEqual(null);
  });

  test('Remove the first node when the list has a size of more than one', () => {
    const l = new List();
    l.insertFirst('c');
    l.insertFirst('b');
    l.insertFirst('a');
    l.removeFirst();
    expect(l.size()).toEqual(2);
    expect(l.getFirst().data).toEqual('b');
    l.removeFirst();
    expect(l.size()).toEqual(1);
    expect(l.getFirst().data).toEqual('c');
  });

  test('RemoveLast removes the last node when list is empty', () => {
    const l = new List();
    expect(() => {
      l.removeLast();
    }).not.toThrow();
  });

  test('RemoveLast removes the last node when list is length 1', () => {
    const l = new List();
    l.insertFirst('a');
    l.removeLast();
    expect(l.head).toEqual(null);
  });

  test('RemoveLast removes the last node when list is length 2', () => {
    const l = new List();
    l.insertFirst('b');
    l.insertFirst('a');

    l.removeLast();

    expect(l.size()).toEqual(1);
    expect(l.head.data).toEqual('a');
  });

  test('RemoveLast removes the last node when list is length 3', () => {
    const l = new List();
    l.insertFirst('c');
    l.insertFirst('b');
    l.insertFirst('a');
    l.removeLast();

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual('b');
  });

  test('Add a node to the end of the list', () => {
    const l = new List();
    l.insertFirst('a');

    l.insertLast('b');
    l.insertLast('c');

    expect(l.size()).toEqual(3);
    expect(l.getLast().data).toEqual('c');
  });

  test('Returns the node at given index', () => {
    const l = new List();
    expect(l.getAt(10)).toEqual(null);

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(0).data).toEqual(1);
    expect(l.getAt(1).data).toEqual(2);
    expect(l.getAt(2).data).toEqual(3);
    expect(l.getAt(3).data).toEqual(4);
  });

  test('removeAt doesnt crash on an empty list', () => {
    const l = new List();
    expect(() => {
      l.removeAt(0);
      l.removeAt(1);
      l.removeAt(2);
    }).not.toThrow();
  });

  test('removeAt doesnt crash on an index out of bounds', () => {
    const l = new List();
    expect(() => {
      const l = new List();
      l.insertFirst('a');
      l.removeAt(1);
    }).not.toThrow();
  });

  test('removeAt deletes the first node', () => {
    const l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(0).data).toEqual(1);
    l.removeAt(0);
    expect(l.getAt(0).data).toEqual(2);
  });

  test('removeAt deletes the node at the given index', () => {
    const l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(1).data).toEqual(2);
    l.removeAt(1);
    expect(l.getAt(1).data).toEqual(3);
  });

  test('removeAt works on the last node', () => {
    const l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(3).data).toEqual(4);
    l.removeAt(3);
    expect(l.getAt(3)).toEqual(null);
  });

  test('inserts a new node with data at the 0 index when the list is empty', () => {
    const l = new List();
    l.insertAt('hi', 0);
    expect(l.getFirst().data).toEqual('hi');
  });

  test('inserts a new node with data at the 0 index when the list has elements', () => {
    const l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertAt('hi', 0);
    expect(l.getAt(0).data).toEqual('hi');
    expect(l.getAt(1).data).toEqual('a');
    expect(l.getAt(2).data).toEqual('b');
    expect(l.getAt(3).data).toEqual('c');
  });

  test('inserts a new node with data at a middle index', () => {
    const l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertAt('hi', 2);
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
    expect(l.getAt(3).data).toEqual('c');
    expect(l.getAt(4).data).toEqual('d');
  });

  test('inserts a new node with data at a last index', () => {
    const l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertAt('hi', 2);
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });

  test('insert a new node when index is out of bounds', () => {
    const l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertAt('hi', 30);

    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });
})