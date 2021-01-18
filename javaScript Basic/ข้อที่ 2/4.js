// const fib = (n) => {
    
//     list = [];
//     count = 0;
//     sum = 0;

//     // for (let i = 0; i<= n; i++) {
//     //     sum = count + sum;
//     //     count++;
//     //     list.push(sum);
//     // }

//     while (count > n) {
//         sum = sum
//     }

//     return list;
//     // return list[n-1];
// }

// console.log(fib(7))

const fib = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if(n > 1) {
        return fib(n-2) + fib(n-1);  
    }
}

const addList = (n, fn) => {
    let list = [];
    for (let i = 0; i <= n; i++) {
        list.push(fn(i));
    }
    return list;
}



const findFibonacci = (n) => {
    return addList(n, fib)[n-1]
}

const result = findFibonacci(3)

console.log(result);

// const result = fib(6);
// console.log(result)

