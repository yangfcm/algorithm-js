const { solution: permutations } = require("./permutations");
const { solution: combinations } = require("./combinations");
/**
 * @name solve24
 * @description The 24 Game tests a person's mental arithmetic.
 * The aim of the game is to arrange four numbers in a way that when evaluated, the result is 24
 * Implement a function that takes a string of four digits as its argument,
 * with each digit from 1 to 9 (inclusive) with repetitions allowed,
 * and returns an arithmetic expression that evaluates to the number 24.
 * If no such solution exists, return an empty string ''.
 * @example solve24("4878") ->	(7-8/8)*4
            solve24("1234") ->	3*1*4*2
            solve24("6789") ->	(6*8)/(9-7)
            solve24("1127") ->	(1+7)*(2+1)
            solve24("1111") -> no solution exists.
 * @param {string} arg A string to represent 4 numbers.
 * @returns {string} A string to represent the solution to the 24 game.
 * @solution The solution is to consider all combinations of all the numbers, operators and orders.
 * First there are 4 * 3 * 2 * 1 = 24 combinations of order of numbers.
 * For a particular order of numbers, every two numbers can have 4 operators, so there are 4 * 3(4 numbers) = 12 combinations of operators.
 * Parentheses can change the order of operations. There are 7 possible parentheses combinations:
 * Take 1, 2, 3, 4 as an example:
 * No parentheses(1): 1 2 3 4
 * One parentheses(5): (1 2) 3 4, (1 2 3) 4, 1 (2 3) 4, 1 (2 3 4), 1 2 (3 4)
 * Two parentheses(1): (1 2) (3 4)
 * So there are 24 * 12 * 7 = 10752 different possible equations. Test each equation and return the one whose result is evaluated as 24.
 * @source https://www.freecodecamp.org/learn/rosetta-code/rosetta-code-challenges/24-game
 */
function solution(arg) {
  function areAlmostEqual(number1, number2) {
    const ACCEPTABLE_DIFF = 0.000001;
    return Math.abs(number1 - number2) < ACCEPTABLE_DIFF;
  }

  // Get four numbers from argument and validate the numbers.
  let isValidArg = true;
  if (typeof arg !== "string") {
    throw new Error("Invalid argument");
  }
  const numbers = arg.split("");
  if (numbers.length !== 4) {
    isValidArg = false;
  } else {
    for (const number of numbers.map((n) => parseInt(n))) {
      if (isNaN(number)) {
        isValidArg = false;
        break;
      }
      if (!(number >= 1 && number <= 9)) {
        isValidArg = false;
        break;
      }
    }
  }
  if (!isValidArg) {
    throw new Error("Invalid argument");
  }

  // Find out all UNIQUE combinations for four numbers.
  const numberCombinations = permutations(numbers).filter(
    (combination, index, combinations) => {
      return !combinations.slice(0, index).some((anotherCombination) => {
        return (
          combination.length === anotherCombination.length &&
          combination.every((element, i) => element === anotherCombination[i])
        );
      });
    }
  );

  const operators = ["+", "-", "*", "/"];
  const operatorCombinations = combinations(operators, 3);

  let equation = "";
  for (const numbers of numberCombinations) {
    for (const operators of operatorCombinations) {
      equation =
        numbers[0] +
        operators[0] +
        numbers[1] +
        operators[1] +
        numbers[2] +
        operators[2] +
        numbers[3];
      if (areAlmostEqual(eval(equation), 24)) {
        return equation;
      }

      // Change orders with parentheses
      equation =
        "(" +
        numbers[0] +
        operators[0] +
        numbers[1] +
        ")" +
        operators[1] +
        numbers[2] +
        operators[2] +
        numbers[3];
      if (areAlmostEqual(eval(equation), 24)) {
        return equation;
      }

      equation =
        "(" +
        numbers[0] +
        operators[0] +
        numbers[1] +
        operators[1] +
        numbers[2] +
        ")" +
        operators[2] +
        numbers[3];
      if (areAlmostEqual(eval(equation), 24)) {
        return equation;
      }

      equation =
        numbers[0] +
        operators[0] +
        "(" +
        numbers[1] +
        operators[1] +
        numbers[2] +
        ")" +
        operators[2] +
        numbers[3];
      if (areAlmostEqual(eval(equation), 24)) {
        return equation;
      }

      equation =
        numbers[0] +
        operators[0] +
        "(" +
        numbers[1] +
        operators[1] +
        numbers[2] +
        operators[2] +
        numbers[3] +
        ")";
      if (areAlmostEqual(eval(equation), 24)) {
        return equation;
      }

      equation =
        numbers[0] +
        operators[0] +
        numbers[1] +
        operators[1] +
        "(" +
        numbers[2] +
        operators[2] +
        numbers[3] +
        ")";
      if (areAlmostEqual(eval(equation), 24)) {
        return equation;
      }

      equation =
        "(" +
        numbers[0] +
        operators[0] +
        numbers[1] +
        ")" +
        operators[1] +
        "(" +
        numbers[2] +
        operators[2] +
        numbers[3] +
        ")";
      if (areAlmostEqual(eval(equation), 24)) {
        return equation;
      }
    }
  }
  return "";
}

module.exports = { solution };
