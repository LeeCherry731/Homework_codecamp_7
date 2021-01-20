"use strict";

var n = +prompt("Enter : ");

var getSum = function getSum(total, num) {
  return total + Math.round(num);
};

var fn = function fn(n) {
  var sums = [];

  for (var i = 0; i <= n; i++) {
    sums.push(i);
  }

  var result = sums.map(function (sum) {
    return sum * sum;
  }).reduce(getSum);
  return result;
};

console.log(fn(n));
alert(fn(n));