var x = 10 //This assigns the global variable x = 10
function Add_numbers_1() { //This defines the Add_numbers_1() function
    document.write(20 + x + "<br>"); //This gives the instruction to write 20 + x + break
}
function Add_numbers_2() { //This defines the Add_numbers_2() function
    document.write(x = 100); //This gives the instruction to write x =  100
}
Add_numbers_1(); //This instructs the computer to perform the Add_number_1() function
Add_numbers_2(); //This instructs the computer to perform the Add_number_1() function

function Add_numbers_1() { //This defines the Add_numbers_1 function
    var x = 10; //This defines the local variable x =  10
    document.write(20 + x + "<br>"); //This gives the instruction to write 20 + x + break
}
function Add_numbers_2() { //This defines the Add_numbers_2() function
    console.log(y + 100) //This instructs the computer to perform y + 100 in the browser's log
    }
Add_numbers_1(); //This instructs the computer to perform the Add_numbers_1() function
Add_numbers_2(); //This instructs the computer to perform the Add_numbers_2() function

function get_Date() { //This defines the get_Date() function
    if (new Date().getHours() < 18) { //This tells the computer that if the time is earlier than 6:00, print "how are you today?"
        document.getElementById("Greeting").innerHTML = "How are you today?"; //This assigns the greeting id to the html and gives it instructions
    }
}

function if_function() { //This defines the if_function() function
    if (1 < 2) { //This says tells the computer that if 1 is less than 2, print "One is less than two."
        document.getElementById("if").innerHTML = "One is less than two."; //This assigns the if id to the html and gives it instructions
    }
}

function Age_Function() { //This defines the Age_Function()
    Age = document.getElementById("Age").value;//This tells the computer to get the Age attribute from the input via the html
    if (Age >= 18) { //This says that if Age is less than or equal to 18, Vote will say "You are old enough to vote!"
        Vote = "You are old enough to vote!"; 
    }
    else { //This says that if the if statement above is not true, then Vote will say "You are not old enough to vote!"
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //This assigns the "How_old_are_you" id to the html and tells it to print Vote
}

function Time_function() { //This defines the function Time_function()
    var Time = new Date().getHours(); //This defines the Time Variable
    var Reply; //This sets the Reply variable
    if (Time < 12 == Time > 0) {
        Reply = "It is afternoon."; //This says that if the Time variable is between noon and midnight, it will say "It is afternoon."
    }
    else {
        Reply = "It is evening time."; //This says that if the above if statement is not true, 
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//This assigns an id to be referenced by the HTML along with instructions.
}