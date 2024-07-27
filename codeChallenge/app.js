function checkPalindrome(str) {
  //get the str backwards
  const strStuff = str.split("");
 // turn str into array
  const strStuffRevered = strStuff.reverse();

  const strStuffJoined= strStuffRevered.join("")
 
  //reverse it and turn it back
  return strStuffJoined=== str
}

console.log(checkPalindrome("racecar"));
