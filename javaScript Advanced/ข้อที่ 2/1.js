const n = prompt("Enter : ")

const checkCharacter = (character) => {
    if (character == character.toUpperCase()) {
        return "All character are capital.";
    }

    else if (character == character.toLowerCase()){
        return "All character are small.";
    }
    else {
        return "All character are mix"
    }
}


console.log(checkCharacter(n))