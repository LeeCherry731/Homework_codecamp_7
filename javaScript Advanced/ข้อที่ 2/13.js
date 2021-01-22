
const minPairSum = (array) => {

    let arr = [...array];

    const findMin = Math.min(...arr);
    const filterMin = arr.filter(n => n > findMin)
    const findMinAgain = Math.min(...filterMin)
    // const filterMinAgain = filterMin.filter(n => n> findMinAgain)

    const result = findMin + findMinAgain;

    // console.log(findMin)
    // console.log(filterMin)
    // console.log(findMinAgain)
    // console.log(filterMinAgain)
    return result;
}

console.log(minPairSum([2,5,3,9,19,3,7,58]))