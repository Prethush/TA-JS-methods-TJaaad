// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentence");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));

// - Remove the first word in the array (strings)
strings.shift();

// - Find all the words that contain 'is' use string method 'includes'
strings.forEach((string) => {
  if(string.includes("is")) {
    console.log(string);
  }
});

// - Find all the words that contain 'is' use string method 'indexOf'
let isPosition = strings.indexOf("is");
console.log(strings[isPosition]);

// - Check if all the numbers in numbers array are divisible by three use array method (every)
let finalResult = numbers.every((num) => {
    return num % 3 === 0;
});


// -  Sort Array from smallest to largest
let sortedNumbers = [...numbers].sort((a, b) => {
  return  a - b;
})

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
let biggest = 0;
  numbers.forEach((num) => {
     if(num > biggest) {
       biggest = num;
     }
});
console.log(biggest);

// - Find longest string in strings
let longestString = ""; 
strings.forEach((string) => {
  if(string.length > longestString.length) {
    longestString = string;
  }
});
console.log(longestString);


// - Find all the even numbers
let evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

// - Find all the odd numbers
let oddNumbers = numbers.filter((num) => {
  return num % 2 !== 0;
});

// - Place a new word at the start of the array use (unshift)
strings.unshift("This");

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));

// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2, 4));

// - Replace 12 & 18 with 1221 and 1881
let positionOfTwelve = numbers.indexOf(12);
numbers[positionOfTwelve] = 1221;
let positionOfEighteen = numbers.indexOf(18);
numbers[positionOfEighteen] = 1881;


// - Replace words in strings array with the length of the word
let lengthArray = strings.map((string) => {
  return string.length;
});

// - Find the sum of the length of words using above question
let sum = lengthArray.reduce((acc, curr) => {
  return acc + curr;
}, 0);


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filteredCustomer = customers.filter((obj) => {
   return obj.firstname[0] === "J"
  
});

// - Create new array with only first name
let finalArray = customers.map((obj) => {
  return obj.firstname;
});

// - Create new array with all the full names (ex: "Joe Blogs")
finalArray = customers.map((obj) => {
  return `${obj.firstname} ${obj.lastname}`;
});

// - Sort the array created above alphabetically
console.log([...finalArray].sort());

// - Create a new array that contains only user who has at least one vowel in the firstname.
finalArray = customers.filter((obj) => {
  return obj.firstname.toLowerCase().includes("a") || obj.firstname.toLowerCase().includes("e") || obj.firstname.toLowerCase().includes("i") || obj.firstname.toLowerCase().includes("o") || obj.firstname.toLowerCase().includes("u");
});