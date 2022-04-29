/*In this exercise, we will be printing multiplication tables to the console.

Multiplication Table
We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

Input
const multiplicationTable = function(maxValue) {
  // Your code here
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

Output
1

1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25 

1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 18 21 24 27 30
4 8 12 16 20 24 28 32 36 40
5 10 15 20 25 30 35 40 45 50
6 12 18 24 30 36 42 48 54 60
7 14 21 28 35 42 49 56 63 70
8 16 24 32 40 48 56 64 72 80
9 18 27 36 45 54 63 72 81 90
10 20 30 40 50 60 70 80 90 100

Create a function named multiplicationTable that receives a number maxValue as input and creates a square multiplication table where maxValue is the largest value in the table.*/

let multiplicationTable = function (maxValue) {
let result = '\n';
for (let i = 1; i <= maxValue; i++) {
  for (let j = 1; j <= maxValue; j++) {
    result += (i*j) + ' '
  }
  result += '\n'
}
return result
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10))

/*ANALYSIS OF THIS CODE:
let multiplicationTable = function (maxValue) {
  1. We are defining our function
let result = '\n';
  2. This tells us our result is going to be separated with a line break (signified by '\n')
for (let i = 1; i <= maxValue; i++) {
  for (let j = 1; j <= maxValue; j++) {
    3. Here, we are establishing two loops (since the table will have both rows and columns). Two loops are required in order to calculate the amounts.
    result += (i*j) + ' '
  }
    4. This step redefines our result variable to produce the value of i*j for each loop, followed by a space.
  result += '\n'
}
    5. This step tells our result variable to include a line break after each loop. 
return result
}
  6. This returns our output!
 */

