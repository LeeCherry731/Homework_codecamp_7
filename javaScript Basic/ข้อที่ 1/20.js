function draw(n) {
    let str = ''
    let count = 1
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {
            let star = (j < i) ? '-' : Number(count)
            str = str + star
            if (typeof star === 'number') {
                count++
            }
        }
        str = str + '\n'
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let star = (j < i) ? '-' : Number(count)
            str = str + star
            if (typeof star === 'number') {
                count++
            }
        }
        str = str + '\n'
    }
    console.log(str)
}

draw(4)