/*
In this kata you'll be responsible for setting up your JS file from scratch. Make sure it is well organized!

Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.

Setup
Generating a random number
Use google to figure this out, there are many resources online that explain how to generate a random number in JavaScript.

Reading input from the command line
Reading input from the command line in node is quite difficult in a normal situation. For this kata we'd like you to setup a package.json file along side your code for this kata:

{
  "dependencies": {
    "prompt-sync": "^4.1.5"
  }
}
Then run npm install in the folder that contains your code and the package.json file. This will install the prompt-sync npm package for you to use in your code. Read through the documentation of this package so you know how it works.

Here is a starting file for this kata, run it first to understand how prompt works:

let prompt = require("prompt-sync")();

// code below (replace this example)
let answer = prompt("Guess a number: ");
console.log("You answered: " + answer);
Sample output
Lines preceded with > are provided by the user.

Guess a number:
> 12
Too Low!
Guess a number:
> 65
Too High!
Guess a number:
> 65
Already Guessed!
Guess a number:
> asdf
Not a number! Try again!
Guess a number:
> 42
You got it! You took 3 attempts!
*/