//PALINDROME CHECKER

// Given a string, return true if the string is a palindrome
//  or false if it is not.  Palindromes are strings that
//  form the same word if it is reversed. 
//  --- Examples:
//   palindrome("madam") === true
//   palindrome("abcdefg") === false
//   palindrome("racecar")


//SOLUTION #1
const palindrome = str => {

    str = str.toLowerCase()
    // reverse input string and return the result of the
    // comparisong
    
    console.log(str === str.split('').reverse().join(''))
  }
// palindrome("James")




//SOLUTION #2 - NOT CASE SENSITIVE
function palindrome(str) {
  const reversed = str.split('').reverse().join('')
return str === reversed;
}
// palindrome("steven") --> false
// palindrome("racecar") --> true 



//HIGH PERFORMANCE
function isPalindrome(input){
  input = (typeof(input) === "string") ? input.toLowerCase().replace(/[^\w]|_/g, '') : input.toString()
  for(let i = 0; i < Math.floor(input.length/2); i++){
    if(input.charAt(i) !== input.charAt(input.length-i-1)) return false
  }
  return true
};

