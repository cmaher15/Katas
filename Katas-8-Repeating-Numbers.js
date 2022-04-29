/*The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value.

Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.

Expected Output
1111111111
11, 222
10101010, 343434343434, 9292
*/

	


let repeatNumbers = function(data) {
let string = [];
for (let i = 0; i < data.length; i++){
let a = data[i][0];
let b = data[i][1];
for(let j = b; j > 0; j--){
string += a;
if(j === 1){
string += ', ';
}
}


let array = [];
array.push(string);
}

let answer = array.join(",");
answer = answer.replace(/,\s$/,"")

return answer;
} 

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


/*Analysis of this code:
let repeatNumbers = function(data) {
  1. We are defining our function.
let string = [];
  2. We are assigning an empty array to the variable string.
for (let i = 0; i < data.length; i++){
  3. Our FIRST loop is telling our code to look at the  main array (not the nested one);
let a = data[i][0];
let b = data[i][1];
  4. We are defining two variables, one which is the number that will be repeated in each array (a), and the number that represents how many times it will be repeated (b).
for(let j = b; j > 0; j--){
string += a;
if(j === 1){
string += ', ';
}
}
  5. This section of our code includes our SECOND loop, which will look through each nested array in the main array. It is looking specifically at the second number (b), which is why j is assigned the value of b. This code section tells the loop to look for b, and any time it finds it to increase the value of A the amount of times b indicates (i.e., the number in b's position.) If j finds more than one nested array, we are telling it to return each value, separated by a comma.



var array = [];
array.push(string);
}

let answer = array.join(",");
answer = answer.replace(/,\s$/,"")

return answer;
} 

  6. The final part of our code tells us to return the answer in the form of a new array, containing the values found with our 'string' variable. However, since the instructions want the output to be in string format, we then use .join() to transform the array to a string, and separate it with commas. Lastly, because the instructions specify we need to remove the last comma from the string, we need to use .replace() to remove the LAST comma and replace it with blank space.
 */

  