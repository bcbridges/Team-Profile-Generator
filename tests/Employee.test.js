const Employee = require("../lib/employee");

describe("getName", () => {
  it("should return the name key value as a string", () => {
    const str = "Brice";
    const result = new Employee("Brice", 1, "bcb35b@gmail.com").getName();

    expect(result).toEqual(str);
  });
});

describe("getID", () => {
  it("should return the id key value as an integer", () => {
    const int = 1;
    const result = new Employee("Brice", 1, "bcb35b@gmail.com").getID();

    expect(result).toEqual(int);
  });
});

describe("getEmail", () => {
  it("should return the email key value as a string", () => {
    const str = "bcb35b@gmail.com";
    const result = new Employee("Brice", 1, "bcb35b@gmail.com").getEmail();

    expect(result).toEqual(str);
  });
});

describe("getRole", () => {
  it("should return the role key value as a string", () => {
    const str = "Employee";
    const result = new Employee("Brice", 1, "bcb35b@gmail.com").getRole();

    expect(result).toEqual(str);
  });
});
