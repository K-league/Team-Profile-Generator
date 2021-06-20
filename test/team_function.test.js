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
        it("has manager prompts with correct questions", (done) => {
            addManager(() => {
                const questions = inquirer.prompt.mock.calls[0][0];
                expect(questions[0].message).toBe("What is the Manager's name?");
                expect(questions[1].message).toBe("What is the Manager's employee id?");
                expect(questions[2].message).toBe("What is the Manager's email?");
                expect(questions[3].message).toBe("What is the Manager's Office number?");
                done()
            })
        });

        it("adds manager as the first member of the team", (done) => {
            addManager((team) => {
                expect(team.length).toBe(1);
                expect(team[0].getRole()).toBe("Manager");
                expect(team[0].getOfficeNumber()).toBe("123");
                done();
            });
        });
        afterEach(() => {
            jest.clearAllMocks();
        });
    });

    describe("test add engineer", () => {
        beforeEach(() => {
            let engineer_data = {name: "engineer", employee_id: 2, email: "engineer@email.com", github: "hubgit"}
            inquirer.prompt.mockReturnValue(Promise.resolve(engineer_data))
        });
        it("has engineer prompts with correct questions", (done) => {
            addEngineer([], () => {
                const questions = inquirer.prompt.mock.calls[0][0];
                expect(questions[0].message).toBe("What is the Engineer's name?");
                expect(questions[1].message).toBe("What is the Engineer's employee id?");
                expect(questions[2].message).toBe("What is the Engineer's email?");
                expect(questions[3].message).toBe("What is the Engineer's github?");
                done()
            })
        });
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
        afterEach(() => {
            jest.clearAllMocks();
        });
    })

    describe("test add intern", () => {
        beforeEach(() => {
            let engineer_data = {name: "intern", employee_id: 2, email: "intern@email.com", school: "UT"}
            inquirer.prompt.mockReturnValue(Promise.resolve(engineer_data))
        });
        
        it("has intern prompts with correct questions", (done) => {
            addIntern([], () => {
                const questions = inquirer.prompt.mock.calls[0][0];
                expect(questions[0].message).toBe("What is the Intern's name?");
                expect(questions[1].message).toBe("What is the Intern's employee id?");
                expect(questions[2].message).toBe("What is the Intern's email?");
                expect(questions[3].message).toBe("What is the intern's school?");
                done()
            })
        });

        it("adds an intern to a team",  (done) => {
            addIntern([new Manager("1","2","3","4")], (team) => {
                // two people
                expect(team.length).toBe(2);
                expect(team[0].getRole()).toBe("Manager");
                // engineer
                expect(team[1].getRole()).toBe("Intern");
                expect(team[1].getSchool()).toBe("UT");
                done();
            })
        });

        afterEach(() => {
            jest.clearAllMocks();
        });
    })
})