const Manager = require("../lib/Manager");
test("Can we get role via getRole?", () => {
    const testValue = "Manager"
    const e = new Manager(testValue)
    expect(e.getRole()).toBe(testValue)
})
test("Can we get office number via getOfficeNumber?", () => {
    const testValue = "?"
    const e = new Manager(testValue)
    expect(e.getOfficeNumber()).toBe(testValue)
})