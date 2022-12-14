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
 * @solution Iterate through the heights array, for each bar(height), calculate the area with
 * this element as the smallest bar in the rectangle. Then, we can calculate the such area for every bar and find out the maximum of all such areas.
 * The worst time complexity is O(n^2)
 * @source https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 */
function solution1(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    let width = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (heights[j] >= height) width++;
      else break;
    }
    for (let k = i + 1; k < heights.length; k++) {
      if (heights[k] >= height) width++;
      else break;
    }
    const area = height * width;
    if (area > maxArea) maxArea = area;
  }
  return maxArea;
}

// This solution uses the idea of stacks to improve the above algorithm.
// The time complexity is improved to O(n)
function solution2(heights) {
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

module.exports = { solution1, solution2 };
