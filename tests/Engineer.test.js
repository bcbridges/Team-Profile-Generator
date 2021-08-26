const Engineer = require("../lib/engineer");

describe("getGithub", () => {
  it("should return the GitHub username key value as a string", () => {
    const str = "bcbridges";
    const result = new Engineer(
      "Brice",
      1,
      "bcb35b@gmail.com",
      "bcbridges"
    ).getGithub();

    expect(result).toEqual(str);
  });
});

describe("getRole", () => {
  it("should return the role key value as a string", () => {
    const str = "Engineer";
    const result = new Engineer(
      "Brice",
      1,
      "bcb35b@gmail.com",
      "bcbridges"
    ).getRole();

    expect(result).toEqual(str);
  });
});
