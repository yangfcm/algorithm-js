# JS Algorithms & Data structures problems and solutions

## Intro

Algorithms, Data Structure problems and solutions written in Javascript, including test cases.

## Algorithms problems content `/algo`

`/array` - Problems and solutions about arrays.

1. `chunk.js`

   Chunk Array: Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.

2. `intersect.js`

   Compute two arrays' intersection.

3. `issorted.js`

   Test if a given array of numbers is sorted.

4. `matrix.js`

   Produce a spiral matrix.

5. `missing.js`

   Missing Number: Take an unsorted array of unique numbers from to n and return the missing number in the sequence.

6. `moveZeroes.js`

   Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

7. `plusOne.js`

   Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

8. `removeDuplicates.js`

   Given an array with sorted numbers, remove duplicated numbers in-place.

9. `rotateArray.js`

   Given an array, rotate the array to the right by k steps in-place.

10. `rotateImage.js`

    Rotate an image represented by a n\*n array by 90 degrees (clockwise).

11. `sockMerchant.js`

    Find out how many pairs of socks with matching colors(represented by numbers in an array).

12. `twoSum.js`

    Return indices of the two numbers whose sum equals to a target.

13. `validSudoku.js`

    Determine if a 9x9 Sudoku board is valid.

`/dynamic` - Dynamic problems and solutions, usually associated with recursive calls.

1. `gridTraveler.js`

   A traveler begins in the top-left corner of a m x n grid and ends in the bottom-right corner. You may only move down or right. Calculate how many routes you can travel to the goal.

2. `canSum.js`

   Given a target number and an array of numbers. Write algorithm to indicate if it is possible to generate the target sum using the numbers from the array. You may use an element of the array as many times as needed.

3. `howSum.js`

   Follow up the previous problem: return an array containing one combination of the numbers that add up to exactly the target number.

4. `bestSum.js`

   Follow up the prvious problem: return an array that has the shortest combination of the numbers.

5. `canConstruct.js`

   Given a target string and an array of strings. Write algorithm to indicate if it is possible to construct the target string by concatenating elements of the strings array.

6. `countConstruct.js`

   Follow up the previous problem: return the number of ways to construct the target string by concatenating elements of the strings array.

7. `allConstruct.js`

   Follow up the previous problem: return all the ways to construct the target string by concatenating elements of the strings array.

`/math` - Algorithm to solve math problems.

1. `fibonacci.js`

   Print the n-th number in the fibonacci series

2. `fizzbuzz.js`

   Fizzbuzz: print the numbers from 1 to N.<br>
   But for multiples of 3 print 'fizz' instead of the number;<br>
   for multiples of 5, print 'buzz';<br>
   for numbers which are multiples of both 3 and 5, print 'fizzbuzz'<br>

3. `isprime.js`

   Test if a given number is a prime(质数)

`/assorted` - Assorted algorithm problems and solutions

1. `maxProfit.js`

   Max profit: Given an array with each number representing a stock price for one day, work out an algorithm to find the max profit.

2. `pyramid.js`

   Pyramid: Print a pyramid shape with n levels using # character and space on its left and right side.

3. `steps.js`

   Steps: Print a step shape with n levels using # character and space(s) on the right.

`/string` - Problems and solutions about string manipulation.

1. `anagrams.js`

   Anagrams: Check to see if two strings are anagrams of each other

2. `capitalize.js`

   Capitalize: Capitalize each word in a string

3. `checkPermutation.js`

   Check two strings are permutation

4. `isbalanced.js`

   Test if curly braces in a string is matched

5. `isUnique.js`

   Determine if a string has all unique characters

6. `maxchar.js`

   Get the character that most commonly appears in a given string

7. `oneAway.js`

   Check if one string is one edit away from the other string

8. `palindrome.js`

   Test a string is a palindrome(its reversed string is exactly the same as itself)

9. `palindromePermutation.js`

   Check if a string is a permutation of a palindrome

10. `removeVowels.js`

    Remove vowels of a string

11. `reverseint.js`

    Reverse an integer

12. `reversestring.js`

    Reverse a string

13. `stringCompression.js`

    Compress a string

14. `stringRotation.js`

    Check if one string is the rotation of the other string, using isSubString function

15. `vowels.js`

    Count the number of vowels used in a string

## Data structure problems content

`/ds/hash` - Problems and solutions associated with **hash table**

1. Implement a hash table - `hashTable.js`

`ds/linkedlist` - Problems and solutions associated with **linked list**

1. Implement a linked list - `linkedlist.js`
2. Get the middle node of a linked list - `midpoint.js`
3. Check if a linked list is circular - `circular.js`
4. Return the nth(starting at 0) node from the tail in a linked list - `fromlast.js`
5. Remove duplicates from an unsofted linked list - `removeDuplicate.js`
6. Partition a linked list - `partition.js`
7. Sum two linked list - `sumLists.js`

`ds/stack_queue` - Problems and solutions associated with **stacks and queues**

1. Implement a queue, which has enqueuing(equivalent to array.unshift())and dequeuing(equivalent to array.pop()) operation - `queue.js`
2. Implement a stack, which has methods equivalent to array.push() and array.pop() - `stack.js`
3. Combine two queues into one - `weave.js`
4. Create a queue using two stacks, instead of arrays - `qfroms.js`
5. Get the minimum number in a stack - `getMin.js`
6. Sort a stack - `sortStack.js`
7. Implement an animal queue - `animalQueue.js`
8. Implement a stack of plates - `setOfStacks.js`

`ds/tree` - Problems and solutions associated with **trees**

1. Implement a tree and using BFS and DFS to traverse a tree - `tree.js`
2. Get the width of each level of a tree - `levelwidth.js`
3. Implement a binary search tree - `bst.js`
4. Validate the binary search tree - `bst-val.js`
5. Create a binary search tree with minimal height based on a ascend-sorted array - `minimalTree.js`
6. Create an array of all the nodes at each depth. - `listOfDepths.js`

`ds/graph` - Problems and solutions associated with **graph**

1. Implement a graph class and its relevant methods, including DFS and BFS - `graph.js`

## JS-specific

`/js` - Implement JS built-in functions.

1. `events.js`

   Create an event library out of the Events class

2. `filter.js`

   Implement Array.prototype.filter method

3. `reduce.js`

   Implement Array.prototype.reduce method

4. `indexof.js`

   Implement Array.prototype.indexOf method

## Sorting

`/sorting` - Solutions to sort an array.

1. `sorting.js`

   Implement the three most common sorting methods

### Three most common ways of sorting:

- Bubble sorting O(n^2) Easy
- Selection sorting O(n^2) Easy
- Merge sorting O(n\*log(n)) Difficult

## Searching

`/searching` - Solutions to find out a given element from an array.

1. `linearSearch.js`

   Implement linear search

2. `binarySearch.js`

   Implement binary search

3. `jumpSearch.js`

   Implmenet jump search

4. `interpolationSearch.js`

   Implement interpolation search

5. `exponentialSearch.js`

   Implement exponential search

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

## How to run

### In the 'js-algo' directory:

- Run `npm install` to install packages required.
- Run `npm run test` or `npm run test:watch` to run the test cases. You can write your own testing code to see the results.
