let a = prompt("Enter A: ");
let b = prompt("Enter B: ");

const fn = (a, b) => { // a = 10 , b = 20
    while (b) {
        let x = b; // t = 20
            b = a % b; // b = 10 % 20 = 10
            a = x; // a = 20
    }
    return a;
}

let result = fn(a, b);

if (result === 1) {
    alert(a + "/" + b)
} else {
    a = a / result;
    b = b / result;
    alert(a + "/" + b)
}