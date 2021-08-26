const Manager = require("../lib/manager");

describe("getOfficeNumber", () => {
  it("should return the office num key value as an integer", () => {
    const int = 15;
    const result = new Manager(
      "Brice",
      1,
      "bcb35b@gmail.com",
      15
    ).getOfficeNumber();

    expect(result).toEqual(int);
  });
});

describe("getRole", () => {
  it("should return the role key value as a string", () => {
    const str = "Manager";
    const result = new Manager("Brice", 1, "bcb35b@gmail.com", 15).getRole();

    expect(result).toEqual(str);
  });
});
