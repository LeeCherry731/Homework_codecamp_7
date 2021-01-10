function draw(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let star = (j > i) ? '-' : '*'
            str = str + star
        }
        str = str + '\n'
    }
    for (let i = (n - 1); i >= 1; i--) {
        for (let j = 1; j <= n; j++) {
            let star = (j > i) ? '-' : '*'
            str = str + star
        }
        str = str + '\n'
    }
    console.log(str)
}

draw(4)