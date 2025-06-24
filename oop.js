class Employee {
    constructor(name, id, gender, age, education) {
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.education = education;
    }
    displayEmployeeDetails() {
        return `
        Name: ${this.name}
        Gender: ${this.gender}
        Education: ${this.education}
        `
    }
}
//create objects of the class Employee
let employee1 = new Employee("Ruben Amorim", 1, "male", 40, "Masters degree");
console.log(employee1);
let employee2 = new Employee("Samantha Mars", 2, "female", 87, "Bachelor's degree");
console.log(employee2);
let employee3 = new Employee("Casemiro Santos", 3, "male", 35, "certificate");
console.log(employee3);
const headCoach = employee1.displayEmployeeDetails();
console.log(`Manchester united head coach details: ${headCoach}`)
console.log(".......................................");
console.log(employee2.gender);
