function repeatStringNumTimes(str, num) {
    if (num < 0) return ""
    return str.repeat(num)
}


function draw(n) {
    let row
    for (let i = n; i > -1 + 1; i--) {
        row = i.toString();
        row = repeatStringNumTimes(row, n)
        console.log(row)
    }
}

draw(9)