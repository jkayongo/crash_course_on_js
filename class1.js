let num1 = 10;
num1 += 10;//num1 = num1 + 10
console.log(num1);
let num2 = 10;
num2 /= 10;//num2 = num2/10
console.log(num2);
let studentName = "Joshua";
 studentName += " Kayongo";
 console.log(studentName);
 console.log(typeof(studentName));
 //object literal
 const person = {firstName: "Moses", lastName: "Kalema"}
 console.log(typeof(person));
 console.log("The person is: " + person.firstName + " " + person.lastName);
 //functions
 function multiply(number1, number2){
    return number1 * number2
 }
 //calling the function
 let result = multiply(7,2);
 console.log("The result is : " + result);
