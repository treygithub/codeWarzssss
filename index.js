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