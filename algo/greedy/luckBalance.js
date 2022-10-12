/**
 * @name luckBalance
 * @description There is an array to represent a series of contests.
 * Each element(contest) is also an array which has two integer numbers.
 * The first number is the luck point; the second is 1 or 0 to indicate if the contest is important or not.
 * The rule is if you lose the contest, you can earn the luck point; if you win the contest, you will lose the luck point.
 * You cannot lose more than k importnat contests.
 * Given k and contests arrays, work out the maximum luck points you can earn.
 * @example k = 3, contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]] -> 29
 * There are 6 contests, 4 of which are important and you cannot lost more than k=3 of them.
 * You can get the maximum luck balance by losing all unimportant contests(index = 4, 5) and the first, second and fourth(index = 0, 1, 3) important contests.
 * So the total luck balance is 5 + 2 - 1 + 8 + 10 + 5 = 29.
 * @solution To achieve the maximum luck balance, you need to lose as many contests as possible.
 * First, you can lost all unimportant contests.
 * Second, among important contests, lose k contests which have the highest luck point number.
 * @param {number} k The number of important contests that you can lose.
 * @param {array} contests A 2D integer array
 * @returns {number} The maximum luck balance achievable
 * @source https://www.hackerrank.com/challenges/luck-balance
 */
function solution(k, contests) {
  const sortedContests = contests.sort((a, b) => (a[0] > b[0] ? -1 : 1)); // Sort contests by the luck points.
  let maxLuck = 0;
  let importantLost = 0;

  for (let contest of sortedContests) {
    if (contest[1] === 0) {
      // Lose unimportant contest.
      maxLuck += contest[0];
      continue;
    }
    if (importantLost < k) {
      // Lose important contest.
      maxLuck += contest[0];
      importantLost++;
    } else {
      // If k important contests are lost, you will have to win the important contests.
      maxLuck -= contest[0];
    }
  }
  return maxLuck;
}

module.exports = { solution };
