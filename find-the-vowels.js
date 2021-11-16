//FIND THE VOWELS

// write a function that takes a string as argument and returns the number of vowels contained in that string


// SOLUTION #1
const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}



//SOLUTION #2
const findVowels = str => {
  const matched = str.match(/[aeiou]/gi)
  return matched ? matches.length : 0
}