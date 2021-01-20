// https://www.youtube.com/watch?v=8xniWB4llwc

const n = prompt("Enter : ");

// const n = "499"

const a = n.split("")
    .filter((str) => str !== ",")
    .map(c => parseInt(c))

const reverse = a.reverse();

console.log(a)

// let y = 10;
// let y = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000]

// for (let i = 1; i <= reverse.length; i++) {
//     reverse[i] = reverse[i] * y[i];
//     // y = y ** x;
// }

// reverse[0] = reverse[0] * 10
// reverse[1] = reverse[1] * 100
// reverse[2] = reverse[2] * 1000
// reverse[3] = reverse[3] * 10000
// reverse[4] = reverse[4] * 100000
// reverse[5] = reverse[5] * 1000000
// reverse[6] = reverse[6] * 10000000



const a1 = reverse[0] * 1 * 1
const a2 = reverse[1] * 10 * 2
const a3 = reverse[2] * 100 * 3
const a4 = reverse[3] * 1000 * 4
const a5 = reverse[4] * 10000 * 5
const a6 = reverse[5] * 100000 * 6
const a7 = reverse[6] * 1000000 * 7

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
// console.log(a6)

const result = (a1? a1: 0) + (a2? a2: 0) + (a3? a3: 0) + (a4? a4: 0) + (a5? a5: 0) + (a6? a6: 0)+ (a7? a7: 0);

// console.log(sum);
console.log(result)
alert(result);

// 28738860