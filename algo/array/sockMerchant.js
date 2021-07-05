/**
 * Given an array of integers representing the color of each sock,
 * determine how many pairs of socks with matching colors there are.
 * For example, there are n = 7 socks with colors arr=[1,2,1,2,1,3,2].
 * There is one pair of color 1 and one of color 2.
 * There are three odd socks left, one of each color. So the number of pairs is 2.
 */
function solution1(arr) {
  const socksArr = arr;
  let pairs = 0;
  socksArr.forEach((value, index, arr) => {
    // Iterate the array
    let matchedIndex = socksArr.indexOf(value, index + 1);
    if (matchedIndex != -1) {
      // Match found.
      arr.splice(matchedIndex, 1); // Delete the matched element from array
      pairs++;
    }
  });
  return pairs;
}

// Another solution
function solution2(arr) {
  const socksMap = {};
  let pairs = 0;
  for (let i = 0; i < arr.length; i++) {
    // Record how many times a number appears in the array.
    const key = arr[i];
    if (socksMap[key]) {
      socksMap[key]++;
    } else {
      socksMap[key] = 1;
    }
  }
  // console.log(socksMap);
  for (let key in socksMap) {
    pairs += Math.floor(socksMap[key] / 2);
  }
  return pairs;
}

module.exports = {
  solution1,
  solution2,
};
