let counter = 160;
let sum = 0;

while( counter < 2048 ) {
    counter = counter + 2;

    sum = counter + sum;
}

alert (sum);