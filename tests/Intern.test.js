const Intern = require("../lib/intern");

describe("getSchool", () => {
  it("should return the school key value as a string", () => {
    const str = "Missouri S&T";
    const result = new Intern(
      "Brice",
      1,
      "bcb35b@gmail.com",
      "Missouri S&T"
    ).getSchool();

    expect(result).toEqual(str);
  });
});

describe("getRole", () => {
  it("should return the role key value as a string", () => {
    const str = "Intern";
    const result = new Intern(
      "Brice",
      1,
      "bcb35b@gmail.com",
      "Missouri S&T"
    ).getRole();

    expect(result).toEqual(str);
  });
});
