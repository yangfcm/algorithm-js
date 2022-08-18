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

6. `makeAnagrams.js`

   Determine the minimum number of characters deletions required to make two strings anagrams.

7. `maxchar.js`

   Get the character that most commonly appears in a given string

8. `oneAway.js`

   Check if one string is one edit away from the other string

9. `palindrome.js`

   Test a string is a palindrome(its reversed string is exactly the same as itself)

10. `palindromePermutation.js`

    Check if a string is a permutation of a palindrome

11. `removeVowels.js`

    Remove vowels of a string

12. `reverseint.js`

    Reverse an integer

13. `reversestring.js`

    Reverse a string

14. `specialString.js`

    Find out how many special strings

15. `stringCompression.js`

    Compress a string

16. `stringRotation.js`

    Check if one string is the rotation of the other string, using isSubString function

17. `validString.js`

    Check if a string is valid as per a certain rule

18. `vowels.js`

    Count the number of vowels used in a string

## Data structure problems content

### What is data structure

Ways of organizing information with optimal 'runtime complexity' for adding or removing records<br>
JS natively implements severl data structures. But you still need to be familiar with 'inferior' data structure

### Types of data structure

- Queues: First-in-first-out data collection.
- Stack: First-in-last-out data collection.
- Linked List: An ordered collection of data, which contains some amount of nodes. Each node contains some data and a reference to the next node. It has two special nodes, which are head node and tail node.
- Tree: A collection of data with multiple levels or hierachies. The node structor in a tree is similar to the node in linked list but tree also has some special nodes: parent node, child node, sibling node, root node etc. A common operation of tree is iteration. Unlike other types of data structure whose data has an order, tree doesn't. So it can have two ways of iteration: Breadth-First algorithm(广度优先) and Depth-First algorithm(深度优先)
- Binary Tree: A tree, with every node having two or zero children. The two children nodes are called left node and right node.
- Binary Search Tree: A binary tree and every node's value is greater than its left value and less than its right value.

`/ds/hash` - Problems and solutions associated with **hash table**

1. `hashTable.js`

   Implement a hash table

`/ds/linkedlist` - Problems and solutions associated with **linked list**

1. `linkedlist.js`

   Implement a linked list

2. `midpoint.js`

   Get the middle node of a linked list

3. `circular.js`

   Check if a linked list is circular

4. `fromlast.js`

   Return the nth(starting at 0) node from the tail in a linked list

5. `removeDuplicate.js`

   Remove duplicates from an unsofted linked list

6. `partition.js`

   Partition a linked list

7. `sumLists.js`

   Sum two linked list

`/ds/stack_queue` - Problems and solutions associated with **stacks and queues**

1. `queue.js`

   Implement a queue, which has enqueuing(equivalent to array.unshift())and dequeuing(equivalent to array.pop()) operation

2. `stack.js`

   Implement a stack, which has methods equivalent to array.push() and array.pop()

3. `weave.js`

   Combine two queues into one

4. `qfroms.js`

   Create a queue using two stacks, instead of arrays

5. `getMin.js`

   Get the minimum number in a stack

6. `sortStack.js`

   Sort a stack

7. `animalQueue.js`

   Implement an animal queue

8. `setOfStacks.js`

   Implement a stack of plates

`/ds/tree` - Problems and solutions associated with **trees**

1. `tree.js`

   Implement a tree and using BFS and DFS to traverse a tree

2. `levelwidth.js`

   Get the width of each level of a tree

3. `bst.js`

   Implement a binary search tree

4. `bst-val.js`

   Validate the binary search tree

5. `minimalTree.js`

   Create a binary search tree with minimal height based on a ascend-sorted array

6. `listOfDepths.js`

   Create an array of all the nodes at each depth.

`/ds/graph` - Problems and solutions associated with **graph**

1. Implement a graph class and its relevant methods, including DFS and BFS `graph.js`

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

1. `bubbleSort.js`

   Implement bubble sort.

2. `countingSort.js`

   Implment counting sort.

3. `mergeSort.js`

   Implement merge sort.

4. `selectionSort.js`

   Implement selection sort.

5. `fradulentActivityNotice.js`

   Fradulent activity notice. An application in counting sort.

6. `countInversions.js`

   Count how many inversions required to sort an unordered array.

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

## How to run

- Under project directory.
- Run `npm install` to install packages required.
- Run `npm run test` or `npm run test:watch` to run the test cases. You can write your own testing code to see the results.
