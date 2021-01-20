"use strict";

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
var n = prompt("Enter [array] : ");
array = JSON.parse(n);

var gcd2 = function gcd2(a, b) {
  if (!b) return b === 0 ? a : NaN;
  return gcd2(b, a % b);
};

var gcd = function gcd(array) {
  var n = 0;

  for (var i = 0; i < array.length; ++i) {
    n = gcd2(array[i], n);
  }

  return n;
};

var lcm2 = function lcm2(a, b) {
  return a * b / gcd2(a, b);
};

var lcm = function lcm(array) {
  var n = 1;

  for (var i = 0; i < array.length; ++i) {
    n = lcm2(array[i], n);
  }

  return n;
};

alert(lcm(array)); // console.log(lcm([24,48,96]))