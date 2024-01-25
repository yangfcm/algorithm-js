/**
 * @name getFinalOpenedDoors
 * @description There are n doors in a row that are all initially closed.
 * You make n passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it).
 * The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it.
 * The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc.,
 * until you only visit the n-th door.
 * Implement a function to determine the state of the doors after the last pass.
 * Return the final result in an array, with only the door number included in the array if it is open.
 * @example openedDoors(10)
 * There are 10 doors and each door is closed initially, so we make an array with size of 10 to indicate each door's state: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 * In the first pass, toggle each door. The state of door after first pass: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 * In the second pass, visit every 2nd door and toggle it. The state of door after second pass: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
 * In the third pass, visit every 3rd door and toggle it. The state of door after third pass: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0]
 * ... Repeat until you make the 10th pass and return the door number that is opened (The 1 elements in the array).
 * @param {number} n the number of doors
 * @returns {number[]} The number of doors that are opened.
 * @solution One door is open or close is associated with how many times it's toggled or passed.
 * So we create an array to store the number of toggles of each door, it starts with 0.
 * The size of the array (how many doors) is determined by the argument n.
 * For each door, calculate how many times it's got passed. Every time, it's passed, increment the number by 1.
 * After final pass, you can get how many times each door is passed and therefore, you can know the state (close or open) of door from the times of passes.
 * i.e. If the door is passed odd number times, it's open; if passed even number times, it's close.
 * Return the number of doors (index of the array) whose value is an odd number.
 * Pay attention: the door number is its index + 1.
 * @source https://www.freecodecamp.org/learn/rosetta-code/rosetta-code-challenges/100-doors
 */
function solution(n) {
  const doors = new Array(n + 1); // Create a n+1 array, because door number is the index of array + 1.
  // So use doors[1] to indicate door 1, doors[2] to indicate door 2. etc...
  doors.fill(0);
  for (let time = 1; time <= n; time++) {
    for (let doorNumber = 1; doorNumber <= n; doorNumber++) {
      if (doorNumber % time === 0) doors[doorNumber]++;
    }
  }
  return doors.reduce((openedDoors, element, index) => {
    if (element % 2 !== 0) openedDoors.push(index);
    return openedDoors;
  }, []);
}

module.exports = { solution };
