"use strict";

var n = prompt("Enter true or false : ");
var a = JSON.parse(n.toLowerCase());

var sort = function sort(arr, isTrue) {
  if (isTrue) {
    return arr.sort(function (a, b) {
      return a - b;
    });
  } else {
    return arr.sort(function (a, b) {
      return b - a;
    });
  }
};

console.log(sort([1, 2, 3, 4, 5, 6, 7], a));
alert(sort([1, 2, 3, 4, 5, 6, 7], a));