function isPalindrome(word) {
  // Write your algorithm here
  let middle = 0
  if (word.length % 2 === 0) middle = word.length / 2
  if (word.length % 2 === 1) middle = (word.length / 2) - 0.5

  for (let i = 0; i < middle; i++) {
    let j = word.length - i - 1
    if (word[i] !== word[j]) return false
  }
  return true
}

isPalindrome('robot')

/* Add your pseudocode here
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

/* 
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("noon"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("repaper"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("rotated"));
}

module.exports = isPalindrome;
