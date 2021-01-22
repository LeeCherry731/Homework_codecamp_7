

const arr = [2,25]

const Demo = (arr) => {

    let nArr = []

    let findMax = Math.max(...arr);

    for (i = 0; i <= findMax; i++) {
        if (i ** 2 === arr[i]) {
            nArr.push(Math.sqrt(arr[i]));
        }
    }

    return nArr;
}


console.log(Demo(arr))
// for (let i = 1; i <= count; i++) {
//     if (i ** 2 === count) {
//         return Math.sqrt(count);
//     }
// }

