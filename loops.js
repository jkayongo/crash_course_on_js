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
