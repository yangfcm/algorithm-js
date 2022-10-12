# JS Algorithms & Data structures problems and solutions

## Intro

Algorithms, Data Structure problems and solutions written in Javascript, including test cases.

## Content

### Algorithm

- [Array](./algo/array)
- [Dynamic](./algo/dynamic)
- [Greedy](./algo/greedy)
- [Math](./algo/math)
- [Assorted](./algo/assorted)
- [String](./algo/string)

### Data Structure

- [Stack and Queue](./ds/stack_queue)
- [Linked List](./ds/linkedlist)
- [Hash Table](./ds/hash)
- [Tree](./ds/tree)
- [Graph](./ds/graph)

### JS Specific

- [JS](./js)

### Sorting

- [Sorting](./sorting)

### Searching

- [Searching](./searching)

## Topic Discussions

## Runtime Complexity

Describe the performance of an algorithm. <br>
How much more processing power/time is required to run your algorithm if we double the inputs?<br>

### Common runtime complexity

- **Constant Time O(1)** - No matter how many elements we are working with, the algorithm/operation will always tak the same amount of time.
- **Logarithmic Time O(log(n))** - You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume the searching operations are log(n).
- **Linear Time O(n)** - Iterating through all elements in a collection of data. If you see a for loop spanning from 0 to array.length, you probably have a linear runtime.
- **Quasilinear Time O(n\*log(n))** - You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that any sorting operation is n\*log(n).
- **Quadratic Time O(n^2)** - Every element in acollection has to be compared to every other element. 'The handshake problem'
- **Exponential Time O(2^n)** - If you add a 'single' element to a collection, the processing power required doubles.

### Identify Runtime Complexity

- Iterate with a simple for loop through a single collection -> (Highly likely) O(n)
- Iterate through half a collection -> Still O(n)
- Iterate through two different collections with seperate for loops -> O(n+m)
- Two nested for loop iterating over the same collection -> O(n^2)
- Two nested for loops iterating over different collections -> O(n\*m)
- Sorting -> O(n\*log(n))
- Searching a sorted array -> O(log(n))

## How to run

- Under project directory.
- Run `npm install` to install packages required.
- Run `npm run test` or `npm run test:watch` to run the test cases. You can write your own testing code to see the results.
