//ISO Date-the international standard
const dateToday = new Date("2025-05-09");
console.log(dateToday.toDateString());
const dob = new Date();
console.log(dob.getHours());
const dateOfRegistration = new Date();
dateOfRegistration.setFullYear(2024);
dateOfRegistration.setMonth(0);
dateOfRegistration.setDate(2);
console.log(dateOfRegistration.toDateString());