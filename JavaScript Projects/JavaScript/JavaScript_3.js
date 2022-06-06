function displayType(character) {
    var characterType = character.getAttribute("data-character");
    alert(characterType + " is the voice actor for " + character.innerHTML + ".");
}