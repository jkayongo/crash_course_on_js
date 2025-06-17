const score = 50;
if(score >= 80){
    console.log("Excellent");
}else if(score >= 50 && score <= 79){
    console.log("Good");
}else{
    console.log("Failed");
}
//ternary operator
const weatherCondition = "rainy";
weatherCondition == "sunny"? console.log("good for swimming"):console.log("not good for swimming");
//switch
switch(day = "Monday"){
    case "Monday":
        console.log("Start of the week");
        break;
    case "Wednesday":
        console.log("Mid week hustle");
        break;
    case "Friday":
        console.log("Weekend loading");
        break;
    case "Sunday":
        console.log("Rest day");
        break;
    default:
        console.log("Just another day");
}