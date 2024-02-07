/**
 * @name set
 * @description Implement a set class.
 * A set is like an array, but it cannot contain duplicate values. 
 * The typical use for a set is to simply check for the presence of an item. 
 * The set should have the methods: 'add', 'remove', 'size', 'values', 'has'.
 * @example
 * const s = new Set();
 * s.add('a')  // returns true
 * s.values() // ['a']
 * s.add('b') // returns true
 * s.values() // ['b']
 * s.add('a') // returns false ('a' already exists)
 * s.remove('a')  // returns true
 * s.values() // ['b']
 * s.remove('a') // returns false ('a' is already removed)
 */

class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values(element) {
    return Object.values(this.dictionary);
  }

  size() {
    return this.length;
  }

  add(element) {
    if(this.dictionary[element] !== undefined) return false;
    this.dictionary[element] = element;
    this.length++;
    return true;
  }

  remove(element) {
    if(this.dictionary[element] === undefined) return false;
    delete this.dictionary[element];
    this.length--;
    return true;
  }
}