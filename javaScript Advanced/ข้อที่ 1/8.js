// const gcd = (a, b) => {
//     if (!b) {
//       return a;
//     }
  
//     return gcd(b, a % b);
//   }


// const lcm = (a, b) => {
//     return a * b / gcd(a,b)
// }

// console.log(gcd(10,24))
// console.log(lcm(10,24))

const n = prompt("Enter [array] : ")

array = JSON.parse(n);

const gcd2 = (a, b) => {
    if(!b) return b===0 ? a : NaN;
    return gcd2(b, a%b);
    }

const gcd = (array) => {
    let n = 0;
    for(let i=0; i<array.length; ++i)
        n = gcd2(array[i], n);
    return n;
}

const lcm2 = (a, b) => {
    return a*b / gcd2(a, b);
}


const lcm = (array) => {
    let n = 1;
    for(let i=0; i<array.length; ++i)
        n = lcm2(array[i], n);
    return n;
}

alert(lcm(array))
// console.log(lcm([24,48,96]))

