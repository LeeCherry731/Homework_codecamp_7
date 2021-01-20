let n = prompt("Enter : ");

const getSum = (total, num) => {
    return total + Math.round(num);
}

const fn = (n) => {

    let c;
    let i = 0;
    let d = [];

    while(d.length < n) {
        
            c = 0;
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    c++;
                }
            }
            if (c === 2) {
                d.push(i)
            }
        i++;
    }

    let result = d.reduce(getSum);

    return result;

}

console.log(fn(n));
alert(fn(n));