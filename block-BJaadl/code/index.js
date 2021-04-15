let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let biggest = "";

function findLongest(words) {
  words.forEach((word) => {
    if(word.length > biggest.length) {
      biggest = word;
    }
});
console.log(biggest);
}
findLongest(words);
// - Convert the above array "words" into an array of length of word instead of word.
let lengthArray = words.map((word) => {
  return word.length;
})

// - Create a new array that only contains word with atleast one vowel.
let vowelArray = words.filter((word) => {
  if(word.toLowerCase().includes("a") || word.toLowerCase().includes("e") || word.toLowerCase().includes("i") || word.toLowerCase().includes("o") || word.toLowerCase().includes("u") ) {
    return word;
  }
});

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.
let final = words.filter((word) => {
  if(!word.toLowerCase().startsWith("a") && !word.toLowerCase().startsWith("e") && !word.toLowerCase().startsWith("i") && !word.toLowerCase().startsWith("o") && !word.toLowerCase().startsWith("u")) {
    return word;
  }
});

// - Create a new array that contianse words not ending with vowel
let finalArray = words.filter((word) => {
  if(!word.toLowerCase().endsWith("a") && !word.toLowerCase().endsWith("e") && !word.toLowerCase().endsWith("i") && !word.toLowerCase().endsWith("o") && !word.toLowerCase().endsWith("u")) {
    return word;
  }
});

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(numbers) {
  return numbers.reduce((acc, curr) => {
     acc = acc + curr;
     return acc; 
  }, 0);
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplyByThree = numbers.map((num) => {
  return num * 3;
});

// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
})

// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter((num) => {
  return num % 2 !== 0;
})


// - Create a new array that should have true for even number and false for odd numbers.
let trueOrFalse = numbers.map((num) => {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

// - Sort the above number in assending order.
let sortedArray = [...numbers].sort((a,b) => {
  return a - b;
});

// - Does sort mutate the original array?
"Yes"

// - Find the sum of the numbers in the array.
let newSum = numbers.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(numbers) {
  let average =  numbers.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0) / numbers.length;
return average;
}


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

  
function averageWordLength(strings) {
  return strings.map((string) => {
    return string.length;
  }).reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0) / strings.length;
}



