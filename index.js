function isPalindrome(word) {
  // Write your algorithm here
  let string= word.toLowerCase();
  let neWordarray= Object.assign([], string);;
  let reverseWord= neWordarray.reverse();
  let joinedWord= reverseWord.join("");
  if(string === joinedWord) {

  return (true);
  }else if (string!== joinedWord) {
  
    return(false);
  }
}


/* 
  Add your pseudocode here
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
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
