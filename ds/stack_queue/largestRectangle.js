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
 * To be specific, for each bar, look at its neighbouring (including left and right) bars until it hits a lower bar or the boundary of the array.
 * Then, the area of this rectangle is just the maximum area for this bar.
 * The worst time complexity is O(n^2)
 * @source https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 */
function solution1(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    let width = 1;
    for (let j = i - 1; j >= 0 && heights[j] >= height; j--) {
      // Expand to left
      width++;
    }
    for (let k = i + 1; k < heights.length && heights[k] >= height; k++) {
      // Expand to right
      width++;
    }
    const area = height * width;
    if (area > maxArea) maxArea = area;
  }
  return maxArea;
}

// This solution uses the idea of stacks to improve the above algorithm.
// The time complexity is improved to O(n)
// This blog explains the solution well: https://www.danielleskosky.com/largest-rectangle-in-histogram/
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

// This solution uses the exact the same logic as solution2 but in a more readable way and written based on the understanding of the algorithm.
function solution3(heights) {
  let maxArea = 0;
  const stack = [];
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    if (stack.length === 0 || height >= heights[stack[0]]) {
      stack.unshift(i);
    } else {
      while (heights[stack[0]] > height) {
        const top = stack.shift();
        const high = i;
        const low = stack.length > 0 ? stack[0] : -1;
        const area = heights[top] * (high - low - 1);
        maxArea = Math.max(maxArea, area);
      }
      stack.unshift(i);
    }
  }

  while (stack.length > 0) {
    // This one and the above whilel oop actually has the same logic. Consider separate it as a helper function.
    const top = stack.shift();
    const high = heights.length;
    const low = stack.length > 0 ? stack[0] : -1;
    const area = heights[top] * (high - low - 1);
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
}

module.exports = { solution1, solution2, solution3 };
