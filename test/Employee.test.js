//can we get name via name
const Employee = require("../lib/Employee");
describe("Test employee base class for all generic atributes", () => {
    it("Has the right name name via getName?", () => {
        //body of tst
        const testValue = "Kay"; //what I want to test
        const e = new Employee(testValue, 1, "employee@email.com"); //event to create new emp and pass in tst val
        expect(e.getName()).toBe(testValue); //we want this event to be the test value
    });
    it("Has the right email via getEmail?", () => {
        const testValue = "kay@test.com";
        const e = new Employee("employee", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });
    it("Has the right role via getRole?", () => {
        const testValue = "Employee";
        const e = new Employee("employee", 1, "employee@email.com");
        expect(e.getRole()).toBe(testValue);
    });
    it("Has the right id via getID?", () => {
        const testValue = "?";
        const e = new Employee("employee", testValue, "employee@email.com");
        expect(e.getId()).toBe(testValue);
    });
})
