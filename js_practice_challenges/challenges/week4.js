function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let smallNums = nums.filter((num) => num < 1);
  return smallNums
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let correctNames = names.filter((names) => names.charAt(0) === char );
  return correctNames
} 

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let verbs = words.filter((words) => words.charAt(0) === "t" && words.charAt(2) === " ");
  return verbs
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let ints = nums.filter((nums) => nums % 1 === 0);
  return ints
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cities = users.map(users => (users.data.city.displayName));
  return cities
} 


function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.map(num => {
    let square = Math.sqrt(num);
    return Number(square.toFixed(2));
  });
} 

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let sentenceMatch = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().indexOf(str.toLowerCase()) >= 0) {
      sentenceMatch.push(sentences[i]);
    }
  }
  return sentenceMatch;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let longestSide = []
  for (let i = 0; i < triangles.length; i++) {
    let maximum = Math.max.apply(Math, triangles[i]);
    longestSide.push(maximum);
  }
  return longestSide;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
