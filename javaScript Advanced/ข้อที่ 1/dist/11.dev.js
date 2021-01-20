"use strict";

var n = prompt("Enter true or false : ");
var a = JSON.parse(n.toLowerCase());

var fn = function fn(array) {
  var done = false;

  while (!done) {
    done = true;

    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }

    return array;
  }
};

var sort = function sort(array, isTrue) {
  if (isTrue) {
    return fn(array);
  } else {
    var arr = [];

    for (var i = array.length - 1; i >= 0; i--) {
      arr.push(array[i]);
    }

    return arr;
  }
};

console.log(sort([1, 2, 3, 4, 5, 6, 7], a));
alert(sort([1, 2, 3, 4, 5, 6, 7], a));