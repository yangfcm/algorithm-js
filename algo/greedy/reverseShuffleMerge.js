/**
 * @name reverseShuffleMerge
 * @description We define some operations on a string as follows:
 * 1. Reverse, reverse a string e.g. Reverse 'abc' is 'cba'
 * 2. Shuffle, shuffle the characters in a string. e.g. Shuffle 'abc' can be 'abc', 'acb', 'bac', 'bca', 'cba', 'cab'
 * 3. Merge, intersperse two strings with maintaining the order of characters in both.
 * e.g. Merge 'abc' and 'def' can be 'abcdef', 'adbecf', 'abdefc', 'adefbc' etc.
 * Given a string s such that s is one of the results of the operation: merge(reverse(A), shuffle(A)) (A is another string)
 * find out the lexicographically smallest(字典排序中最小/前的一個) A
 * @example1
 * s = eggegg -> egg
 * reverse('egg') -> 'gge', shuffle('egg') -> 'egg', 'eggegg' belongs to the merge of ('gge', 'egg')
 * @example2
 * s = abcdefgabcdefg -> agfedcb
 * reverse('agfedcb') -> 'bcdefga', shuffle('agfedcb') -> 'abcdefg', 'bcdefgabcdefg' belongs to the merge of ('bcdefga','abcdefg')
 * @solution Because s is the intersperse of two strings with exact same letters, we can easily find out the letters for string A.
 * To do it, use an object as char-count pair. For example, s = eggegg, we can know
 * string A has one letter 'e' and two letter 'g's, so keep the information in an object like: { e: 1, g: 2, }.
 * Next, we need to put these letters in correct order, such that s = merge(reverse(A), shuffle(A)).
 * Considering the characteristics of the string s, if we reverse the string, like 'ggegge', we can know that string A is contained in it with the right order.
 * So the task is to find one 'e' and two 'g's from 'ggegge' in the order. And the lexicographically smallest one is exactly the string A we want.
 * @param {string} s
 * @returns The lexicographically smallest string A.
 * @source https://www.hackerrank.com/challenges/reverse-shuffle-merge
 */
function solution(s) {
  const sortedS = s.split("").sort().join("");

  const letterCounts = {};
  const letterCountsShuffle = {};
  for (let i = 0; i < sortedS.length; i += 2) {
    if (letterCounts[sortedS[i]]) {
      letterCounts[sortedS[i]] += 1;
      letterCountsShuffle[sortedS[i]] += 1;
    } else {
      letterCounts[sortedS[i]] = 1;
      letterCountsShuffle[sortedS[i]] = 1;
    }
  }

  const reversedS = s.split("").reverse().join("");
  const strArr = [];
  for (let l of reversedS) {
    if (letterCounts[l] > 0) {
      while (
        strArr.length > 0 &&
        strArr[strArr.length - 1] > l &&
        letterCountsShuffle[strArr[strArr.length - 1]] > 0
      ) {
        const removed = strArr.pop();
        letterCountsShuffle[removed]--;
        letterCounts[removed]++;
      }
      strArr.push(l);
      letterCounts[l]--;
    } else {
      letterCountsShuffle[l]--;
    }
  }

  return strArr.join("");
}

module.exports = { solution };
