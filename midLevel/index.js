// const arrayOfNumbers = [-1, 150, 190, 170, -1, -1, 160, 180];

// const arrayOfNumbers2 = [130, -1, 78, -1, 0, -1, 89, 67, 2, -1];

// const arrayOfNumbers3 = [-1, -1, 90, 0, 1, -1, 9, 11, -1];

// function solution(array) {
//   //declare empty array to store -1 values
//   const negativeNumbers = [];

//   //maps over the array pushing negatives into the indices
//   const positiveNumbers = array
//     .map((num, index) => {
//       if (num === -1) {
//         negativeNumbers.push(index);

//         return null;
//       }
//       return { num, index };
//     })
//     .filter((item) => item !== null);

//   //sorts the non negative numbers
//   positiveNumbers.sort((a, b) => a.num - b.num);

//   //used to set index for positives
//   let positiveIndex = 0;

//   //merging both negatives and positives back together respecting the index and position of -1
//   const sortedArray = array.map((num, index) => {
//     if (negativeNumbers.includes(index)) {
//       return -1;
//     } else {
//       const sortedNum = positiveNumbers[positiveIndex].num;
//       positiveIndex++;
//       return sortedNum;
//     }
//   });

//   //returns the new array that has been sorted keeping the indices and positions of all negatives
//   return sortedArray;
// }

// console.log(solution(arrayOfNumbers3));

const input = "Hello World";

const inpu2 ="Tis the season of the end, when man and all he knows will be cast into utter confusion"

const input3 = "This one should be easy"

function countVowels(input) {

    //array of vowels
  const vowels = ["a", "e", "i", "o", "u"];

  //vowel count initialized
  let vowelCount = 0;

  //all input to lowercase
  input = input.toLocaleLowerCase();

  //for every character in input split will seperate them and check if they are a vowel if so vowelCount in incremented
  for(let char of input.split("")){
    if (vowels.includes(char)) {
        vowelCount++;
    }
  }

  //returns the total ammount of vowels in the input string
  return vowelCount;
}

console.log(countVowels(input3));


function capitalize(string){
  // convert string to arr
  const newArr = string.split(" ")
 
  // map or loop over it and identify the first letter of each word
  // capitalize each word
  const mappedArray = newArr.map(word => word[0].toUpperCase() + word.slice(1))

  // arr back to string

  const final = mappedArray.join(" ")

  return final
}

const sentence = "brian is the best he can be!" // "Brian Is The Best He Can Be!"

console.log(capitalize(sentence))

//understand the ?  // clarification

//pseduo code // plan

// Zak's 3   ->    What data is coming in ?   What am i doing to it?   What am I returning?


