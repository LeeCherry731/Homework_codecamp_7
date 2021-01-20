let n = prompt("Enter true or false : ");

let a = JSON.parse(n.toLowerCase());

const sort = (arr, isTrue) => {
    if (isTrue) {
        return arr.sort((a, b) => a-b)
    } else {
        return arr.sort((a, b) => b-a)
    }
}

console.log(sort([1,2,3,4,5,6,7], a));
alert(sort([1,2,3,4,5,6,7], a));