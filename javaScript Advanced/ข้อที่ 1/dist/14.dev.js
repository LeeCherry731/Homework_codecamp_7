"use strict";

var n = prompt("Enter factorial num : ");

var factorial = function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

var result = factorial(n);
console.log(result);
var a = result.toString().split("").filter(function (str) {
  return str !== ",";
}).map(function (c) {
  return parseInt(c);
}).reduce(function (a, b) {
  return a + b;
});
alert(a);