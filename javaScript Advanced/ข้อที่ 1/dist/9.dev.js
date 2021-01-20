"use strict";

var n = prompt("Enter factorial num : ");

var factorial = function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

alert(factorial(n));