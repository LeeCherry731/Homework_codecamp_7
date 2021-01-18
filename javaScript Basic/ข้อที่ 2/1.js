let input1 = +prompt("Enter first : ");
let input2 = +prompt("Enter second : ");



const recusion = (a, b) => {

    let aa = a;
    let bb = b;

    if (a === 1 || b === 1 ) {
        return aa + "/" + bb;
    } else {
        if (a % 2 === 0 && b % 2 === 0) {
            aa =  a/ 2
            bb =  b/ 2
            recusion(aa,bb);
        } else if (a % 3 === 0 && b % 3 === 0) {
            aa =  a/ 3
            bb =  b/ 3
            recusion(aa,bb);
        } else if (a % 4 === 0 && b % 4 === 0) {
            aa =  a/ 4
            bb =  b/ 4
            recusion(aa,bb);
        } else if (a % 5 === 0 && b % 5 === 0) {
            aa =  a/ 5
            bb =  b/ 5
            recusion(aa,bb);
        } else if (a % 6 === 0 && b % 6 === 0) {
            aa = a/ 6
            bb = b/ 6
            recusion(aa,bb);
        } else if (a % 7 === 0 && b % 7 === 0) {
            aa =  a/ 7
            bb =  b/ 7
            recusion(aa,bb);
        } else if (a % 8 === 0 && b % 8 === 0) {
            aa =  a/ 8
            bb =  b/ 8
            recusion(aa,bb);
        } else if (a % 9 === 0 && b % 9 === 0) {
            aa =  a/ 9
            bb =  b/ 9
            recusion(aa,bb);
        } else if (a % 10 === 0 && b % 10 === 0) {
            aa =  a/ 10
            bb =  b/ 10
            recusion(aa,bb);
        } else {
            return `${aa} / ${bb}`;
        }
    }
    
    
    
    // if (a % 2 === 0 && b % 2 === 0) {
    //     a =  a/ 2
    //     b =  b/ 2
    //     recusion(a,b);
    // } else if (a % 3 === 0 && b % 3 === 0) {
    //     a =  a/ 3
    //     b =  b/ 3
    //     recusion(a,b);
    // } else if (a % 4 === 0 && b % 4 === 0) {
    //     a =  a/ 4
    //     b =  b/ 4
    //     recusion(a,b);
    // } else if (a % 5 === 0 && b % 5 === 0) {
    //     a =  a/ 5
    //     b =  b/ 5
    //     recusion(a,b);
    // } else if (a % 6 === 0 && b % 6 === 0) {
    //     a = a/ 6
    //     b = b/ 6
    //     recusion(a,b);
    // } else if (a % 7 === 0 && b % 7 === 0) {
    //     a =  a/ 7
    //     b =  b/ 7
    //     recusion(a,b);
    // } else if (a % 8 === 0 && b % 8 === 0) {
    //     a =  a/ 8
    //     b =  b/ 8
    //     recusion(a,b);
    // } else if (a % 9 === 0 && b % 9 === 0) {
    //     a =  a/ 9
    //     b =  b/ 9
    //     recusion(a,b);
    // } else {
    //     return `${a} / ${b}`;
    // }

    


    // for (num in nums) {
    //     if (num % a === 0 && num % b === 0) {
    //         a / num;
    //         b / num;
    //         recusion(a, b);
    //     } else {
    //         return `${a} / ${b}`;
    //     }`
    // }
}

const result = recusion(input1, input2);

alert(result)
console.log(result)