//polymorphism is an oop principle that provides a facility to perform a task in many ways.
class SoftwareEngineer{
    work(){
        return "I design,build and maintain software applications.";
    }
}

class WebDeveloper extends SoftwareEngineer{
    work(){
        return "I build websites and web applications.";
    }
}

class DataScientist extends SoftwareEngineer{
    work(){
        return "I find patterns in data to help answer questions or make decisions.";
    }
}

class MachineLearningEngineer extends SoftwareEngineer{
    work(){
        return "I build models that learn from data and make predictions."
    }
}
console.log(".................................");
const web_dev = new WebDeveloper();
console.log(web_dev.work());
console.log(".................................");
const ml = new MachineLearningEngineer();
console.log(ml.work());
console.log(".................................");
const ds = new DataScientist();
console.log(ds.work());
console.log(".................................");
const swe = new SoftwareEngineer();
console.log(swe.work());