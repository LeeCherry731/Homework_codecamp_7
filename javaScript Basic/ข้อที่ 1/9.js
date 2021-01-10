function draw(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n; j += n) {
            str = str + (i * 2)
        }

        str = str + '\n'
    }
    console.log(str)
}

draw(4)