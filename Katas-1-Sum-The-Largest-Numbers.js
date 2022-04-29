/*Some of the following katas deal with arrays and looping! If you're having some trouble completing these, you might find it helpful to revisit some of the previous exercises, such as "Looping and Repetition","Array Operations and Properties", and "Looping Over Arrays". JavaScript does have some built-in helper functions for working with arrays such as .sort, .map, .filter, and others, but we highly recommend avoiding those functions while working through the prep katas.

In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.

Expected Output:
11
5
126*/

const sumLargestNumbers = function(data) {
  let sum = 0;
  let secondSum = 0;
  for (let i = 0; i < data.length; i++){
    if (data[i] > sum) {
      sum = data[i]
    }
}
for (i = 0; i < data.length; i++) {
  if (data[i] > secondSum && data[i] < sum) {
    secondSum = data[i]
  }
}
return [sum + secondSum]
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
