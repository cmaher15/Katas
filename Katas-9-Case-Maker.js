/*In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Input:
const camelCase = function(input) {
  // Your code here
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

Output
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.*/

let camelCase = function(str) {
let firstLetter = str
.toLowerCase()
.split(' ')
.map(word => {return word.charAt(0).toUpperCase() + word.slice(1);
})
.join('')
return firstLetter.charAt(0).toLowerCase() + firstLetter.slice(1);
}


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*ANALYSIS OF THIS CODE: 
let camelCase = function(str) {
  1. We are defining our function.
let firstLetter = str
.toLowerCase()
.split(' ')
.map(word => {return word.charAt(0).toUpperCase() + word.slice(1);
})
  2. We are defining the firstLetter variable. This variable will take in a string (str, the same input our function takes in). In step 1, it will convert ALL characters in the string to lowercase, using the .toLowerCase() method. In step 2, we use the .split(' ') method. This takes in the entire string and split it on each space. This returns an array containing the words in the string. In our .map() function, we are using .map to access the first character of each word, convert it to uppercase, and then cocatenate it to the rest of the string.
.join('');
  3. Since we currently have an array but the instructions want a string, the last step is to join the array back together as a string, using .join(). Because we are formatting this in camelCase format, we do NOT want spaces between the words! So, for the separator for .join, we make it an empty string.
  
    return firstLetter.charAt(0).toLowerCase() + firstLetter.slice(1);
}
  4. The final step is to 'return' our firstLetter variable! BUT! We need to revise the variable to reverse the capitalization of the first word, because that's the format for camel Case! so, we return firstLetter, but we use .charAt and .toLowerCase to reformat the first letter back to lower case, and then we use .slice to return the rest of the string with the revised first letter!
*/ 