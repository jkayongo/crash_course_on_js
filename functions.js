//non parmeterized function-a function that does not take any argument/input when defined.
//we use them when we want to something fixed like logginga welcome message.
//we use them when we don’t need input from the caller.
function greetings(){
    console.log("Hey,how are you doing today");
}
greetings(); //function invokation/call

//parameterized function
function welcomeUser(userName){
    return `Hey, ${userName}! what are we doing today`;
}
const message = welcomeUser("Rasmus Hojlund");
console.log("............................"+message);

//arrow functions or fat arrow functions
const sum = (number1, number2) =>{
    return number1 + number2;
}
console.log(sum(4,2));
//If you have one line, you can skip {} and return.
const product = (value1, value2) => value1 * value2;
console.log("The product is: " + product(6,6));