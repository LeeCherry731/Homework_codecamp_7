const n = prompt("Enter : ");


const a = n.split("")
    .filter((str) => str !== ",")
    .map(c => parseInt(c))
    .reduce((a, b) => a + b)

console.log(a)
alert(a)