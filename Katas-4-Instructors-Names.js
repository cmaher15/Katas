/*In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

Expected Output:

{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}*/


const instructorWithLongestName = function(instructors) {
  let longestLength = 0;
  let longestLengthIndex = 0;
  for (let i = 0; i < instructors.length; i++){
    if((instructors[i].name).length > longestLength){
      longestLength = (instructors[i].name).length;
      longestLengthIndex = i;
    }
  }
  return instructors[longestLengthIndex];
}


  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));







