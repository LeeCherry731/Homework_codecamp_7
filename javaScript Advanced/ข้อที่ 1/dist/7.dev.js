"use strict";

var n = prompt("Enter [6,8,16] : ");
array = JSON.parse(n);

var gcd = function gcd(a, b, c) {
  var min = a < b ? a : b;

  for (var i = min; i >= 1; i--) {
    if (a % i === 0 && b % i === 0 && c % i === 0) {
      return i;
    }
  }
};

var fn = function fn(n) {
  // console.log(n[0])
  return gcd(n[0], n[1], n[2]);
};

console.log(fn(array));
alert(fn(array)); // console.log(array)
// console.log(typeof(b));