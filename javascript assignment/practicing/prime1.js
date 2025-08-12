var j;
var digit = 4;
for (j = 2; j < digit; j++) {
    if (digit % j == 0) {
        console.log("not prime number");
        break;
    }
    else {
        console.log("number is prime");
        break;
    }
}
