
const fc = (a, b) => {


    if (a === 1 || b === 1) {
        return `${a} / ${b}`;
    }


    for (let i = 0; i <= 9; i++) {
        
         
        if (a % i !== 0 && b % i !== 0) {
            return `${a} / ${b}`;
        }
        else if (a % i === 0 && b % i === 0) {
            a = a / i;
            b = b / i;
            fc(a,b)
        }
    }
}

console.log(fc(2,4))