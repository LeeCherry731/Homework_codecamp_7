function draw(n) {
    let str = ''
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            str = str + (j + (j * i))
        }
        str = str + '\n'
    }
    console.log(str)
}

draw(4)