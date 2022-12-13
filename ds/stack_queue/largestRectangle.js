/**
 * @name largestRectangle
 * @description Given an array of integers heights representing the histogram's bar height
 * where the width of each bar is 1, return the area of the largest rectangle in the histogram.
 * @example heights = [2, 1, 5, 6, 2, 3] -> 10
 *        _
 *      _| |
 *     |+|+|
 *     |+|+|  _
 *  _  |+|+|_| |
 * | |_|+|+| | |
 * | | |+|+| | |
 * -2-1-5-6-2-3-
 * The above is the a histogram where width of each bar is 1.
 * The largest rectangle is the one created by 5 and 6, which has an area of 2 * 5 = 10 units.
 * @param {array} heights
 * @returns The area of the largest rectangle.
 * @source https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 */
function solution(heights) {
  const stack = [];
  let maxArea = 0;
  let index = 0;
  while (index < heights.length) {
    if (
      stack.length === 0 ||
      heights[stack[stack.length - 1]] <= heights[index]
    ) {
      stack.push(index);
      index++;
    } else {
      let top = stack.pop();
      let area =
        heights[top] *
        (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);
      maxArea = Math.max(maxArea, area);
    }
  }
  while (stack.length > 0) {
    let top = stack.pop();
    let area =
      heights[top] *
      (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
}

module.exports = { solution };