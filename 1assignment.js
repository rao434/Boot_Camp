// QNO1:
// function calculateArea(w, h) {
//     return w * h;
// }

// const w = 5;
// const h = 10;
// const area = calculateArea(w,h);

// console.log(`width ${w} and height ${h} is ${area}.`);


// QNO2:
// function calculateAverage(n) {
//     const sum = n.reduce((acc, curr) => acc + curr, 0);
//     const average = sum / n.length;
//     return average;
// }

// const n = [3, 5, 7, 11, 15];
// const average = calculateAverage(n);

// console.log(`The average of [${n}] is ${average}.`);



// QNO3:

// const filterLongStrings = (array) => {
//     return array.filter((str) => str.length > 5);
// };

// const inputArray = ["apple", "banana", "kiwi", "watermelon", "grapefruit"];
// const resultArray = filterLongStrings(inputArray);

// console.log(`Original array: ${inputArray}`);
// console.log(`Result array: ${resultArray}`);


// QNO4:
// const findMax = (array) => {
//     return Math.max(...array);
// };

// const inputArray = [10, 25, 7, 32, 19];
// const maxHeight = findMax(inputArray);

// console.log(`Input array: ${inputArray}`);
// console.log(`The highest number is: ${maxHeight}`);



// QNO5:

// const books = [
//     {title:"math book", author:"motha",},
//     {title:"bio book", author:"mazhaer",},
//     {title:"chem book", author:"ali",},
//     {title:"phy book", author:"ahmad",}
// ]

// const titles = books.map((book) => book.title);

// console.log(titles);    


// QNO6:
// const people4 = [
//     {name:"Ali", age:12,},
//     {name:"Mazhaer", age:15,},
//     {name:"Ahmad", age:20,},
//     {name:"Motha", age:25,},    
// ]
// const pro = people4.map((i)=>i.age)
// console.log(pro);


// QNO7

// const findOldest =(people5)=>{
//     let oldPerson = people5[0];
//     for (let i = 1; i < people5.length; i++) {
//         if (people5[i].age > oldPerson.age) {
//           oldPerson = people5[i];
//         }
//       }
//       return oldPerson;
// }

// const people5 = [
//     {name:"Ali", age:12,},
//     {name:"Mazhaer", age:15,},
//     {name:"Ahmad", age:20,},
//     {name:"Motha", age:25,},    
// ]

// const oldPerson = findOldest(people5)
// console.log(oldPerson);