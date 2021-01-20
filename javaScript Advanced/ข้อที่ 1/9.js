let n = prompt("Enter factorial num : ");

const factorial = (num) => {
    if (num === 0){ 
        return 1; 
    }
    else{ 
        return num * factorial( num - 1 ); 
    }
}

alert(factorial(n))