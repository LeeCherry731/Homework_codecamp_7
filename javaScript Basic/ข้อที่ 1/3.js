function draw(n) {
    let value = ''
    for (let col = 1; col < n + 1; col++) {
        value = value + col
    }
    for (let row = 0; row < n; row++) {
        console.log(value)
    }
}

draw(4)