function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    let j = word.length - i - 1
    if (word[i] !== word[j]) return false
  }
  return true
}

// previous code not necessary
// let middle = 0
//if (word.length === 0 || word.length === 1) return true
// if (word.length % 2 === 0) middle = word.length / 2
// if (word.length % 2 === 1) middle = (word.length / 2) - 0.5

/* Add your pseudocode here
  iterate through the word with a loop
  if first element is not the same as the last element, and so on
    return false
  else  
    return true
*/ 

/* Add written explanation of your solution here
  check if the string has an even or odd length
    if even, iterate through the half of the word length (6 / 2 = 3)
    if odd, iterate through half of the word length rounded down (7 / 2 = 3.5 => 3)
    then,
      get the first element of the array and the last element of the array
      check if they are equal => if not, return false
      loop again with the second element and second to last element until the index reaches the middle of the array
      if loop goes through specified elements => return true
    madam
    middle = 3, d
    word[1] = m
    word[2] = a
    word[3] = d
    word[5] = a
    word[5] = m
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("repaper"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("rotated"));
  console.log("");
}

module.exports = isPalindrome;
