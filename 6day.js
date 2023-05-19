// ........................Home Assignment ......................
// QNO1
const takeArray = (str)=>{
    return str.sort((a,b)=>b.length - a.length)
}

const AnimalArray = ["cat","dog","cow","monkey"];
const sortArray =takeArray(AnimalArray);

console.log("QNO1",sortArray); 


// QNO2:
const objArray = (name)=>{
    return name.filter((a)=> a.age > 30);
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 50 },
  ];

const peopleOver = objArray(people);
console.log("QNO2",peopleOver); 



// QNO3
const multipleArray= (...array)=>{
    const combine = [...array.flat()].sort((a,b)=>b-a)
    // The flat() method is called on the array of arrays to create a new flattened array, which is then sorted in descending order 
    return combine;
}

const arr1 = [3, 5, 1, 4];
const arr2 = [8, 2, 7, 6];
const arr3 = [9, 0];
const imarage= multipleArray(arr1,arr2,arr3);
console.log("QNO3",imarage);


// QNO4
const filterVowels = (strings)=> {
    const vowels = ["a", "e", "i", "o", "u"];
    return strings.filter((string) => {
      const stringVowels = string.toLowerCase().split("").filter((char) => vowels.includes(char));
      const stringConsonants = string.toLowerCase().split("").filter((char) => !vowels.includes(char));
      return stringVowels.length > stringConsonants.length;
    });
  }
  const strings = ["apple", "banana", "cat", "elephant", "igloo", "orange"];
const filteredStrings = filterVowels(strings);
console.log("QNO4",filteredStrings);


// QNO5
const printPrime=(n)=> {
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log("QNO5",i);
      }
    }
  }
  printPrime(17);



// QNO6
const sortDescending =(...people1)=> {
    const ages = people1.map(person => person.age);
    ages.sort((a, b) => b - a);
    return ages;
  }

  const people1 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 50 },
  ];

  const sortedAges = sortDescending(...people1);
  console.log("QNO6",sortedAges);



// QNO7

const logLocation=({ city, state, country })=> {
    console.log("QNO7",`${city}, ${state}, ${country}`);
  }

  const location = {
    city: "San Francisco",
    state: "California",
    country: "USA",
  };

  logLocation(location);




//QNO8
const convertToNumber =(str)=> {
    try {
        const num = Number(str);
        if (isNaN(num)) {
            throw new Error("Input is not a valid number");
        }
        return num;
    } catch (error) {
        console.error(error.message);
    }
}
const str = "097";
const str2 = "ertyu";
const num = convertToNumber(str);
console.log("QNO8",num); 



// QNO9
const findRecentMovie=(movies)=> {
    return movies.find(movie => movie.year >= 2000);
  }
  const movies = [
    { title: "The Matrix", year: 1999 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    { title: "Harry Potter and the Sorcerer's Stone", year: 2001 },
    { title: "Inception", year: 2010 }
  ];

  const recentMovie = findRecentMovie(movies);
  console.log("QNO9",recentMovie); 



// QNO10
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        console.log("QNO10",`Hello, my name is ${this.name} and I am a ${this.age}-year-old ${this.gender}.`);
    }
}
const Rao_Arslan = new Person("Rao_Arslan", 18, "male");
Rao_Arslan.greet()

