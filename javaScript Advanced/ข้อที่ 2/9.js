function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

// console.log(isFloat(12))
// console.log(isInt(12.34))

// const n = +prompt("Enter : ")

const maxPossibleNumber = (number) => {
    if(isInt(number)) {
        let strNum = number.toString();
        let numList = strNum.split("")
                                .map(n => Number(n))
                                .sort()
                                .reverse();
        const result = numList.join("");                        
        return result;
    }
    else if(isFloat(number)) {
        let strNum = number.toString();
        let numList = strNum.split("")
                                .filter(n => n !== ".")
                                .map(n => Number(n))
                                .sort()
                                .reverse()
                                .map(n => String(n));
        numList.splice(-2, 0, '.')
        const result = numList.join("");    
        return result;
    } 
    else {
        return "error"
    }
}

console.log(maxPossibleNumber(69523))
console.log(maxPossibleNumber(12523.97))
console.log(maxPossibleNumber(955))
