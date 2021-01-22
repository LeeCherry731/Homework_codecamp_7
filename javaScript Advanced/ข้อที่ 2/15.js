const calculateInterest = (money, years) => {

    let interest = 2.5 /100;

    let total = money;

    for (let i = 1; i <= years; i++) {
        total = total + (total * interest)
    }

    return total;
}


console.log(calculateInterest(15126,14));
console.log(calculateInterest(100000,1));