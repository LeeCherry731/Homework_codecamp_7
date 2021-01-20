"use strict";

var n = prompt("Enter : ");

var getSum = function getSum(total, num) {
  return total + Math.round(num);
}; // function getSubtract(total, num) {
//     return total - Math.round(num);
// }


var fn = function fn(n) {
  var c;
  var i = 0;
  var d = [];

  while (d.length <= n) {
    c = 0;

    for (var j = 1; j <= i + 1; j++) {
      if (i === 1) {
        c++;
      }

      if (i % j === 0) {
        c++;
      }
    }

    if (c === 2) {
      d.push(-i);
    } else {
      d.push(i);
    }

    i++;
  }

  console.log(d);
  var a = d.filter(function (x) {
    return x < 0;
  }).reduce(getSum);
  var b = d.filter(function (x) {
    return x > 0;
  }).reduce(getSum);
  console.log(a);
  console.log(b);
  var result = a + b;
  return result;
};

console.log(fn(n)); // alert(fn(n));