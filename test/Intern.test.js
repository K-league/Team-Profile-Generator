const Intern = require("../lib/Intern");
describe("Test intern class for role and school behaviors", () => {
    it("Has the right school via getSchool?", () => {
        const testValue = "Southwestern University"
        const e = new Intern("intern name", 1, "inter@email.com", testValue);
        expect(e.getSchool()).toBe(testValue);
    });
    it("Has the correct role via getRole?", () => {
        const testValue = "Intern"
        const e = new Intern("intern name", 1, "inter@email.com", "school");
        expect(e.getRole()).toBe(testValue);
    });
})
