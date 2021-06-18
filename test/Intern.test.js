const Intern = require("../lib/Intern");
test ("Can we get school via getSchool?", () => {
    const testValue = "Southwestern University"
    const e = new Intern(testValue)
    expect(e.getSchool()).toBe(testValue)
})
test("Can we get role via getRole?", () => {
    const testValue = "Intern"
    const e = new Intern(testValue)
    expect(e.getRole()).toBe(testValue)
})