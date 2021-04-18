let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let averageGrade = persons.reduce((acc, curr) => {
  acc = acc + curr.grade;
  return acc;
}, 0) / persons.length;

// Find the average grade of male
let maleGrades = persons.filter((person) => {
  return person.sex === "M";
});

let averageMaleGrade = maleGrades.reduce((acc, curr) => {
  acc = acc + curr.grade;
  return acc;
}, 0) / maleGrades.length;

// Find the average grade of female
let femaleGrades = persons.filter((person) => {
  return person.sex === "F";
});

let averageFemaleGrade = femaleGrades.reduce((acc, curr) => {
  acc = acc + curr.grade;
  return acc;
}, 0) / femaleGrades.length;

// Find the highest grade
let highestGrade = persons.reduce((acc, curr) => {
  if(curr.grade > acc) {
    acc = curr.grade;
  }
  return acc;
}, 0);

// Find the highest grade in male
let highestMaleGrade = maleGrades.reduce((acc, curr) => {
  if(curr.grade > acc) {
    acc = curr.grade;
  }
  return acc;
}, 0);

// Find the highest grade in female
let highestfemaleGrade = femaleGrades.reduce((acc, curr) => {
  if(curr.grade > acc) {
    acc = curr.grade;
  }
  return acc;
}, 0);

// Find the highest grade for people whose name starts with 'J' or 'P'
let jpHighestGrade = persons.filter((person) => {
  return person.name.startsWith("J") || person.name.startsWith("P");
}).reduce((acc, curr) => {
  if(curr.grade > acc) {
    acc = curr.grade;
  }
  return acc;
}, 0);

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitObj = fruitBasket.reduce((acc, curr) => {
  if(acc[curr] !== undefined) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
  
}, {});
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

let fruitArray  = Object.keys(fruitObj).reduce((acc, curr) => {
    acc = acc.concat([[curr, fruitObj[curr]]]);
    return acc;
}, []);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
let flatData = 
  data.reduce((acc, curr) => {
  acc = acc.concat(curr);
  return acc;
}, []);

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

let flatDataTwo = dataTwo.reduce((acc, curr) => {
  acc = acc.concat(curr.flat(Infinity));
  return acc;
}, []);
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

function increment(num) {
  return ++num;
}
function double(num) {
  return num * 2;
}
function decrement(num) {
  return  --num;
}
function triple(num) {
  return num * 3;
}
function half(num) {
  return Math.round(num / 2);
}

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
let output1 = 
pipeline.reduce((acc, curr) => {
  acc = curr(acc);
   return acc;
}, 3);
//19
let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8

let output2 =
pipeline2.reduce((acc, curr) => {
  acc = curr(acc);
  return acc;
}, 8);
//219