const scores = [1,2,3,4,5,6,7];
// for(let score in scores){
//     console.log(scores[score]);
// }
scores.forEach(function(score, index, array){
    console.log("score: " + score);
    console.log("index: " + index);
    console.log("array: " + array);
    console.log("..............................")
})

const universities = ["Makerere", "Kyambogo", "Ucu", "Kabale"];
//for of-For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
for(let university of universities){
        console.log(university);
        console.log(".......................................");
}
//looping over a string
const course = "Data science and machine learning";
for(let letter of course){
    console.log(letter);
}
//while loop
//initialization
//If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
let i = 0;
while(i < 10){
    console.log("The number is: " + i);
    i++;
}
//do while loop-Always runs at least once — even if the condition is false.
//Do not forget to increase the variable used in the condition, otherwise the loop will never end!
let counter = 0;
do{
    console.log("The number is: " + counter);
    counter++;
}while(counter < 10);
