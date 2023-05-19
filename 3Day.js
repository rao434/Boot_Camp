                                  // Prcatice
// let array = [7,8,9,0,1,2,3,4];
// let resultFilter = array.filter((item)=> item > 2);
// let resultFind = array.find ((item) => item >2 );
// let resultMap = array.map ((item) => item >2 );
// let resultForeach = array.forEach((item) => item >2 );
// console.log(resultFilter);
// console.log(resultFind);
// console.log(resultMap);
// console.log(resultForeach);


// MAP

// const len = ["apple", "banana", "kiwi", "watermelon", "grapefruit"];
// const res1 = len.map ((word)=>word.length);
// console.log(res1)

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];
// const res = people.map((item)=>item.name)
// console.log(res)


// filter

// let  sumRes = [3,4,6,4,7,8,9,10];
// const evenNum = sumRes.filter((even)=>even%2 ===0);
// console.log(evenNum); 



// const people2 = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];

//   const ageDiff = people2.filter((person)=>person.age>30)
//   console.log(ageDiff);



//FIND
// let  sumRes = [3,4,6,4,7,8,9,10];
// const evenNum = sumRes.find((even)=>even%2 ===0);
// console.log(evenNum);

// const people2 = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];

//   const ageDiff = people2.find((person)=>person.age>30)
//   console.log(ageDiff);


  // FOREACH
  // const num =[1,2,3,4,5,6,7];
  // num.forEach((num,i,array)=> array[i]=num*2);
  // console.log(num);




  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
                                          // Assginment 3



// 1)Write a function that takes an array of numbers and returns the first even number using the find() method.
                    
// 2)Write a function that takes an array of strings and returns the first string that contains the word 'hello' using the 
// find() method.
// 3)Write a function that takes an array of objects with title and year properties and returns the first object with a 
// year property greater than or equal to 2000 using the find() method.
                                          
// 4) Create an array of strings and use the map() method to convert each string to all uppercase.
                                          
// 5)Create an array of objects representing cars with properties make and model, and use the map() method 
//    to create a new array with only the car makes.
                                          
// 6)Write a function that takes an array of strings and returns a new array with only the strings that start with the 
//    letter 'A' using the filter() method. 


// QNO1:
      // let evenNum = [1,3,5,7,8,9,1];
      // let fun = (evenNum)=>{
      // return evenNum.find((num)=>num%2 ===0);
      // }
      // console.log(fun(evenNum));


// QNO2
    //   let strArray = ["motha","hello","ahmad","ali"];
    //   let fun2 = (strArray)=>{
    //   return  strArray.find((add)=>add.includes("hello"))
    //   }
    //  let adding = fun2(strArray);
    //  console.log(adding);

// QNO3

// let people=[
//   {
//     title:"Hello motha",
//     year:2005
//   },
//   {
//     title:"hello Devloper",
//     year:2001
//   },
//   {
//     title:"hello",
//     year:1995
//   }
// ]

// let findYear =(array)=>{
//   return array.find((check)=>check.year>=2000)
// }
// let checking = findYear(people);
// console.log(checking);


// QNO4

// let newArray = ["ali","ahmad","faizan","motha"]
// let upperCase = newArray.map((i)=>i.toUpperCase());
// console.log(upperCase);

// QNO5
// let cars=[
//   {
//     propertis:"its wonderfull",
//     model:2000,
//   },
//   {
//     propertis:"its better",
//     model:2003,
//   },
//    {
//     propertis:"its so good",
//     model:1995,
//   }

// ]

// let carMap = cars.map((item)=>item.model);
// console.log(carMap); 


// QNO6
// let findString = (arr)=>{
//   return arr.filter((item)=>item.startsWith("A"))
// }
// const string =["Shani","Motha","Ali"]
// const checkStr = findString(string);
// console.log(checkStr);