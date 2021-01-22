const gcd = (x, y) => {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
const NumberOfSquares = (x, y) => { 

    let s = gcd(x, y); 

    let ans = (x * y) / (s * s); 

    return ans; 
} 

console.log(NumberOfSquares(15, 15))
console.log(NumberOfSquares(20, 15))
console.log(NumberOfSquares(2, 8))
console.log(NumberOfSquares(1, 5))
