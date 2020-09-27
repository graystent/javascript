// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  return Object.keys(object).length;
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  const arrayOfvalues = Object.values(object);

  return Math.min(...arrayOfvalues)
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
//   let highestValue; 
//   for(let key in object) {
//     if(highestValue === undefined ||object [key] > highestValue) {
//       highestValue = object[key]
//     }
//   } return highestValue;
// }
const arrayOfvalues = Object.values(object);

return Math.max(...arrayOfvalues);
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  const objClone = Object.assign({}, object);
  return objClone;
}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  for (let value in object) {
    if (value === key) {
      return object[value];
    }
  } 
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  for (let obj in object) {
    if (obj === key) {
      return true;
    }
  }
  return false;
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  let total = 0;
  for (let key in object) {
    if (typeof object[key] === "number") {
      total += object[key];
    }
  }
  return total;
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  let newObj = {};
  for (let key in object) {
    // const currentObjValue = object[key];
    // newObj[currentObjValue] = key;
    newObj[`${object[key]}`] = key;
  }
  return newObj;
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  const obj = {};
  for (const arrObj of arr) {
    for (let key in arrObj) {
      obj[`${key}`] = arrObj[key];
    }
  }
  return obj;
}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. 
  It receives an object and a matcher function. It should test each value in the object against the matcher function 
  and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {
  for (let val in obj) {
    if (matcherFunc(obj[val])) {
      return obj[val]
    }
  } return null;
}

/*
  This function allows you to test whether every value in an object matches a certain criteria. 
  For example, is every value greater than 100? The function receives an object and a tester function. 
  If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {
  for (let val in obj) {
    if (func(obj[val])) {
      return true
    } else {return false}
  }
}

/*
  This function allows you to test whether some values in an object match a certain criteria. 
  For example, are at least some of the values greater than 100? The function receives an object and a tester function. 
  If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {
  for (let val in obj) {
    if (func(obj[val])) {
      return true
    } else {return false}
  }
}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
