/*In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Input
const talkingCalendar = function(date) {
  // Your code here
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

Output
December 2nd, 2017
November 11th, 2007
August 24th, 1987

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017*/

let numberMonth = function(month) {
  switch(month) {
    case 01:
      return "January";
      case 02:
        return "February";
        case 03:
          return "March";
          case 04:
            return "April";
            case 05:
              return "May";
              case 06:
                return "June";
                case 07:
                  return "July";
                  case 08:
                    return "August";
                    case 09:
                      return "September";
                      case 10:
                        return "October";
                        case 11:
                         return "November";
                          case 12:
                            return "December"
            
  }
}

  let numberDay = function(day) {
  if (day == '01' || day == '21' || day == '31') {
    return day.toString() + "st"
  }
  else if (day == '02' || day == '22') {
    return day.toString() + "nd"
  }
  else if (day == '03' || day == '23') {
    return day.toString() + "rd"
  }
  else {return day.toString() + "th"
  }
  }

  let talkingCalendar = function(date) {
    let arr = date.split('/');
    let year = arr[0];
    let month = numberMonth(Number(arr[1]));
    let day = numberDay(Number(arr[2]));
    return (month + " " + day + ", " + year);




  }




console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


/*ANALYSIS OF THIS CODE:

let numberMonth = function(month) {
  switch(month) {
    case 01:
      return "January";
      case 02:
        return "February";
        case 03:
          return "March";
          case 04:
            return "April";
            case 05:
              return "May";
              case 06:
                return "June";
                case 07:
                  return "July";
                  case 08:
                    return "August";
                    case 09:
                      return "September";
                      case 10:
                        return "October";
                        case 11:
                         return "November";
                          case 12:
                            return "December"
            
  }
}
      1. In this first function, we have used a switch statement to define the different months that will be output based on the date number that is put in.

  let numberDay = function(day) {
  if (day == '01' || day == '21' || day == '31') {
    return day.toString() + "st"
  }
  else if (day == '02' || day == '22') {
    return day.toString() + "nd"
  }
  else if (day == '03' || day == '23') {
    return day.toString() + "rd"
  }
  else {return day.toString() + "th"
  }
  }

      2. This second function turns the day of the month into a string by using .toString(), and then adds the appropriate letters following it (st, nd, rd, th)

  let talkingCalendar = function(date) {
    let arr = date.split('/');
    let year = arr[0];
    let month = numberMonth(Number(arr[1]));
    let day = numberDay(Number(arr[2]));
    return (month + " " + day + ", " + year);

      3. This final section of the code puts our other functions together. We define dArr as the date that will be inputted, using .split() to separate the data into a list (aka array), where each item in the list is determined by what is separated with a "/". We then define the year as the first element of the array, since this will always be the first item entered for our input. We then use the Number() function to define month and day, since they are initially input as numbers. We tell the code to look for these numbers based on their possition in the array we have created. 
      
      4. Finally, we return a string which contains our month, day, and year variables including the appropriate punctuation!



  }
*/