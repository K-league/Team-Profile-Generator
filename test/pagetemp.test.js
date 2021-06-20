const pagetemp = require("../src/pagetemp");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

const index = require("../index");

describe("Test page template generation", () => {
    
    describe("Test manager card generator", () => {
        it("Should render the manager card with the correct information", () => {
            const manager = new Manager("manager", "01", "manager@email.com", "555-555-5555")
            const card = pagetemp.generateManagerCard(manager);
            expect(card).toContain(`<h5 class="card-title">manager</h5>`);
            expect(card).toContain(`ID: 01`);
            expect(card).toContain(`<h6 class="card-subtitle mb-2 text-muted">Manager</h6>`);
            expect(card).toContain("Office Number: 555-555-5555");
            expect(card).toContain(`<a href="mailto:manager@email.com" class="card-link">manager@email.com</a>`);
        });
    });

    describe("Test engineer card generator", () => {
        it("Should render the engineer card with the correct information", () => {
            const engineer = new Engineer("engineer", "02", "engineer@email.com", "gitprofile")
            const card = pagetemp.generateEngineerCard(engineer);
            expect(card).toContain(`<h5 class="card-title">engineer</h5>`);
            expect(card).toContain(`ID: 02`);
            expect(card).toContain(`<h6 class="card-subtitle mb-2 text-muted">Engineer</h6>`);
            expect(card).toContain(`<a href="http://github.com/gitprofile" target="_blank">gitprofile</a>`);
            expect(card).toContain(`<a href="mailto:engineer@email.com" class="card-link">engineer@email.com</a>`);
        });
    });

    describe("Test intern card generator", () => {
        it("Should render the intern card with the correct information", () => {
            const intern = new Intern("intern", "03", "intern@email.com", "UT")
            const card = pagetemp.generateInternCard(intern);
            expect(card).toContain(`<h5 class="card-title">intern</h5>`);
            expect(card).toContain(`ID: 03`);
            expect(card).toContain(`<h6 class="card-subtitle mb-2 text-muted">Intern</h6>`);
            expect(card).toContain(`School: UT`);
            expect(card).toContain(`<a href="mailto:intern@email.com" class="card-link">intern@email.com</a>`);
        });
    });

    describe("Test generate the page", () => {
        const team = [
            new Manager("manager", "01", "manager@email.com", "555-555-5555"),
            new Intern("intern", "02", "intern@email.com", "UT"),
            new Engineer("engineer", "03", "eng3@email.com", "git03"),
            new Engineer("engineer", "04", "eng4@email.com", "git04"),
            new Engineer("engineer", "05", "eng5@email.com", "git05"),
            new Engineer("engineer", "06", "eng6@email.com", "git06"),
            new Engineer("engineer", "07", "eng7@email.com", "git07")
        ];
        const page = pagetemp.generateHtml(team);
        expect(page.slice(0, 15) === "<!DOCTYPE html>").toBeTruthy();//starts with html tag
        expect(page).toContain(`<h1 class="display-4 center"><center>My team</center></h1>`);
        expect(page).toContain(`manager@email.com`);
        expect(page).toContain(`intern@email.com`);
        expect(page).toContain("eng3@email.com");
        expect(page).toContain("eng4@email.com");
        expect(page).toContain("eng5@email.com");
        expect(page).toContain("eng6@email.com");
        expect(page).toContain("eng7@email.com");
    })
})