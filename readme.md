# JS Algorithms & Data structes problems and solutions

## Intro
Algorithms problems and solutions written in Javascript, including test cases.

## Algorithms problems content
* Reverse a string - reversestring.js
* Test a string is a palindrome(its reversed string is exactly the same as itself) - palindrome.js
* Reverse an integer - reverseint.js
* Get the character that most commonly appears in a given string - maxchar.js
* fizzbuzz, print the numbers from 1 to N.
 But for multiples of 3 print 'fizz' instead of the number;
 for multiples of 5, print 'buzz';
 for numbers which are multiples of both 3 and 5, print 'fizzbuzz' - fizzbuzz.js
* Chunk Array: Given an array and chunk size, divide the array into many subarrays where each subarray is of length size - chunk.js
* Anagrams: Check to see if two strings are anagrams of each other - anagrams.js
* Capitalize: Capitalize each word in a string - capitalize.js
* Steps: Print a step shape with n levels using # character and space(s) on the right - steps.js
* Pyramid: Print a pyramid shape with n levels using # character and space on its left and right side - pyramid.js
* Count the number of vowels used in a string - vowels.js
* Produce a spiral matrix - matrix.js
* Print the n-th number in the fibonacci series - fibonacci.js

## Data structure problems content
* Implement a queue, which has enqueuing(equivalent to array.unshift())and dequeuing(equivalent to array.pop()) operation - queue.js
* Combine two queues into one - weave.js
* Implement a stack, which has methods equivalent to array.push() and array.pop() - stack.js
* Create a queue using two stacks, instead of arrays - qfroms.js
* Implement a linked list - linkedlist.js

## Runtime Complexity
Describe the performance of an algorithm. <br>
How much more processing power/time is required to run your algorithm if we double the inputs?<br>
### Common runtime complexity
* **Constant Time O(1)** - No matter how many elements we are working with, the algorithm/operation will always tak the same amount of time.
* **Logarithmic Time O(log(n))** - You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume the searching operations are log(n).
* **Linear Time O(n)** - Iterating through all elements in a collection of data. If you see a for loop spanning from 0 to array.length, you probably have a linear runtime.
* **Quasilinear Time O(n*log(n))** - You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that any sorting operation is n*log(n).
* **Quadratic Time O(n^2)** - Every element in acollection has to be compared to every other element. 'The handshake problem'
* **Exponential Time O(2^n)** - If you add a 'single' element to a collection, the processing power required doubles.
### Identify Runtime Complexity
* Iterate with a simple for loop through a single collection -> (Highly likely) O(n)
* Iterate through half a collection -> Still O(n)
* Iterate through two different collections with seperate for loops -> O(n+m)
* Two nested for loop iterating over the same collection -> O(n^2)
* Two nested for loops iterating over different collections -> O(n*m)
* Sorting -> O(n*log(n))
* Searching a sorted array -> O(log(n))

## Data Structure
Ways of organizing information with optimal 'runtime complexity' for adding or removing records<br>
JS natively implements severl data structures. But you still need to be familiar with 'inferior' data structure
### Typs of data structure
* Queues: First-in-first-out data collection.
* Stack: First-in-last-out data collection.
* Linked List: An ordered collection of data, which contains some amount of nodes. Each node contains some data and a reference to the next node. It has two special nodes, which are head node and tail node.

 ## How to run
 ### In the 'js-algo' directory:
 * Run `npm install` to install packages required.
 * Run `npm run test` or `npm run test:watch` to run the test cases. You can write your own testing code to see the results.