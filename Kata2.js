/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. The input string can be assumed 
to contain only alphabets (both uppercase and lowercase) and numeric digits.

*** Example ***
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

/*
function duplicateCount(text) {
    var dup = [];
    text.toLowerCase().split('').forEach((v, i, arr)=> {
        if(i != arr.lastIndexOf(v) && dup.indexOf(v) == -1) dup.push(v);
    });
    return console.log(dup);
  }

  duplicateCount('tess499sttt')
*/

  function duplicateCount(text) {
    if (!text) return 0; // no need moving forward if input is empty
  
    const tracker = new Set(); // keep track of all characters in the input
    const dupes = new Set(); // keep track of duplicate characters
  
    for (const char of text.toLowerCase()) {
      if (tracker.has(char)) {
        dupes.add(char);
      } else {
        tracker.add(char);
      }
    }
  console.log(dupes.size)
    return dupes.size;
  }

  duplicateCount('1122345aammkkiihhdfty')