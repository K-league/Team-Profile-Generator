const inquirer = require("inquirer");
const index = require("../index");
const Manager = require("../lib/Manager");
jest.mock("inquirer");
const {addEngineer, addIntern, addManager} = require("../team_functions");

describe("Test team functions", () => {
    
    describe("test addManager", () => {
        // stub inquirer
        beforeEach(() => {
            let manager_data = {name: "name", employee_id: 1, email: "manager@email.com", officeNumber: "123"}
            inquirer.prompt.mockReturnValue(Promise.resolve(manager_data))
        })

        it("adds manager as the first member of the team", (done) => {
            addManager((team) => {
                expect(team.length).toBe(1);
                expect(team[0].getRole()).toBe("Manager");
                expect(team[0].getOfficeNumber()).toBe("123");
                done();
            });
        })
    });

    describe("test add engineer", () => {
        beforeEach(() => {
            let engineer_data = {name: "engineer", employee_id: 2, email: "engineer@email.com", github: "hubgit"}
            inquirer.prompt.mockReturnValue(Promise.resolve(engineer_data))
        })
        it("adds engineer to a team",  (done) => {
            addEngineer([new Manager("1","2","3","4")], (team) => {
                // two people
                expect(team.length).toBe(2);
                expect(team[0].getRole()).toBe("Manager");
                // engineer
                expect(team[1].getRole()).toBe("Engineer");
                expect(team[1].getGitHub()).toBe("hubgit");
                done();
            })
        })
    })

    describe("test add intern", () => {
        beforeEach(() => {
            let engineer_data = {name: "intern", employee_id: 2, email: "intern@email.com", school: "UT"}
            inquirer.prompt.mockReturnValue(Promise.resolve(engineer_data))
        })
        it("adds engineer to a team",  (done) => {
            addIntern([new Manager("1","2","3","4")], (team) => {
                // two people
                expect(team.length).toBe(2);
                expect(team[0].getRole()).toBe("Manager");
                // engineer
                expect(team[1].getRole()).toBe("Intern");
                expect(team[1].getSchool()).toBe("UT");
                done();
            })
        })
    })
})