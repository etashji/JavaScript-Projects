function addition_Function() { //This defines the function: addition_Function()
    var addition = 2 + 2; //This defines the addition variable
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition; //This gives the element an id which the html can refer to
}

function subtraction_Function() { //This defines the function: subtraction_Function()
    var Subtraction = 5 - 2; //This defines the Subtraction variable
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction; //This gives the element an id which the html can refer to
}

function multiplication() { //This defines the function: multiplication()
    var simple_Math = 6 * 8; //This defines the simple_Math variable
    document.getElementById("Math3").innerHTML = "6 X 8 = " + simple_Math; //This gives the element an id which the html can refer to
}


function division() { //This defines the function: division()
    var simple_Math = 48 / 6; //This defines the simple_Math variable
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math; //This gives the element an id which the html can refer to
}


function more_Math() { //This defines the function: more_Math()
    var simple_Math = (1 + 2) * 10 / 2 -5; //This defines the simple_Math variable
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10 " + //This gives the element an id which the html can refer to
    "divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { //This defines the function: modulus_Operator()
    var simple_Math = 25 % 6;  //This defines the simple_Math variable
    document.getElementById("Math6").innerHTML = "When you divided 25 by 6 " + //This gives the element an id which the html can refer to
    "you have a remainder of: " + simple_Math; 
}

function negation_Operator() { //This defines the function: modulus_Operator()
    var x = 10; //This defines the simple_Math variable
    document.getElementById("Math7").innerHTML = "Negative X: " + -x; //This gives the element an id which the html can refer to
}

function random() { //This defines the function: random()
    var random = Math.random(); //This defines the variable: random
    document.getElementById("Random").innerHTML = "Random number: " + random; //This creates an id for the function, which the html can refer to
}

function increment() { //This defines the increment() function
    var x = 5; //This defines the x variable
    x++;
   document.getElementById("Increment").innerHTML = "Increment: " + x; //This gives the function an id, which the html can refer to
}

function decrement() { //This defines the decrement() function
    var y = 5; //This assigns a vlaue to the y variable
    y--;
   document.getElementById("Decrement").innerHTMl = "Decrement: " + y; //This give the element an id, which the html can refer to
}



