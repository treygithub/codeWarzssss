/* Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number. */

//Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])  // => returns "(123) 456-7890"

function createPhoneNumber(numbers){
    var num = '';
    var number = '';
    for(var i =0; i < numbers.length; i++){
    num = numbers[i]
    number = number + num
    }
    var res = number.slice(0, 3)
    var res2 = number.slice(3, 6)
    var res3 = number.slice(6, 10)
    var phoneNum = `(${res}) ${res2}-${res3}`
    return phoneNum
  }

  // MY REFACTOR
  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++){
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

    // MY LAST REFACTOR
    function createPhoneNumber(numbers){
        return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
     }