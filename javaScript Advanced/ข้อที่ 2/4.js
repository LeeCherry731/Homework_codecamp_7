

const evenArraySum = (array) => {
    let result;
    let arr = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            arr.push(array[i]);
        }
    }
    if (arr.length !== 0) {
        result = arr.reduce((a, b) => a + b)
    } else {
        result = 0
    }
    
    return result;
}

console.log(evenArraySum([1,3,5,9]))
console.log(evenArraySum([5,8,6,7,1]))