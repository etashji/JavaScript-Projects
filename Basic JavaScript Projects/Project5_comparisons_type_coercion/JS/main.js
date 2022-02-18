document.write(typeof 3); //Document.write method tells me what type of data the 3 is.

function my_Function1() { //This defines the my_Function1() function
    document.getElementById("Test1").innerHTML = 0/0; //This tells the function to divide 0 by 0
}

function my_Function2() { //This defines the my_Function2() function
    document.getElementById("Test2").innerHTML = isNaN('This is a string'); //This tells the function to determine if 'This is a string' is not a number
}

function my_Function3() { //This defines the my_Function3() function
    document.getElementById("Test3").innerHTML = isNaN('007'); //This tells the function to determine if 007 is not a number
}

function my_Function4() { //This defines the my_Function4() function
    document.getElementById("Test4").innerHTML = document.write(3E310); //This tells the function to write a large number, which will become infinity
}

function my_Function5() { //This defines the my_Function5() function
    document.getElementById("Test5").innerHTML = document.write(-3E310); // //This tells the function to write a large negative number, which will become infinity
}

function my_Function6() { //This defines the my_Function6() function
    document.getElementById("Test6").innerHTML = document.write(10 > 2);  //This tells the function to determine whether 10 is greater than 2
}

function my_Function7() { //This defines the my_Function7() function
    document.getElementById("Test7").innerHTML = document.write(10 < 2);  //This tells the function to determine whether 10 is less than 2
}

function my_Function8() { //This defines the my_Function8() function
    document.getElementById("Test8").innerHTML = document.write(10 == 10);  //This tells the function to determine whether 10 is equal to 10
}

function my_Function9() { //This defines the my_Function9() function
    document.getElementById("Test9").innerHTML = document.write(10 == 11);  //This tells the function to determine whether 10 is equal to 11
}

function my_Function10() { //This defines the my_Function10() function
    document.getElementById("Test10").innerHTML = document.write(10===10);  //This tells the function to determine whether 10 is equal to 10 in data and type
}

function my_Function11() { //This defines the my_Function11() function
    document.getElementById("Test11").innerHTML = document.write("Marcia"===10); //This tells the function to determine whether "Marcia" is equal to 10 in data and type
}

function my_Function12() { //This defines the my_Function12() function
    document.getElementById("Test12").innerHTML = document.write("10"===10); //This tells the function to determine whether "10" 10 is equal to 10 in data and type
}

function my_Function13() { //This defines the my_Function13() function
    document.getElementById("Test13").innerHTML = document.write(10===11); //This tells the function to determine whether 11 is equal to 10 in data and type
}

function my_Function14() { //This defines the my_Function14() function
    document.getElementById("Test14").innerHTML = document.write(5 > 2 && 10 > 4); //This tells the function to determine whether 5 is greater than 2 and 10 is greater than 4
}

function my_Function15() { //This defines the my_Function15() function
    document.getElementById("Test15").innerHTML = document.write(5 > 10 && 10 > 4); //This tells the function to determine whether 5 is greater than 10 and 10 is greater than 4
}

function my_Function16() { //This defines the my_Function16() function
    document.getElementById("Test16").innerHTML = document.write(5 > 10 || 10 > 4); //This tells the function to determine whether 5 is greater than 10 or 10 is greater than 4
}

function my_Function17() { //This defines the my_Function17() function
    document.getElementById("Test17").innerHTML = document.write(5 > 10 || 10 > 20); //This tells the function to determine whether 5 is greater than 10 or 10 is greater than 20
}

function my_Function18() { //This defines the my_Function18() function
    document.getElementById("Test18").innerHTML =  !(20 > 10) //This tells the function to determine if 20 is not greater than 10
}

function my_Function19() { //This defines the my_Function19() function
    document.getElementById("Test19").innerHTML = !(5 > 10); //This tells the function to determine if 5 is not greater than 10
}

console.log(2 + 2); //This tells the log to show the sum of 2 and 2

console.log(10 < 2); //This tells the log to determine whether 10 is less than 2


