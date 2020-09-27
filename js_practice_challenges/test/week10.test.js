const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/week10");

describe("sumDigits", () => {
    test("takes a number and returns the sum of all its digits", () => {
      expect(sumDigits(3674)).toBe(20);

    });
  
});

describe("createRange", () => {
    test("first takes a start number, and then an end number, and goes up each time between by the 'step' number", () => {
      expect(createRange(5, 13, 2)).toStrictEqual([5, 7, 9, 11, 13]);
    });
  
});

describe("getScreentimeAlertList", () => {
    test("returns username if usage over 100 mins on a given date", () => {
        const users = [
              {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                             { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                            ]
               },
               {
                username: "gray_1987",
                name: "Graham Stent",
                screenTime: [
                             { date: "2019-05-02", usage: { strava: 60, whatsApp: 20, facebook: 0, safari: 40} },
                             { date: "2019-06-13", usage: { strava: 20, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { strava: 20, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
               },
             ]
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234", "gray_1987"])
        expect(getScreentimeAlertList(users, "2019-05-14")).toEqual([])

    });
  
});

describe("hexToRGB", () => {
    test("Transforms hex code into RGB code", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
        expect(hexToRGB("#32CD32")).toEqual("rgb(50,205,50)");
    });
  
});

describe("findWinner", () => {
    test("", () => {
      expect(findWinner([])).toBe();
    });
  
});
