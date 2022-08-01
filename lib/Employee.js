class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }
}

let frank = new Employee(7, "frank", "frank2dank@gmail.com")
console.table(frank)

module.exports = Employee