let n = +prompt("Enter : ");

const getSum = (total, num) => {
    return total + Math.round(num);
}

const fn = (n) => {
    

    let sums = [];

    for (let i = 0; i<=n; i++){
        sums.push(i)
    }
    
    let result = sums.map(sum => sum * sum).reduce(getSum)

    return result;
}

console.log(fn(n));
alert(fn(n))