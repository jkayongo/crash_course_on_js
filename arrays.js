const cars = ["ford", "subaru", "murano", "krugger", "tesla"];
console.log(cars);
//you can also create an array and then provide the elements.
const courses = [];
courses[0] = "micro economics";
courses[1] = "macro economics";
courses[2] = "entreprenuership";
courses[3] = "econometrics";
console.log(courses);
//acessing array elements
console.log(courses[3]);
console.log(courses.length)
//looping through array elements-for loop
for(counter = 0; counter < courses.length; counter++){
    console.log(courses[counter]);
}
//You can also use the Array.forEach() function:
courses.forEach(function(course){
    console.log("course offered: " + course);
});
//adding elements to an array.
courses.push("public policy");
console.log(courses);
//looping through nested arrays.
const schoolOfEconomicsStudents = [
    ["Elvis", "development economics"],
    ["John", "ats in economics"],
    ["Kai", "science in economics"],
    ["Opata", "masters of development economics"],
    ["Mutanga", "masters of arts in economics"]
]
for(let index in schoolOfEconomicsStudents){
    for(let i in schoolOfEconomicsStudents[index]){
        console.log(schoolOfEconomicsStudents[index][i]);
    }
}
schoolOfEconomicsStudents.forEach(function(bestStudents){
    console.log("best student: ");
    bestStudents.forEach(function(details){
        console.log(details)
    })
    console.log("...............");
})
//array methods
const availableCourses = courses.toString();
console.log(availableCourses);
console.log(courses);
courses.pop()
console.log(courses);
courses.push("rural finance")
console.log(courses);
const males = ["moses", "cranmar", "joab"];
const females = ["judith", "angella", "denesse"];
const children = ["joshua", "Aretha", "Evelyn"]
const parents = males.concat(females);
console.log(parents);
const churchMembers = males.concat(females,children);
console.log(churchMembers);


