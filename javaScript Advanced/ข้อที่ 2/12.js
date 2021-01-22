
const maxPairSum = (array) => {

    let arr = [...array];

    const findMax = Math.max(...arr);
    const filterMax = arr.filter(n => n < findMax)
    const findMaxAgain = Math.max(...filterMax)

    const result = findMax + findMaxAgain;

    return result;
}

console.log(maxPairSum([2,5,3,9,19,3,7,58]))