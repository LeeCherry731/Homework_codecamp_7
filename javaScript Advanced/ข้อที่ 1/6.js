let n = prompt("Enter : ");

const getSum =(total, num) => {
    return total + Math.round(num);
}

// function getSubtract(total, num) {
//     return total - Math.round(num);
// }

const fn = (n) => {

    let c;
    let i = 0;
    let d = [];

    while(d.length <= n) {
        
            c = 0;
            for (let j = 1; j <= i+1; j++) {
                if (i === 1) {
                    c++;
                }
                if (i % j === 0) {
                    c++;
                }
            }
            if (c === 2) {
                d.push(-i);
            } else {
                d.push(i)
            }
        i++;
    }

    console.log(d)

    let a = d.filter(x => x < 0).reduce(getSum)
    let b = d.filter(x => x > 0).reduce(getSum)

    console.log(a)
    console.log(b)

    let result = a + b

    return result;

}

console.log(fn(n));
// alert(fn(n));