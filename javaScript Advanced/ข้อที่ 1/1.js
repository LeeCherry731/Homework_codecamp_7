let c;
let d;

for (let i = 0; i <= 100; i++) {
    c = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            c++;
        }
    }
    if (c === 2) {
        d = "" + i;
        console.log(d)
    }
}