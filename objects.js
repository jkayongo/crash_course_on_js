//create the object using an object literal.here we create an empty project
const car = {};
//add properties to the object
car.name = "subaru";
car.model = 2000;
car.importer = "Saad";
console.log(car);
//creating an object using the new key word
const teacher = new Object();
//add properties
teacher.id = 1;
teacher.name = "Mbappe Kylian";
teacher.module = "machine learning";
teacher.department = "Refactory"
teacher.details = function(){
    return "I am" + " " + this.name + " " + "and i teach" + " " + this.module;
}
console.log(teacher)
console.log(teacher.details());
//accessing the object
console.log("we have " + teacher.module + " by " + teacher.name);
//accessing the object
console.log(teacher["name"] + " teaches" + " " + teacher["module"]);

const student = {
    student_name : "Karungi Sheebah",
    student_course : "Procurement and logistics management",
    intern_base : "Ernest&Young",
    student_details : function(){
        return "student_name: " + this.student_name + " " + "course: " + this.student_course
    }
}
const employee = {
    employee_name : "Karungi Sheebah",
    department : "Procurement and logistics management",
    partner : "Ernest&Young",
    employee_details : function(){
        return "employee_name: " + this.employee_name + " " + "department: " + this.department;
    },
    nationality : "Ugandan"
}
console.log(employee.employee_details());
//displaying properties in a loop
for(let key in employee){
    console.log(key + " : " + employee[key]);
}
//displaying properties using Object.values-it creates an array from the property values.
const employeeArray = Object.values(employee);
console.log(employeeArray)
//displaying properties using Object.entries-Turns the object into an array of [key, value] pairs.
//Each pair is stored in its own small array: [key, value].
const employeeData = Object.entries(employee);
for(let [key, value] of employeeData){
    console.log(key + ": " + value);
}

//object constructor
function Car(carName, model, capacity){
    this.carName = carName;
    this.model = model;
    this.capacity = capacity;
}
//now we can use new Car() to create many new car objects.
const car1 = new Car("murano", 2009, "5 seater");
for(let key in car1){
    console.log(key + ": " + car1[key])
}
const car2 = new Car("hilux", 200, "4 seater");
const car3 = new Car("pajero", 1995, "6 seater");
//string interpolation
let product = "chips&chicken";
let price = 20000;
let message = `Order made is ${product} for ${price},thank you for shopping with us`;
console.log(message);




