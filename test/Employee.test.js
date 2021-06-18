//can we get name via name
const Employee = require("../lib/Employee");
test("Can we get a name via getName?", () => {
    //body of tst
    const testValue = "Kay" //what I want to test
    const e = new Employee(testValue) //event to create new emp and pass in tst val
    expect(e.getName()).toBe(testValue) //we want this event to be the test value
})
test("Can we get email via getEmail?", () => {
    const testValue = "kay@test.com"
    const e = new Employee(testValue)
    expect(e.getEmail()).toBe(testValue)
})
test("Can we get role via getRole?", () => {
    const testValue = "Jnr Dev"
    const e = new Employee(testValue)
    expect(e.getRole()).toBe(testValue)
})
test("Can we get id via getID?", () => {
    const testValue = "?"
    const e = new Employee(testValue)
    expect(e.getId()).toBe(testValue)
})