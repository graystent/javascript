function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let squared = []
  for(let i = 0; i < nums.length; i++) {
    squared.push(nums[i] * nums[i]);
  } return squared;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let sentence = [];
  for(let i = 1 ; i < words.length ; i++){
    sentence.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  return words[0] + sentence.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let count  = 0
  for(let i = 0; i < people.length; i++) {
    count += people[i]["subjects"].length;
  } return count
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  let isIncluded = false;

  for(let item of menu) {
    if (item.ingredients.includes(ingredient)) {
    isIncluded = true;
    } 
}
return isIncluded
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
// retun an array of number that appear in both arrays, in order, only once.
let dupes = arr1.filter(function (n) {
  return arr2.includes(n);
});
return [...new Set(dupes)].sort();
}



module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
}