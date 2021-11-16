// fizzbuzz challenge


// QUESTION:
// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”


//solution #1
const fizzBuzz = num => {
    for(let i = 1; i <= num; i++) {
      // check if the number is a multiple of 3 and 5
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      } // check if the number is a multiple of 3
        else if(i % 3 === 0) {
        console.log('fizz')
      } // check if the number is a multiple of 5
        else if(i % 5 === 0) {
        console.log('buzz')
      } else {
        console.log(i)
      }
    }
  }

fizzBuzz(15)


//solution #2
for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}



//solution #3
for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}



//solution #4
for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)
