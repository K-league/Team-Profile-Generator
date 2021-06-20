const Engineer = require("../lib/Engineer")
describe("Test engineer class for role and github behaviors", () => {
    it("Has right github via getGithub?", () => {
        const testValue = "K-League"
        const e = new Engineer("engineer name", 1, "engineer@email.com", testValue)
        expect(e.getGitHub()).toBe(testValue)
    });
    it("Has the right role via getRole?", () => {
        const testValue = "Engineer"
        const e = new Engineer("engineer name", 1, "engineer@email.com", "github")
        expect(e.getRole()).toBe(testValue)
    });
})
