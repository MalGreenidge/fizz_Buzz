// JS Prompt asking user for a number
let userNum = parseInt(prompt('Enter a number: '));

let number = userNum

// Fizz Buzz function that takes a parameter of number
let fizzBuzz = (num) => {
    // for loop that prints number from 1 up to number
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            alert('FizzBuzz') ;
        } else if (i % 5 === 0) {
            alert('Buzz');
        } else if (i % 3 === 0) {
            alert('Fizz');
        }
        alert(i);
    }
};


fizzBuzz(number);
