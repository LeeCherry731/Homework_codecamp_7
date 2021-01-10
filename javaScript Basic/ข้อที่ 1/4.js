function repeatStringNumTimes(str, num) {
    if (num < 0) return ""
    return str.repeat(num)
}

// console.log(repeatStringNumTimes("lee", 3))

function draw(n) {
    let row;
    for (let i = 1; i < n + 1; i++) {
        row = i.toString();
        row = repeatStringNumTimes(row, n)
        console.log(row)
    }
}

draw(4)

// const chorus = 'Because I\'m happy. ';

// console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// function draw(n) {
//     for (let i = 1; i < n + 1; i++) {
//         let val = '';
//         for (let j = 1; j < n + 1; j++) {
//             val += i.toString();
//         }
//         console.log(val)
//     }
// }

// draw(5)