"use strict";

var n = prompt("Enter : ");
var a = n.split("").filter(function (str) {
  return str !== ",";
}).map(function (c) {
  return parseInt(c);
}).reduce(function (a, b) {
  return a + b;
});
console.log(a);
alert(a);