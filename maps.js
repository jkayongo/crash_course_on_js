//A Map holds key-value pairs where the keys can be any datatype.
//you can create a map by passing an array to new Map() or you can create a Map and use Map.set()
//Map() expects an array of arrays, where each sub-array is a key-value pair:
const softwareEngineers = new Map([
    ["Kylian", "machine learning engineer"],
    ["Vinicius", "data scientist"],
    ["Tchoumeni", "Ai engineer"],
    ["Courtois", "Product manager"],
    ["Kyagulanyi", "Lead developer"]
]);
console.log(softwareEngineers);
console.log("...............................");
console.log(softwareEngineers.get("Kylian"))
console.log("...............................");
console.log("the number of software engineers is: " + softwareEngineers.size);
softwareEngineers.delete("Courtois");
console.log("...............................");
console.log(softwareEngineers);
//looping through a map
softwareEngineers.forEach(function(value, key){
    console.log("Role: " + value + " " + "Developer: " + key);
})
//looping through keys
for(const key of softwareEngineers.keys()){
    console.log("The company developer is: " + key);
}
//looping through values
for(const value of softwareEngineers.values()){
    console.log("Profession: " + value);
}
//creating a map and adding elements using the set() Method
const scienceStudents = new Map();
scienceStudents.set("Biology", 90);
scienceStudents.set("Physics", 67);
scienceStudents.set("Mathematics", 200);
scienceStudents.set("Chemistry", 70);
console.log(scienceStudents);
//the set() method can also be used to change existing Map values:
scienceStudents.set("Chemistry", 95);
console.log(scienceStudents);
//objects as keys
//create objects
const apples = {nameOfFruit: "Apple"};
const bananas = {nameOfFruit: "Bananas"};
const oranges = {nameOfFruit: "Oranges"};
//create a map
const fruits = new Map();
fruits.set(apples, 500);
fruits.set(bananas, 200);
fruits.set(oranges, 200);
console.log("...............................");
console.log(fruits);
console.log("...............................");
console.log(apples.nameOfFruit);



