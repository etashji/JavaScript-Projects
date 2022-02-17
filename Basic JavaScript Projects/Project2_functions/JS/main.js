function myFunction() { //This initializes the function, and names it "myFunction()"
    var sentence = "I am learning"; //This indicates the first part of the sentence to be displayed as part of the function.
    sentence += " a lot from this book!"; //This is a continuation of the sentence through concatenating the two lines.
    document.getElementById("Concatenate").innerHTML = sentence; //This gives the element the id "Concatenate," which allows the html to call it.
}