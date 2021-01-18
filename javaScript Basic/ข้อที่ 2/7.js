
const fn = () => {
    
    let sum = 0;

    for (let i = 1; i <= 87; i++ ) {
        sum = (i * (i+1)) * (i+2)
    }

    return sum;
}

console.log(fn());