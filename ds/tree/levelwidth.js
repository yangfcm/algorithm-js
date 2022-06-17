/**
 * @name levelwidth
 * @description Given the root node of a tree, return an array to show the width of each level.
 * @example
 * Given:
 *     0
 *   / |  \
 * 1   2   3
 * |       |
 * 4       5
 * Answer: [1, 3, 2]
 * @param {Node} root
 * @returns {array}
 */

function levelwidth(root) {
  const arr = [root, "s"]; // 's' is a stop sign to indicate the end of a level
  const widths = [0]; // *widths* array is to hold the width of each level

  while (arr.length > 1) {
    // If *arr* has only one element('s'), it means the traversal of tree is finished
    const node = arr.shift(); // Get the first node from the array
    if (node === "s") {
      // If the node returned is 's', it means it reaches the end of the level
      widths.push(0); // Create a new element in *widths* array.
      arr.push("s"); // Put the 's' to the end of the array.
    } else {
      arr.push(...node.children); // Put the node's children to the end of array
      widths[widths.length - 1]++; // Increment the width number
    }
  }
  return widths;
}

module.exports = levelwidth;
