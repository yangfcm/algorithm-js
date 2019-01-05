const circular = require('../ds/circular');
const L = require('../ds/linkedlist');
const List = L.LinkedList;
const Node = L.Node;

describe('Test circular.js', () => {
  test('circular function is defined', () => {
    expect(circular).toBeDefined();
  });


  test('circular detects circular linked lists', () => {
    const l = new List();
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
  
    l.head = a;
    a.next = b;
    b.next = c;
    c.next = b;
  
    expect(circular(l)).toEqual(true);
  });
  
  test('circular detects circular linked lists linked at the head', () => {
    const l = new List();
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
  
    l.head = a;
    a.next = b;
    b.next = c;
    c.next = a;
  
    expect(circular(l)).toEqual(true);
  });
  
  test('circular detects non-circular linked lists', () => {
    const l = new List();
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
  
    l.head = a;
    a.next = b;
    b.next = c;
    c.next = null;
  
    expect(circular(l)).toEqual(false);
  });
});