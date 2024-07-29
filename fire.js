
function reverse(str){
    if(str.length<1){
         return str;
    }
    

    return str.charAt(str.length-1)+ reverse(str.substring(0,str.length-1))


}


let helo="hello"
console.log(reverse("123156"))

console.log(helo.substr(0,4))








// function reverseString(str) {
//      // Base case: if the string is empty or has only one character, return it as is
//      if (str.length <= 1) {
//          return str;
//      }
//      // Recursive step: return the last character concatenated with the reversed substring
//      return str.slice(-1) + reverseString(str.slice(0,-1));
//      }
//  // Example usage:
//  const originalString = "Hello, world!";
//  const reversedString = reverseString(originalString);
//  console.log("Original String:", originalString);
//  console.log("Reversed String:", reversedString);