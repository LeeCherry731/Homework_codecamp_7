let n = prompt("Enter factorial num : ");

const factorial = (num) => {
    if (num === 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}

const result = factorial(n)

console.log(result)

const a = result.toString()
    .split("")
    .filter((str) => str !== ",")
    .map(c => parseInt(c))
    .reduce((a, b) => a + b)

alert(a)