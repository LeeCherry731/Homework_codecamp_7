

const thaiTypeof = (variable) => {
    if(typeof(variable) === "string") {
        return "ข้อความ"
    } else if (typeof(variable) === "number") {
        return "ตัวเลข"
    } else if (typeof(variable) === "object") {
        return "ออปเจ็คต์"
    } 
}

console.log(thaiTypeof("num"))
console.log(thaiTypeof(10))
console.log(thaiTypeof({num: 10}))