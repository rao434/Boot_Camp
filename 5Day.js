// class user {
//     constructor(x,y){
//         console.log("i called")
//         this.name= x;
//         this.age = y;
//     }
// }
// const p1 = new user(12,13);
// console.log(p1)



// OOP A teach Class

//........................Assignemnt 5Day .....................
// class animal {
//     constructor(x,y,z){
//         this.special=x;
//         this.color = y;
//         this.sound =z
//     }
// }
// const animal1 =new animal("good","yellow","better");
// console.log(animal1);
// const animal2 =new animal("bed","red","knock");
// console.log(animal2)
// const animal3 =new animal("fair","white","better");
// console.log(animal3)



// QNO2
// class bankAccount {
//     constructor(a,b,c){
//         this.accountNumer=a;
//         this.acchountHolder=b;
//         this.balance =  c;
//     }
//     deposit(amount){
//         this.balance +=amount
//         console.log(`Deposit success. Updated balance: ${this.balance}`);
//     }
//     withDraw(amount){
//         if(amount>this.balance){
//         console.log("With Draw Fail")
//         }else{
//             this.balance -= amount
//             console.log(`Withdrawal success. Updated balance: ${this.balance}`);
//         }
//     }
// }
// const checkBal = new bankAccount("0978","Rao Qurban",1000);
// console.log(checkBal);

// checkBal.deposit(5000);
// checkBal.withDraw(20000);





// QNO3
// class rectangle {
//     constructor(h,w){
//         this.height=h
//         this.width=w;
//     }
//     area(a){
//         a=this.height*this.width
//         console.log("Area",a)
//     }
//     perimeter(p){
//         p=2*(this.height+this.width)
//         console.log("perameter",p);

//     }
// }

// const RectangleArea =new rectangle(12,12);
// console.log(RectangleArea);
// RectangleArea.area(12);
// RectangleArea.perimeter(2);



// QNO4
// class Employee{
//     constructor(n,p,s){
//         this.name=n;
//         this.position=p;
//         this.salary=s;
//     }
//       giveRaise(percentage) {
//         const raiseAmount = this.salary * (percentage / 100);
//         this.salary += raiseAmount;
//         console.log(`Congratulations, ${this.name}! Your salary has been increased by ${percentage}%. Your new salary is ${this.salary}.`);
//       }

// }

// const Rao_Qurban = new Employee("Rao_Qurban", "Developer", 50000);
// Rao_Qurban.giveRaise(10);


// QNO5
// class ArrayManipulator{
//     constructor(num){
//         this.number=num
//     }
//     sum(){
//         let total= 0;
//         for(let i=0; i< this.number.length; i++){
//             total += this.number[i];
//         }
//         return total;
//     }
// }

// const arraySum =new ArrayManipulator ([1,2,3,4,5,6,7]);
// console.log(arraySum.sum());


// QNO6
// class ArrayFilter {
//     constructor(array) {
//         this.array = array;
//     }
//     filterAge() {
//         return this.array.filter(obj => obj.age >= 18);
//     }
// }
// const myArray = new ArrayFilter([
//     { name: "john", age: 19 },
//     { name: "Sign", age: 34 },
//     { name: "Alisa", age: 10 }
//   ]);
//   console.log(myArray.filterAge());