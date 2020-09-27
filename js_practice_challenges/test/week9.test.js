const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
    
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
      expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    });
  
    test("if no multiples of 3 & 5 are found in the array, returns null", () => {
      expect(sumMultiples([1, 4, 7, 8, 1, 11])).toBe(null);
    });
  });
  
describe("isValidDNA", () => {
    test("returns true if string is a valid DNA string only containing C, G, T or A", () => {
      expect(isValidDNA("CGTA")).toBe(true);
      expect(isValidDNA("CGTD")).toBe(false);
    });
  
    test("entries are not case sensitive", () => {
      expect(isValidDNA("cGtA")).toBe(true);
    });
  
    test("any order accepted", () => {
      expect(isValidDNA("CTAG")).toBe(true);
    });
  
    test("If more or less than four characters, return 'not a valid DNA string'", () => {
      expect(isValidDNA("CTAGA")).toBe("not a valid DNA string");
      expect(isValidDNA("CT")).toBe("not a valid DNA string");
    });
  });
  
describe("getComplementaryDNA", () => {
    test("This function should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G.", () => {
      expect(getComplementaryDNA("TACG")).toBe("ATGC");
    });
  
    test("entries are not case sensitive", () => {
      expect(getComplementaryDNA("cgta")).toBe("GCAT");
    });
  
    test("If invalid DNA is passed (ie, less than four characters or different characters - failing the function above, return 'not a valid DNA string, throws an error'", () => {
     expect(() => { getComplementaryDNA ("test"); }).toThrow("not a valid DNA string");
   }); 
  });
  
describe("isItPrime", () => {

    test("returns true if a prime number", () => {
        expect(isItPrime(5)).toBe(true);
    });

    test("returns false if number can be divided by numbers other than itself and one", () => {
        expect(isItPrime(10)).toBe(false);
    });

    test("works for large numbers", () => {
        expect(isItPrime(1217)).toBe(true);
    });
    
describe("createMatrix", () => {

    test("returns a matrix of the fill, with the number of arrays and the number of items in the arrays being equal to n", () => {
        expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
        });

    test("works if fill is a number type", () => {
        expect(createMatrix(6, 7)).toEqual([[7, 7, 7, 7, 7, 7], [7, 7, 7, 7, 7, 7], [7, 7, 7, 7, 7, 7], [7, 7, 7, 7, 7, 7], [7, 7, 7, 7, 7, 7], [7, 7, 7, 7, 7, 7]]);
        });
    });
    
    
describe("areWeCovered", () => {

    test("returns false if no staff are scheduled", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
    });

    test("if less than three staff are scheduled, returns false", () => {
        const staff = [
            { name: "Helen", rota: ["Friday", "Saturday", "Sunday"] },
            { name: "John", rota: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
            { name: "Hannah", rota: ["Friday", "Saturday", "Sunday"] },
            { name: "Rich", rota: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
            { name: "Tom", rota: ["Friday", "Saturday"] },
            { name: "Beth", rota: ["Friday", "Saturday", "Sunday"] }
        ]
        expect(areWeCovered(staff, "Monday")).toBe(false);
    });

    test("if three or more staff are scheduled, returns true", () => {
        const staff = [
          { name: "Helen", rota: ["Friday", "Saturday", "Sunday"] },
          { name: "John", rota: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
          { name: "Hannah", rota: ["Friday", "Saturday", "Sunday"] },
          { name: "Rich", rota: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
          { name: "Tom", rota: ["Friday", "Saturday"] },
          { name: "Beth", rota: ["Friday", "Saturday", "Sunday"] }
        ]
        expect(areWeCovered(staff, "Friday")).toBe(true);
    });

  });

});