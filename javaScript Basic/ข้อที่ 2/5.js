let num = 18954;


const fn = (n) => {
    if(n % 2 === 0) {
        
        return `-${n / 2}`
    } else {
        return Math.round(n/2)
    }
}

console.log(fn(num));
alert(num);