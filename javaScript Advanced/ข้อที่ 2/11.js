// ข้อนี้ โจทย์ในสไลด์ผิด (1×3) + (2×2) + (6×6) + (9×3) = 37
// ต้องเป็น 70 

const v1 = [1,2,6,9];
const v2 = [3,2,6,3];
const v3 = [3,4];
const v4 = [2,8,9,11];

const dotProduct = (vector1, vector2) => {
    
    const totalArr = [];

    for (let i = 0; i <= vector1.length -1; i++) {
        totalArr.push(vector1[i] * vector2[i])
    }

    console.log(totalArr)
    return totalArr.reduce((a,b) => a+b);
}

console.log(dotProduct(v1, v2))
console.log(dotProduct(v3, v4))

