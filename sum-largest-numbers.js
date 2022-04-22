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
