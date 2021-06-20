class Employee {
    constructor(name, id, email){
        this.name = name,
        this.id = id,
        this.email = email
    }
    getName(){
        return this.name
    };

    getRole(){
        return "Employee"
    };
    
    getId(){
        return this.id
    };
    
    getEmail(){
        return this.email
    };

    render(){
        return `${this.getName()}, ${this.getRole()}, ${this.getId()}, ${this.getEmail()}`
    }
}

module.exports = Employee;