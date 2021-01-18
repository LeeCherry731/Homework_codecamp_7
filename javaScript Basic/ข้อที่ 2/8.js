
const fn = () => {
    
    let sum = 0;

    for (let i = 1; i <= 155; i++ ) {
        sum = (i * (i+2)) * (i+3)
    }

    return sum;
}

console.log(fn());