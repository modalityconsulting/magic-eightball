// Magic 8-Ball 
let userName = 'Toby'; // The user's name goes here (optional)

// Ternary Expression - check if truthy (left of :), or falsey (right of :)
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!'); // Ternary Expression

let userQuestion = '';

if (userName || userQuestion != '') {
    console.log(`${userName} wants to know: "Ya'll got any cheez I can eat?"`);
} else (
    console.log("The user wants to know if ya'll got any cheese he can eat?")
);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidely so';
        break;
    case 2:
        eightBall = 'Reply hazy, try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'Error'; // This case should theoretically never be reached.
        break;
}

console.log(`The Magic Eight Ball says: ${eightBall}`);
