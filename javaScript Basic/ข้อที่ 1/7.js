function draw(n) {
    let str = ''
    let count = n * n
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            str = str + count
            count--
        }
        str = str + '\n'
    }
    console.log(str)
}

draw(5)