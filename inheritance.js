class Employee {
    constructor(employee_name, employee_id) {
        this.employee_name = employee_name;
        this.employee_id = employee_id;
    }
    work() {
        return `${this.employee_name} works as a software engineer`;
    }
}
 class Manager extends Employee{
    constructor(employee_name, employee_id, department){
        //call the parent constructor
        super(employee_name, employee_id);
        this.department = department;
    }
    assign_task(){
        return `${this.employee_name} heads the department of ${this.department}`;
    }
 }
 const manager1 = new Manager("Amad Diallo", 1, "Data science");
 console.log("........................................");
 console.log(manager1.assign_task());

 class Intern extends Employee{
    constructor(employee_name, employee_id, department, supervisor){
        super(employee_name, employee_id);
        this.department = department;
        this.supervisor = supervisor;
    }
    check_progress(){
        return `Hello, ${this.employee_name}! you sucessfully submitted your project.`;
    }
 }
 const intern1 = new Intern("Nama kelele Mbeumo", 1, "web development", "Jose Felix");
 console.log("........................................");
 console.log(intern1.work());
 console.log("........................................");
 console.log(intern1.check_progress());

