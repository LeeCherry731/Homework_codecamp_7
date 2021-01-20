let n = prompt("Enter : ");

const fn = (n) => {

    let c;
    let d = [];

    for (let i = 0; i <= n; i++) {
        c = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                c++;
            }
        }
        if (c === 2) {
            d.push(i)
        }
    }
    return d;
}

console.log(fn(n));
alert(`[${fn(n)}]`);