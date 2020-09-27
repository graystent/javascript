const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 60 when passed 50", () => {
    expect(utils.addVAT(50)).toBe(60);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.getHalfPrice", () => {
  test("returns 45 when passed 90", () => {
    expect(utils.makeHalfPrice(90)).toBe(45);;
  });
});

describe("utils.countBooks", () => {
  test("returns 4 when passed ['The Dry', 'Silent Patient', 'Woman in the Window', 'Kim']", () => {
    expect(utils.countBooks(['The Dry', 'Silent Patient', 'Woman in the Window', 'Kim'])).toBe(4);
  });
});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
    expect(utils.isInStock(book)).toBe(true);
  });
  test("returns false if the title is not in stock", () => {
    const book = {
      title: "Woman in the Window",
      author: "A J Finn",
      yearOfPublication: 2016,
      quantity: 0
    };
    expect(utils.isInStock(book)).toBe(false);
  });
});

  describe("utils.getTotalOrderPrice", () => {
    test("returns 54 when passed 15, 3", () => {
      expect(utils.getTotalOrderPrice(15, 3)).toBe(54);
    });
  });