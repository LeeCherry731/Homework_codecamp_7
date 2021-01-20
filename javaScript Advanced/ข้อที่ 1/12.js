
// จงหาผลรวมของจำนวนนับ ที่เป็นพหุคูณของ 3 หรือ 5 ที่มีค่าน้อยกว่า 1000


const fn = (n) => {

    let arr = [];
    for (let i = n; i >= 0; i--) {
        if (i % 3 === 0 || i % 5 === 0) { // ถ้าและก็เปลี่ยน || เป็น && 
            arr.push(i);
        }
    }
    return arr;
}

const result = fn(100).reduce((a, b) => a + b)

console.log(fn(100));
console.log(result)
alert(result)