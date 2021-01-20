"use strict";

// จงหาผลรวมของจำนวนนับ ที่เป็นพหุคูณของ 3 หรือ 5 ที่มีค่าน้อยกว่า 1000
var fn = function fn(n) {
  var arr = [];

  for (var i = n; i >= 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      // ถ้าและก็เปลี่ยน || เป็น && 
      arr.push(i);
    }
  }

  return arr;
};

var result = fn(100).reduce(function (a, b) {
  return a + b;
});
console.log(fn(100));
console.log(result);
alert(result);