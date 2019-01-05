const fromLast = require('../ds/fromlast');
const L = require('../ds/linkedlist');
const List = L.LinkedList;
const Node = L.Node;

describe('test fromlast.js', () => {
  test('fromLast function is defined', () => {
    expect(fromLast).toBeDefined();
  });

  test('fromLast returns the node n elements from the end', () => {
    const l = new List();
  
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertLast('e');
  
    expect(fromLast(l, 3).data).toEqual('b');
  });
});