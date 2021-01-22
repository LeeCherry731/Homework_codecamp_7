
const numberOfJumpFrog = (speed, distance) => {

    let result = 0;

    if(1 <= speed && speed <=1000 && 1 <= distance && distance <=1000){
        if(distance % speed != 0) {
            result = (distance / speed) + 1
        } else {
            result = (distance / speed)
        }
    }

    return Math.floor(result);
}

console.log(numberOfJumpFrog(3,12))
console.log(numberOfJumpFrog(5,23))