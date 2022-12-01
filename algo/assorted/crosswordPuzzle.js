/**
 * @name crosswordPuzzle
 * @description Given a 10 x 10 crossword grid and an array of words. 
 * These words need to be filled into the grid. Cells are marked either + or -.
 * Cells marked with a - are to be filled with the word list. Print out the solution for the given crossword.
 * @example words = ["POLAND", "LHASA", "SPAIN", "INDIA"]
 * crossword = [
 *    '++++++++++',
      '+------+++',
      '+++-++++++',
      '+++-++++++',
      '+++-----++',
      '+++-++-+++',
      '++++++-+++',
      '++++++-+++',
      '++++++-+++',
      '++++++++++',
    ];
    The printed solution is like this: 
      '++++++++++'
      '+POLAND+++'
      '+++H++++++'
      '+++A++++++'
      '+++SPAIN++'
      '+++A++N+++'
      '++++++D+++'
      '++++++I+++'
      '++++++A+++'
      '++++++++++'
 * @source https://www.hackerrank.com/challenges/crossword-puzzle/problem
 */
function solution(crossword, words) {
  const wordPlaces = createWordPlaces(crossword, words);
  const solution = findSolution(words, wordPlaces, words);
  printSolution(solution, crossword);
}

/**
 * Find out the minimum length of the word from the given words list.
 * e.g. words = ['orange', 'blue', 'red', 'black']; -> 3 ('red' is the shortest word in the list.)
 * @param {array} words
 * @returns The length of shortest word.
 */
function findMinWordLength(words) {
  let minLength = words[0].length;
  for (let word of words) {
    if (word.length < minLength) minLength = word.length;
  }
  return minLength;
}

function createWordPlacesOnXDirection(crossword, words) {
  const minWordLength = findMinWordLength(words);
  const places = [];
  for (let i = 0; i < crossword.length; i++) {
    let linePlaces = [];
    for (let j = 0; j < crossword[i].length; j++) {
      const current = crossword[i][j];
      const previous = j >= 1 ? crossword[i][j - 1] : null;
      if (current === "-" && (linePlaces.length === 0 || previous === "-")) {
        linePlaces.push(`${i}-${j}`);
      } else {
        places.push(linePlaces);
        linePlaces = [];
      }
    }
    places.push(linePlaces);
  }
  return places.filter((line) => line.length >= minWordLength);
}

function createWordPlacesOnYDirection(crossword, words) {
  const minWordLength = findMinWordLength(words);
  const places = [];
  for (let i = 0; i < crossword.length; i++) {
    let linePlaces = [];
    for (let j = 0; j < crossword[i].length; j++) {
      const current = crossword[j][i];
      const previous = j >= 1 ? crossword[j - 1][i] : null;
      if (current === "-" && (linePlaces.length === 0 || previous === "-")) {
        linePlaces.push(`${j}-${i}`);
      } else {
        places.push(linePlaces);
        linePlaces = [];
      }
    }
    places.push(linePlaces);
  }
  return places.filter((line) => line.length >= minWordLength);
}

/**
 * Create an array where each element represents the places where words should be filled in.
 * @param {array} crossword 
 * @param {array} words 
 * @example 
 * crossword = [
      '++++++++++',
      '+------+++',
      '+++-++++++',
      '+++-++++++',
      '+++-----++',
      '+++-++-+++',
      '++++++-+++',
      '++++++-+++',
      '++++++-+++',
      '++++++++++',
    ];
  wordPlaces = [
    [ '1-1', '1-2', '1-3', '1-4', '1-5', '1-6' ],
    [ '4-3', '4-4', '4-5', '4-6', '4-7' ],
    [ '1-3', '2-3', '3-3', '4-3', '5-3' ],
    [ '4-6', '5-6', '6-6', '7-6', '8-6' ]
  ]
 * @returns 
 */
function createWordPlaces(crossword, words) {
  return [
    ...createWordPlacesOnXDirection(crossword, words),
    ...createWordPlacesOnYDirection(crossword, words),
  ];
}

/**
 * Given wordPlaces array created by function createWordPlaces() and a possible solution,
 * returns false if the solution can't match the wordPlaces, return a word map if it is the solution to find.
 * @param {array} wordPlaces
 * @param {array} solution
 * @example
 * wordPlaces = [
   [ '1-1', '1-2', '1-3', '1-4', '1-5', '1-6' ],
    [ '4-3', '4-4', '4-5', '4-6', '4-7' ],
    [ '1-3', '2-3', '3-3', '4-3', '5-3' ],
    [ '4-6', '5-6', '6-6', '7-6', '8-6' ]]
  solution = ['POLAND', 'SPAIN', 'LHASA', 'INDIA']
  returns => {
    '1-1': 'P',
    '1-2': 'O',
    '1-3': 'L',
    '1-4': 'A',
    '1-5': 'N',
    '1-6': 'D',
    '4-3': 'S',
    '4-4': 'P',
    '4-5': 'A',
    '4-6': 'I',
    '4-7': 'N',
    '2-3': 'H',
    '3-3': 'A',
    '5-3': 'A',
    '5-6': 'N',
    '6-6': 'D',
    '7-6': 'I',
    '8-6': 'A'
  }
 * @returns
 */
function checkSolution(wordPlaces, solution) {
  if (
    !Array.isArray(wordPlaces) ||
    !Array.isArray(solution) ||
    wordPlaces.length !== solution.length
  ) {
    // Check the validitiy of arguments.
    return false;
  }
  const wordMap = {};
  for (let i = 0; i < solution.length; i++) {
    const word = solution[i];
    const spaces = wordPlaces[i];
    // console.log(word, spaces);
    if (word.length !== spaces.length) return false;
    for (let j = 0; j < spaces.length; j++) {
      const mapKey = spaces[j];
      if (wordMap[mapKey] && wordMap[mapKey] !== word[j]) return false;
      wordMap[mapKey] = word[j];
    }
  }
  return wordMap;
}

/**
 * Find all possible permutations of the words list and match the wordPlaces.
 * If matched, return the solution and if not, continue looking.
 * It uses recursive algorithm.
 * @param {array} arr
 * @param {array} wordPlaces
 * @param {array} words
 * @returns
 */
function findSolution(arr, wordPlaces, words) {
  const permutationsArr = [];
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const remainingPermuted = findSolution(remaining, wordPlaces, words);
    for (let j = 0; j < remainingPermuted.length; j++) {
      const possibleSolution = [current, ...remainingPermuted[j]];
      if (possibleSolution.length === words.length) {
        const result = checkSolution(wordPlaces, possibleSolution);
        if (result) return result;
      }
      permutationsArr.push(possibleSolution);
    }
  }
  return permutationsArr;
}

/**
 * Given the crossword board and its corresponding solution, print the solution on console.
 * @param {array} solution
 * @param {array} crossword
 */
function printSolution(solution, crossword) {
  for (let i = 0; i < crossword.length; i++) {
    let line = "";
    for (let j = 0; j < crossword[i].length; j++) {
      const key = `${i}-${j}`;
      if (solution[key] && crossword[i][j] === "-") {
        line += solution[key];
      } else {
        line += crossword[i][j];
      }
    }
    console.log(line);
  }
}

module.exports = { solution };
