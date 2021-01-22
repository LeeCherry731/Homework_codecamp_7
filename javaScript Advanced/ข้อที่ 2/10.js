

const squareRoot = (number) => {

    let arr = [];

    let count = Math.abs(number);

    for (let i = 1; i <= count; i++) {
        if (i ** 2 === count) {
            return Math.sqrt(count);
        }
    }

    if (count % 2 !== 0) {
        return count;
    }

    // ติดรูดไว้ 
    for (let i = 1; i <= count; i++) {
        if (count % 2 !== 0) {
            arr.push(count);
        } else {
            count = count / 2;
            arr.push(2);
        }
    }
    let num = [];
    let nArr = [];

    for (let i = 0; i <= arr.length; i++) {
        if (arr.hasOwnProperty(2)) {
            nArr = arr.filter(n => n > 2)
            
            for (let i = 1; i <= 2; i++) {
                num  = arr.filter(n => n <3)
            }
        }
    }


    return `${num[0]} root ${nArr[0]}`;
}

console.log(squareRoot(77))
console.log(squareRoot(121))
console.log(squareRoot(12))

