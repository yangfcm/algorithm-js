# JS Algorithms & Data structes problems and solutions

## Intro

Interview: Algorithms problems and solutions written in Javascript, including test cases.

## Algorithms problems content 
`/algo`

- Reverse a string - reversestring.js
- Test a string is a palindrome(its reversed string is exactly the same as itself) - palindrome.js
- Reverse an integer - reverseint.js
- Get the character that most commonly appears in a given string - maxchar.js
- fizzbuzz, print the numbers from 1 to N.
  But for multiples of 3 print 'fizz' instead of the number;
  for multiples of 5, print 'buzz';
  for numbers which are multiples of both 3 and 5, print 'fizzbuzz' - fizzbuzz.js
- Chunk Array: Given an array and chunk size, divide the array into many subarrays where each subarray is of length size - chunk.js
- Anagrams: Check to see if two strings are anagrams of each other - anagrams.js
- Capitalize: Capitalize each word in a string - capitalize.js
- Steps: Print a step shape with n levels using # character and space(s) on the right - steps.js
- Pyramid: Print a pyramid shape with n levels using # character and space on its left and right side - pyramid.js
- Count the number of vowels used in a string - vowels.js
- Produce a spiral matrix - matrix.js
- Print the n-th number in the fibonacci series - fibonacci.js
- Test if a given number is a prime(质数) - isprime.js
- Test if a given array of numbers is sorted - issorted.js
- Test if curly braces in a string is matched - isbalanced.js
- Missing Number: Take an unsorted array of unique numbers from to n and return the missing number in the sequence - missing.js

`/leetcode` - Algorithm problems and solutions in `Leetcode`
* Return indices of the two numbers whose sum equals to a target - `twoSum.js`
* Remove vowels of a string - `removeVowels.js`

## Data structure problems content
`/ds`
- Implement a queue, which has enqueuing(equivalent to array.unshift())and dequeuing(equivalent to array.pop()) operation - queue.js
- Combine two queues into one - weave.js
- Implement a stack, which has methods equivalent to array.push() and array.pop() - stack.js
- Create a queue using two stacks, instead of arrays - qfroms.js
- Implement a linked list - linkedlist.js
- Get the middle node of a linked list - midpoint.js
- Check if a linked list is circular - circular.js
- Return the nth(starting at 0) node from the tail in a linked list - fromlast.js
- Implement a tree and using BFS and DFS to traverse a tree - tree.js
- Get the width of each level of a tree - levelwidth.js
- Implement a binary search tree - bst.js
- Validate the binary search tree - bst-val.js

## JS-specific
`/js`
- Create an event library out of the Events class. - events.js
- Implement Array.prototype.filter method - filter.js
- Implement Array.prototype.reduce method - reduce.js
- Implement Array.prototype.indexOf method - indexof.js

## Sorting

- Implement the three most common sorting methods - sorting.js

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

## Data Structure

Ways of organizing information with optimal 'runtime complexity' for adding or removing records<br>
JS natively implements severl data structures. But you still need to be familiar with 'inferior' data structure

### Typs of data structure

- Queues: First-in-first-out data collection.
- Stack: First-in-last-out data collection.
- Linked List: An ordered collection of data, which contains some amount of nodes. Each node contains some data and a reference to the next node. It has two special nodes, which are head node and tail node.
- Tree: A collection of data with multiple levels or hierachies. The node structor in a tree is similar to the node in linked list but tree also has some special nodes: parent node, child node, sibling node, root node etc. A common operation of tree is iteration. Unlike other types of data structure whose data has an order, tree doesn't. So it can have two ways of iteration: Breadth-First algorithm(广度优先) and Depth-First algorithm(深度优先)
- Binary Tree: A tree, with every node having two or zero children. The two children nodes are called left node and right node.
- Binary Search Tree: A binary tree and every node's value is greater than its left value and less than its right value.

## How to design a twitter

This question can be asked about any webapp services, like how to design a blog, ebay, twitter, etc.

### Guidance to answer the questions:

- No right answer
- Every interviewer expects a different answer
- Focus is usually on the data model
- Don't mention specific technologies
- Draw stuff
- Talk

### Best strategies

- Identify two core features
- Possible implementation
- Identify and address difficulties
- Solutions for scaling, like caching, load balancer, etc.

## Sorting Algorithm

Three most common ways of sorting:

- Bubble sorting O(n^2) Easy
- Selection sorting O(n^2) Easy
- Merge sorting O(n\*log(n)) Difficult

## How to run

### In the 'js-algo' directory:

- Run `npm install` to install packages required.
- Run `npm run test` or `npm run test:watch` to run the test cases. You can write your own testing code to see the results.
