// const child=["ahmad","ali","khan"];
// const child2=["ahmad2","ali2","khan2"];
// const imrage =child.concat(child2)

// console.log("push>>>>>>>>>",imrage)



// for(person in child){
//     console.log("in________",person);
// }

// for(persons of child){
//     console.log("of______",persons);
// }








// ................................Assignment2Day5..........................................
// 1)Remove items from an array: Use the spread operator to remove one or more items from an array.
// 2)Create a new object with new properties: Use the spread operator to create a new object with new properties.
// Concatenating arrays: Use the spread operator to concatenate two or more arrays into a new array.
// 3)Write a function called sum that takes in any number of arguments and returns the sum of all the arguments. The function should use 
// the rest operator to handle an unknown number of arguments.
// 4): Use the spread operator to merge two or more objects into a single object


// QNO1:
// let remove =[1,2,3,4,5,6,7,8,9];
// const removeItem = [...remove.slice(0,8)];
// console.log(removeItem);


// QNO2
// const obj = {
//     name:"ali",
//     age:21,
// }

// const add ={...obj,class:5}
// console.log(add)


// const arr =[1,2,4,5,6,7];
// const addArray =[...arr,8,9];
// console.log(addArray); 


// QNO3
// function sum(...args) {
//     let result = 0;
//     for (let arg of args) {
//       result += arg;
//     }
//     return result;
//   }
//   console.log(sum(1, 2, 3, 4, 5));


// QNO4

// const obj1 = {
//     name:"ali",
//     age:21,
// }
// const obj2 = {
//     title:"ahmad",
//     number:41,
// }
// let newObj = { ...obj1, ...obj2 };
// console.log(newObj);











// ...............................AfterNoon..............................
// how we destracture nested object ?

// const person = {
//     name: "John",
//     age: 30,
//     state:"BA",
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       state: "CA",
//       zip: "12345"
//     }
//   };

//   const {name,age,state:updated,address:{state,city}} =person ;
//   console.log(name);
//   console.log(updated);


// how we destracture nested array 

// const numbers = [1, 2, [3, 4], 5, [6, [7, 8]]];

// const [name1,name2,[name3,name4],name5,[name6,[name7,name8]]] = numbers;

// console.log(name8);




// ..........................Assignment2Day5................................

// QNO1
// const apiResponse = {
//     status: "success",
//     data: {
//       user: {
//         name: "John Doe",
//         age: 32,
//         email: "johndoe@example.com",
//         address: {
//           street: "123 Main St",
//           city: "Anytown",
//           state: "CA",
//           zip: "12345"
//         }
//       },
//       orders: [
//         { id: 1, total: 100 },
//         { id: 2, total: 200 },
//         { id: 3, total: 300 }
//       ]
//     }
//   };

//   const processData = (apiResponse)=>{
//     const {name,age,email} =apiResponse.data.user;
//     const {street,city,state,zip}=apiResponse.data.user.address;
//     const order = apiResponse.data.orders.map((i)=>i.total)
    
//     const orderConfirm = {name,age,email,street,city,state,zip,order};
//     return orderConfirm;
//   }


// console.log(processData(apiResponse));

  // QNo2:
  // function divideByZero(numerator, denominator) {
  //   try {
  //     const result = numerator / denominator;
  //     console.log(result);
  //   } catch (error) {
  //     console.error('Error: ' + error.message);
  //   }
  // }

  // // divideByZero(24, 0); 
  // divideByZero(24, 4); 


  // QNO3:
  // function checkstr(str) {
  //   if (typeof str !== 'string') {
  //     console.log('Input is not a string');
  //   }
  //   console.log('The input is a string: ' + str);
  // }


  // try {
  //   // checkstr('Hello, world!');
  //   checkstr(123); 
  //   // checkstr(true); 
  // } catch (error) {
  //   console.error(error.message); 
  // }




  // QNo4:
//   const arr1 = {a:4,b:2};
//   const arr2 = {c:5,d:5};

//   const  addArray = {...arr1, ...arr2};
//   console.log(addArray);



//   // QNO5
//   const takeObj = ({title,author})=>{
//     console.log(`Title: ${title}`);
//     console.log(`Author: ${author}`)
//   }

//   const book = {
//     title:"The Author is giving good marks",
//     author:"Omar",
//     year :2003
//   }
// takeObj(book);




// QNO6:
const objWidth =({width,height})=>{
  const area = width * height;
  return area;
}

const rectangle = {
  width: 5,
  height: 10
};

const area=objWidth(rectangle);
console.log(area);



// QNO7
const objlatitude =({ latitude, longitude })=>{
return [ latitude, longitude ];
}

const location = {
  latitude: 132,
  longitude: 121.434
};

console.log(objlatitude(location))