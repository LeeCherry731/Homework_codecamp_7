function draw(n) {
    let str = ''
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {
            let star = (j < i) ? '-' : '*'
            str = str + star
        }
        for (let j = (n - 1); j >= 1; j--) {
            let star = (j < i) ? '-' : '*'
            str = str + star
        }
        str = str + '\n'
    }
    console.log(str)
}

draw(4)