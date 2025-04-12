
console.log("switch statement - Print days of the week");

const userInput = Number(prompt("Enter number between 1 to 7"))

switch (userInput) {
    case 1:
        console.log("The day is Monday");
        break;
    case 2:
        console.log("The day is Tuesday");
        break;
    case 3:
        console.log("The day is Wednesday");
        break;
    case 4:
        console.log("The day is Thursday");
        break;
    case 5:
        console.log("The day is Friday");
        break;
    case 6:
        console.log("The day is Saturday");
        break;
    case 7:
        console.log("The day is Sunday");
        break;  
    default:
        console.log("Invalid Number");
        break;
}