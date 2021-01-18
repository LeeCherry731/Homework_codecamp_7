let input = "Emtpy"
const nums = [1, 2, 3, 4]

while (input !== "stop") {
    input = prompt("Enter : ");
}

const filteredMin = nums.filter(num => num <= 3)

console.log(filteredMin)
alert(filteredMin)