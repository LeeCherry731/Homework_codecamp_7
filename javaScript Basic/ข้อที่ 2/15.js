let input = prompt("Input : ");

function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }

console.log(reversedNum(input));
alert(reversedNum(input));