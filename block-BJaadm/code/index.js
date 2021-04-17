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

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((person) => {
  return person.sex;
});

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => {
  return person.grade;
});
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person) => {
  return person.sex;
})

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

persons.filter((person) => {
  return person.name.toUpperCase().startsWith("J") || person.name.toUpperCase().startsWith("P");
}).forEach((person) => {
  console.log(person.name);
});

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

persons.filter((person) => {
  return person.name.toUpperCase().startsWith("A") || person.name.toUpperCase().startsWith("C");
}).forEach((person) => {
  console.log(person.name.length);
});
// Log all the filtered male ('M') in persons array

persons.filter((person) => {
  return person.sex === "M";
}).forEach((person) => {
  console.log(person.name);
});

// Log all the filtered female ('F') in persons array

persons.filter((person) => {
  return person.sex === "F";
}).forEach((person) => {
  console.log(person.name);
});

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array


persons.filter((person) => {
  return  (person.sex === "F") && (person.name.toUpperCase().startsWith("C") || person.name.toUpperCase().startsWith("J"));
}).forEach((person) => {
  console.log(person.name);
})
// Log all the even numbers from peopleGrade array

persons.filter((person) => {
  return person.grade % 2 === 0;
}).forEach((person) => {
  console.log(person.grade);
});

// Find the first name that starts with 'J' in persons array and log the object

let obj = persons.find((person) => {
  return person.name.toUpperCase().startsWith("J");
});
console.log(obj);
// Find the first name that starts with 'P' in persons array and log the object
let startsWithP = persons.find((person) => {
  return person.name.toUpperCase().startsWith("P");
});

console.log(startsWithP);

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let personName = persons.find((person) => {
  return person.name.toUpperCase().startsWith("J") && person.grade > 10 && person.sex === "F";
});

console.log(personName.name);

// Filter all the female from persons array and store in femalePersons array
let femalepersons = [];
persons.forEach((person) => {
  if(person.sex === "F") {
    femalepersons.push(person.name);
  }
});

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter((person) => {
  return person.sex === "M";
}).map((person) => {
  return person.name;
});
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc, curr) => {
  acc = acc + curr.grade;
  return acc;
}, 0);

// Find the average grade
let averageGrade = gradeTotal / persons.length;

// Find the average grade of male
let maleObject = persons.filter((person) => {
  return person.sex === "M"
});
let averageMaleGrade = maleObject.reduce((acc, curr) => {
    acc = acc + curr.grade;
    return acc;
}, 0) / maleObject.length;

// Find the average grade of female
let femaleObject = persons.filter((person) => {
  return person.sex === "F";
});
let averageFemaleGrade = femaleObject.reduce((acc, curr) => {
  acc = acc + curr.grade;
  return acc;
}, 0) / femaleObject.length;
// Find the highest grade
let gradeArray = [];
persons.forEach((person) => {
  gradeArray.push(person.grade);
});

let higestGrade = [...gradeArray].sort((a, b) => {
  return a - b;
}).pop();



// Find the highest grade in male
let highestMaleGrade = persons.filter((person) => {
  return person.sex === "M"
}).map((person) => {
  return person.grade;
}).sort((a,b) => {
  return a - b;
}).pop();
// Find the highest grade in female

let highestFemaleGrade = persons.filter((person) => {
  return person.sex === "F";
}).map((person) => {
  return person.grade; 
}).sort((a, b) => {
  return a - b;
}).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGrade = persons.filter((person) => {
  return person.name.toUpperCase().startsWith("J") || person.name.toUpperCase().startsWith("P");
}).map((person) => {
  return person.grade;
}).sort((a, b) => {
  return a - b;
}).pop();


// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
[...persons].map((person) => {
    return person.grade;
}).sort((a, b) => {
  return a - b;
}).forEach((grade) => {
  console.log(grade);
});
//yes
// Sort the peopleGrade in descending order
let sortedArray = persons.map((person) => {
  return person.grade;
}).sort((a, b) => {
  return b - a;
});

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
 sortedArray = [...persons].map((person) => {
  return person.grade;
}).sort((a, b) => {
  return b - a;
});

// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName = persons.map((person) => {
  return person.name; 
}).sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
peopleName = [...persons].map((person) => {
  return person.name; 
}).sort();