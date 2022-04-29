/*Alert
Some of the following katas deal with arrays and looping! If you're having some trouble completing these, you might find it helpful to revisit some of the previous exercises, such as "Looping and Repetition","Array Operations and Properties", and "Looping Over Arrays". JavaScript does have some built-in helper functions for working with arrays such as .sort, .map, .filter, and others, but we highly recommend avoiding those functions while working through the prep katas.
For this kata, we'll be adding only the numbers in the array which match the given condition.
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.
Use some sort of looping. Do Not use Array.prototype.filter()

Expected Output:
6
9
144
0*/

const conditionalSum = function(values, condition) {
  let sum = 0
  for (let i = 0; i < values.length; i++) {
    if (condition == "even" && values[i] % 2 === 0) {
    sum += values[i]
    }
    else if (condition == "odd" && values[i] % 2 !== 0) {
      sum += values[i]
    }
  }
return (sum)
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));