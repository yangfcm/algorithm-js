// Tutorial code for learning ES5 generators
function *numbers() {   // This function is for creating generators
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();  // Now, define a generator object
console.log(generator.next());  // { value: 2, done: false }
console.log(generator.next(10));  // { value: 10, done: true }
// Whenever call generator.next(), you can get an object
// with *value* property, which contains the result "returned" in *yield* statement 
// and *done* property to indicate if this is the last "yield statement"
// It looks like a linked list

///////////////////////////////////////
// Another example of generator
// How to make an array using generator
///////////////////////////////////////
function *list() {
  yield 'a';
  yield 'b';
  yield 'c';
  yield 'd';
  yield 'e';
}

const generator1 = list();
const listArr = [];
for(let value of generator1) {  // Generator can be iterated like an array
  // like calling *next()* method until it reachs to the end.
  listArr.push(value);
}
console.log(listArr); // [ 'a', 'b', 'c', 'd', 'e' ]

///////////////////////////////////
// Generators can be nested
//////////////////////////////////

function *letters() {
  yield 'a';
  yield 'b';
  yield *moreLetters();
  yield 'f';
  yield 'g';
  yield 'h';
}

function *moreLetters() {
  yield 'c';
  yield 'd';
  yield 'e';
}

const generator2 = letters();
let lettersArr = [];
for(let value of generator2) {
  lettersArr.push(value);
}

console.log(lettersArr);  // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
