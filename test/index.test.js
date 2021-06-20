const inquirer = require("inquirer");
const team_functions = require("../team_functions");
jest.mock("../team_functions");
jest.mock("inquirer");
jest.spyOn(process, 'exit').mockImplementation(() => {});


const index = require("../index");

describe("Test main app flow", () => {
    
    describe("build team", () => {
        it("will add engineer if prompted", (done) => {
            inquirer.prompt.mockReturnValue(Promise.resolve({action: "Add engineer"}))
            team_functions.addEngineer.mockImplementation((team) => {})    
            index.buildTeam([]).then(() => {
                expect(team_functions.addEngineer).toBeCalledTimes(1);
                done();
            });
        });

        it("will add intern if prompted", (done) => {
            inquirer.prompt.mockReturnValue(Promise.resolve({action: "Add intern"}))
            team_functions.addIntern.mockImplementation((team) => {})    
            index.buildTeam([]).then(() => {
                expect(team_functions.addIntern).toBeCalledTimes(1);
                done();
            });
        });

        afterEach(() => {
            jest.clearAllMocks();
        });
    })
})