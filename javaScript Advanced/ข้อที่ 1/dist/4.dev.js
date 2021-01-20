"use strict";

var n = prompt("Enter : ");

var getSum = function getSum(total, num) {
  return total + Math.round(num);
};

var fn = function fn(n) {
  var c;
  var i = 0;
  var d = [];

  while (d.length < n) {
    c = 0;

    for (var j = 1; j <= i; j++) {
      if (i % j == 0) {
        c++;
      }
    }

    if (c === 2) {
      d.push(i);
    }

    i++;
  }

  var result = d.reduce(getSum);
  return result;
};

console.log(fn(n));
alert(fn(n));