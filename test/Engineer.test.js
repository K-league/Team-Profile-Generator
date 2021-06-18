const Engineer = require("../lib/Engineer")
test("Can we get github via getGithub?", () => {
    const testValue = "K-League"
    const e = new Engineer(testValue)
    expect(e.getGitHub()).toBe(testValue)
})
test ("can we get role via getRole?", () => {
    const testValue = "Engineer"
    const e = new Engineer(testValue)
    expect(e.getRole()).toBe(testValue)
})