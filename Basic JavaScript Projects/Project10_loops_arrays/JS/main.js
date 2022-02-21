function Call_Loop() { //This defines the Call_Loop() function
    var Digit = ""; //This defines the Digit variable
    var X = 1; //This defines the X variable
    while (X < 11) { //This establishes the while loop, while X is less than 11
        Digit +="<br>" + X; //This tells the digit variable to provide breaks between each instance of the X variable
        X++; //This tells the loop to increment the X variable
    }
    document.getElementById("Loop").innerHTML = Digit; // This establishes an id associated with the function, for use with the HTML
}

function text_length() { //This defines the text_length() function
    var text = "Hello World!"; //This defines the text variable
    var length = text.length; //This defines the length variable
    document.getElementById("length").innerHTML = length; //This assigns the function an id, for use with the HTML.
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //This assigns the Instruments variable, and establishes a number of objects with this variable
var Content = ""; //This defines the content variable
var Y; //This defines the Y variable
function for_Loop() { //This defines the for_Loop() function
    for (Y = 0; Y < Instruments.length; Y++) { //This establishes the for loop, to go through the instrument list
        Content += Instruments[Y] + "<br>"; //This tells the Content variable what to print 
        }
        document.getElementById("List_of_Instruments").innerHTML = Content; //This gives the function an id for use with the HTML.
    }

function array_Function() { //This defines the array_Function()
    var Cat_Picture = []; //This defines the Cat_Picture variable
    Cat_Picture[0] = "sleeping"; //This arranges the "sleeping" element in the array
    Cat_Picture[1] = "playing"; //This arranges the "playing" element in the array
    Cat_Picture[2] = "eating"; //This arranges the "eating" element in the array
    Cat_Picture[3] = "purring"; //This arranges the "purring" element in the array
    document.getElementById("Array").innerHTML = "In this picutre, the cat is " +
        Cat_Picture[2] + "."; //This assigns the function an id and instructions, for use with the HTML.
}

function constant_function() { //This defines the constant_function() 
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black",}; //This defines the Musical_Instrument constant, and establishes a number of attributes and their descriptions
    Musical_Instrument.color = "blue"; //This changes the color attribute
    Musical_Instrument.price = "$900";//This changes the price attribute
    Musical_Instrument.type = "piano";//This changes the type attribute
    Musical_Instrument.quality = "grand"//This establishes the quality attribute
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.quality + " "
       + Musical_Instrument.type + " was " + Musical_Instrument.price + "."; //This assigns the function an id and instructions for use with the HTML.
}

function let_Function() { //This defines the function let_Function()
    var X = 82; //This defines the X variable
    document.write(X); //this gives the function let_Function() instructions
    {
        let X = 33; //This temporarily changes the X variable
        document.write("<br>" + X); //This gives the function let_Function() instructions
    }
    document.write("<br>" + X);//This gives the function let_Function() instructions (with the original X variable)
}

function myFunction() { //This defines the myFunction() function
   return Math.PI; //This tells the function to return Math.PI
}
document.getElementById("demo").innerHTML = myFunction(); //This gives the function myFunction() 

let car = { //This lets the car object become the following attributes
    make: "Dodge ", //This defines the Dodge attribute
    model: "Viper", //This defines the model attribute
    year: "2021 ", //This defines the year attribute
    color: "red ", //This defines the color attribute
    description : function() { //This defines the description attribute
        return "The car is a " + this.year + this.color + this.make + this.model + "."; //This returns the full description attribute
    }
}
document.getElementById("Car_Object").innerHTML = car.description(); //This assigns the object an id for use with the HTML

function break_loop() { //This defines the break_loop() function
    let text = ""; //This establishes the text variable
    for (let i = 0; i < 10; i++) { //This establishes the for loop
        if (i === 3) { break; } //This establishes the break in the loop
        text += "The number is " + i + "<br>"; //This establishes the text that results with each time through the loop
    }
    document.getElementById("break").innerHTML = text; //This establishes an id and instructions for printing the text variable with the HTML
}

function continue_loop() { //This establishes the continue_loop() function
    let text = ""; //This establishes the text variable
    for (let i = 0; i < 10; i++) { //This establishes the for loop
        if (i === 3) { continue; } //This establishes the continue in the loop
        text += "The number is " + i + "<br>"; //This establishes the text that results with each time through the loop
    }
    document.getElementById("continue").innerHTML = text; //This establishes an id and instructions for printing the text variable with the HTML
}
