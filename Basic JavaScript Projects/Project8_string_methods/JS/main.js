function full_sentence() { //This defines the function full_sentence()
    var part_1 = "I have "; //This defines the part 1 variable
    var part_2 = "made this "; //This defines the part 2 variable
    var part_3 = "into a complete "; //This defines the part 3 variable
    var part_4 = "sentence."; //This defines the part 4 variable
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //This defines the whole sentence variable
    document.getElementById("Concatenate").innerHTML = whole_sentence; //This gives the whole_sentence variable an id so the HTML knows what to call
}

function slice_Method() { //This defines the slice_Method() variable
    var Sentence = "All work and no play makes Johnny a dull boy."; //This defines the sentence variable
    var Section = Sentence.slice(27,33); //This defines the section variable
    document.getElementById("Slice").innerHTML = Section; //This assigns the section variable an id so the HTML knows what to display
}

function UpperCase() { //This defines the UpperCase() function
    var text = "Hello World!"; //This defines the text variable
    var result = text.toUpperCase(); //This defines the result variable
    document.getElementById("UpperCase").innerHTML = result; //This gives the result variable an id so the HTML knows what to display
}

function search() { //This defines the search function
    var text = "Hello World!"; //This defines the text variable
    var search = text.search("World!") //This defines the search variable
    document.getElementById("search").innerHTML = search; //This gives the search variable an id so the HTML knows what to display
}

function string_Method() { //This defines the string_Method()
    var x = 182; //This defines the x variable
    document.getElementById("Numbers_to_string").innerHTML = x.toString(); //This gives the function an id and instructions so the HTMl knows what to display
}

function precision_Method() { //This defines the precision_Method() function
    var X = 12938.3012987376112; //This defines the x variable
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //This gives the function an id and instructions so the HTML knows what to display
}

function toFixed_Method() { //This defines the toFixed_Method()
    var num = 5.5678; //This defines the num variable
    var n = num.toFixed(); //This defines the n variable
    document.getElementById("toFixed").innerHTML = n; //This gives the n variable an id so the HTML knows what to display
}

function valueOf_Method() { //This defines the valueOf_Method() function
    var text = "Hello World!"; //This defines the text variable
    var result = text.valueOf(); //This defines the result function
    document.getElementById("valueOf").innerHTML = result; //This assigns the result variable an id so the HTML knows what to display
}