function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}


function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let fullPrice = (originalPrice * (vatRate / 100)) + originalPrice
  return Number(fullPrice.toFixed(2))
}


function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let salePrice = originalPrice - (originalPrice * (reduction / 100))
  return Number(salePrice.toFixed(2))
}


function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  let length = str.length
  let middle = Math.floor (length/2);
  if(length % 2 === 0) {
    return str[middle -1] + str[middle]
  } else {
    return str[middle]
  }
}


function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("")
  return joinArray
}
// also could be done as return word.split("").reverse().join("")


function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let newArray = [];
  for (i = 0; i < words.length; i++){
    newArray[i] = reverseWord(words[i]);
  }
  return newArray;
}


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let linuxUsers = 0
  for(let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux") {
      linuxUsers +=1;
    }
  }
  return linuxUsers;
}


function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let count = 0

  scores.forEach(sumOf);

  function sumOf(score) {
    count += score;
}
  let mean = (count / scores.length).toFixed(2)
  return Number(mean)
}



function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if(n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if(n % 3 === 0) {
    return "fizz";
  } else if(n % 5 === 0) {
    return "buzz";
  } else return n
}



module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
