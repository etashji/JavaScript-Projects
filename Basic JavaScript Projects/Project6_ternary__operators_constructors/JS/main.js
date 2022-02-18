function Ride_Function() { //This defines the function: Ride_Function()
    var Height, Can_ride; //This sets the Height and Can_ride variables
    Height = document.getElementById("Height").value; //This defines the Height variable
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //This defines the Can_ride variable
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //This assigns an id to the function as a reference for the HTML and gives it instructions
}

function Vote_Function() { //This defines the function: Vote_Function()
    var Age, Can_Vote; //This sets the Age and Can_Vote variables
    Age = document.getElementById("Age").value; //This defines the Age variable
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough"; //This defines the Can_Vote variable
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote."; //This assigns an id to the function as a referenc for the HTML and gives it instructions
}

function Vehicle(Make, Model, Year, Color) { //This defines the Vehicle function
    this.Vehicle_Make = Make; //This sets the this.Vehicle_Make attribute
    this.Vehicle_Model = Model; //Ths sets the this.Vehicle_Model attribute
    this.Vehicle_Year = Year; //This sets the this.Vehicle_Year attribute
    this.Vehicle_Color = Color; //This sets the this.Vehicle_Color attribute
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //This defines the attributes of the Jack variable
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //This defines the attributes of the Emily variable
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //This defines the attributes of the Erik variable
function myFunction() { //This defines the myFunction() function
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year; //This assigns an id for use by the HTML and gives it instructions
}

function person(first, last, age, eye) { //This defines the person function
    this.firstName = first; //This sets the this.firstName attribute
    this.lastName = last; //This sets the this.lastName attribute
    this.age = age; //This sets the this.age attribute
    this.eyeColor = eye; //This sets the this.eyecolor attribute
} 
var Eric = new person("Eric", "Tashji", 25, "brown"); //This defines the attributes of the Eric variable
var Jake = new person("Jacob", "Stanaford", 24, "blue"); //This defines the attributes of the Jake variable
function my_Person() { //This defines the my_Person() function
    document.getElementById("Person").innerHTML = 
    "Eric's name is " + Eric.firstName + " " + Eric.lastName + 
    ". He is " + Eric.age + " years old and has " + Eric.eyeColor + " eyes."; //This assigns an id for use by the HTML and gives it instructions
}
}

function count_Function() { //This defines the count_Function()
    document.getElementById("Nested_Function").innerHTML = Count(); //This assigns an id for use by the HTML and gives it instruction
    function Count() { //This defines the Count() function
        var Starting_point = 9; //This defines the Starting_point variable
        function Plus_one() {Starting_point += 1;} //This defines the Plus_one() function
        Plus_one(); //This makes the Plus_one() function a nested function
        return Starting_point;//This identifies what the function should return to
    }
}