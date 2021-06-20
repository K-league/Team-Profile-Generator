const Manager = require("../lib/Manager");
describe("Test manager class for role and office behaviors", () => {
    it("has the right role", () => {
        let manager = new Manager("manager", 1, "manager@example.com", "555-555-5555")
        expect(manager.getRole()).toBe("Manager");
    });
    it("has the right office number", () => {
        let manager = new Manager("manager", 1, "manager@example.com", "555-555-5555")
        expect(manager.getOfficeNumber()).toBe("555-555-5555");
    });
})