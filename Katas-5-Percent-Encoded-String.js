/* In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.

Percent Encoding
Take a look at the following URL, specifically the last part:

https://www.google.com/search?q=lighthouse%20labs

This URL will perform a google search for the term "lighthouse labs". Notice that when the string "lighthouse labs" is part of a URL, the space is replaced with %20.

If we want to add a parameter to a url, there are certain characters that must be encoded in order to make the URL valid. There are many characters that must be encoded, including: , !, ", and #. For this exercise, we will only be focusing on replacing the space with %20.

Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

Expected Output:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/


const urlEncode = function(text) {
let removeSpaces = "";
for (let i = 0; i < text.length; i++);
if (removeSpaces === "") {
  removeSpaces += text.replace(/\s/g, "%20")
  return removeSpaces
}

}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));