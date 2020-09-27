const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "Dracula"
        )
      ).toBe(true);
    });

    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "Jane Eyre"
        )
      ).toBe(false);
    });
  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with this letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });

    test("returns the number of books beginning with this letter", () => {
      expect(catalogueService.countBooksByFirstLetter("o")).toBe(1);
    });
  });

  describe("catalogueService.getQuantity", () => {
    test("returns the number of books in stock for this title", () => {
      expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns the number of books by the author", () => {
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
          { title: "2666", author: "Robert Bolaño", quantity: 17 },
          { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
        ]);
      });

    describe("catalogueService.checkQuantity", () => {
      test("returns true if there are at least as many books in stock as the given quantity", () => {
        expect(catalogueService.checkQuantity("By Night In Chile", 4)).toBe(true);
      });
    });

    test("returns false if there are at least as many books in stock as the given quantity", () => {
      expect(catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false);
    });
  });
});
