// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  // your code goes here
let final = [];
  function allHouses(peopleName) {
    peopleName.forEach((userName) => {
      final.push(userName.name);
    });
  }
   got.houses.map((houseName) => {
    return houseName.people;
  }).forEach((peopleName) => {
    allHouses(peopleName);
  });
return final.length;
}
function peopleByHouses() {
  // your code goes here
  let obj = {};
  got.houses.forEach((house) => {
    obj[house.name] = house.people.length;
  });
  return obj;
}

function everyone() {
  // your code goes here
  let final = [];
  function allHouses(peopleName) {
      peopleName.forEach((userName) => {
        final.push(userName.name);
      })
  }

  got.houses.map((house) => {
    return house.people;
  }).forEach((peopleName) => {
    allHouses(peopleName);
  });
  return final;
}

function nameWithS() {
  // your code goes here
  let final = [];
  function allHouses(peopleName) {
     peopleName.forEach((userName) => {
        if(userName.name.toLowerCase().includes("s")) {
          final.push(userName.name);
        }
      })
  }

  got.houses.map((house) => {
    return house.people;
  }).forEach((peopleName) => {
    allHouses(peopleName);
  });
  return final;
}

function nameWithA() {
  // your code goes here
  let final = [];
  function allHouses(peopleName) {
     peopleName.forEach((userName) => {
        if(userName.name.toLowerCase().includes("a")) {
          final.push(userName.name);
        }
      })
  }

  got.houses.map((house) => {
    return house.people;
  }).forEach((peopleName) => {
    allHouses(peopleName);
  });
  return final;
}

function surnameWithS() {
  // your code goes here
  let final = [];
  function allHouses(peopleName) {
     peopleName.forEach((userName) => {
        let arr = userName.name.split(" ");
        if(arr[1][0] === "S") {
          final.push(userName.name);
        }
      })
  }

  got.houses.map((house) => {
    return house.people;
  }).forEach((peopleName) => {
    allHouses(peopleName);
  });
  return final;
}

function surnameWithA() {
  // your code goes here
  let final = [];
  function allHouses(peopleName) {
     peopleName.forEach((userName) => {
        let arr = userName.name.split(" ");
        if(arr[1][0] === "A") {
          final.push(userName.name);
        }
      })
  }

  got.houses.map((house) => {
    return house.people;
  }).forEach((peopleName) => {
    allHouses(peopleName);
  });
  return final;
}

function peopleNameOfAllHouses() {
  // your code goes here
  let obj = {};
  function allHouse(peopleName) {
   return  peopleName.map((userName) => {
        return userName.name;
    } )
  }

  got.houses.forEach((houseName) => {
    obj[houseName.name] = allHouse(houseName.people);

  });
  return obj;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
