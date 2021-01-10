function draw(n) {
    let star = ''
    for (let col = 0; col < n; col++) {
        star = star + "*"
    }
    for (let row = 0; row < n; row++) {
        console.log(star)
    }
}

draw(5)