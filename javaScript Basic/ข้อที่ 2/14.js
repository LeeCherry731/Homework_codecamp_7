

let input = "Emtpy"
const nums = [1, 2, 3, 4]

while (input !== "stop") {
    input = prompt("Enter : ");
}

let average = 0;

for(let i = 0; i < nums.length; i++) {
    average += nums[i];
}
let avg = average / nums.length;


console.log(avg)
alert(avg)