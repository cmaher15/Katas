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