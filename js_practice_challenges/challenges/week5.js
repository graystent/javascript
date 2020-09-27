const findNextNumber = (nums, n) => {
    if (nums === undefined) throw new Error("nums is required");
    if (n === undefined) throw new Error("n is required");
    // Your code here!
    let i = nums.indexOf(n);
    if (i >= 0 && i < nums.length - 1) {
        let nextNumber = nums[i + 1];
        return nextNumber
    }
    else return null
  };
  
  const count1sand0s = str => {
    if (str === undefined) throw new Error("str is required");
    // Your code here!
    const frequencies = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (frequencies[char] === undefined) {
            frequencies[char] = 1
        } else {
            frequencies[char] += 1
        }
    } return frequencies
  };
  
  const reverseNumber = n => {
    if (n === undefined) throw new Error("n is required");
    // Your code here!
    n = n + "";
    return Number(n.split("").reverse().join(""));
  };
  
  const sumArrays = arrs => {
    if (arrs === undefined) throw new Error("arrs is required");
    // Your code here!
    if (arrs === undefined) throw new Error("arrs is required");
    // Your code here!
    let merged = [].concat(...arrs)
    let sumOf = 0
    for (let i = 0; i < merged.length; i++)
        sumOf += merged[i];
    return sumOf
  };
  
  const arrShift = arr => {
    if (arr === undefined) throw new Error("arr is required");
    // Your code here!
    if (arr.length >= 2) {
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
    } else {
        arr;
    }
    return arr
  };
  
  const findNeedle = (haystack, searchTerm) => {
    if (haystack === undefined) throw new Error("haystack is required");
    if (searchTerm === undefined) throw new Error("searchTerm is required");
    // Your code here!
    const values = Object.values(haystack);
    for(let val of values){
      if(typeof(val)==="string"){
        let str = val.toLowerCase();
        let needle = searchTerm.toLowerCase();
        if(str.includes(needle)){
          return true;
        }
      }
    }
    return false;
  };
  
  const getWordFrequencies = str => {
    if (str === undefined) throw new Error("str is required");
    // Your code here!
    const arr = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ");
    const frequencies = {};
    for (let i = 0; i < arr.length; i++) {
        const words = arr[i];
        if (frequencies[words] === undefined) {
            frequencies[words] = 1;
        } else {
            frequencies[words] += 1;
        }
    } return frequencies
  };
  
  module.exports = {
    findNextNumber,
    count1sand0s,
    reverseNumber,
    sumArrays,
    arrShift,
    findNeedle,
    getWordFrequencies
  };