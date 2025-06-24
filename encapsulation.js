//modern and cleaner way of encapsulation
//you cannot directly access or change variables declared with # outside the class.
//so grade and tuition_balance are encapsulated
//you can only access and change them through methods like getGrade(), setGrade
class Student{
    #grade;
    #tuition_balance;
    constructor(student_name, student_program, grade, tuition_balance){
        this.student_name = student_name;
        this.student_program = student_program;
        //private fields
        this.#grade = grade;
        this.#tuition_balance = tuition_balance;
    }
    setGrade(new_result){
        this.#grade = new_result;
    }
    getGrade(){
        return this.#grade;
    }

}
const student1 = new Student("Mohammed Salah", "Sports science", "first class", 10000);
console.log("...........................................");
console.log(student1.balance);
console.log("...........................................");
console.log(student1.student_name + " Grade: " + student1.getGrade());
student1.setGrade("second class honours");
console.log("...........................................");
console.log(student1.student_name + " Grade: " + student1.getGrade());

//Using let + closure (old-school way)
class Lecturer{
    constructor(lecture_name, course, salary){
        this.lecture_name = lecture_name;
        this.course = course;
        //private variables are hidden under the constructor
        let salary_recieved = salary;
        this.setSalary = function(deposit){
            salary_recieved = deposit;
        }
        this.getSalary = function(){
            return salary_recieved;
        }
    }
}
const lecture1 = new Lecturer("Pep Santos", "Tactics and Strategy", 20000, "Marie Antionette");
console.log("...........................................");
console.log(lecture1);
