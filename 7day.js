// ..................Claas Worker.......................

// class Person{
//     constructor(n,cn){
//         this.name = n;
//         this.cnic = cn;
//         // console.log("Parent constructor Called");
//     }
//     walk (){
//         console.log("Parent walking");
//     }
// }
// class Students extends Person{
//     constructor(n,cn,roll){
//         super(n,cn);
//         this.rollNO=roll;
//         // this.name="Rao_Qurban"
//         // console.log("Student constructor called")
//     }
//     walk(){
//         super.walk()
//         console.log("Student can run")
//     }
// }

// const st=new Students("Qurban",123454,786)
// st.walk();



// ...........................Class Activity.....................

// QNO1

// class Vehical {
//     constructor(n,model,year){
//         this.name=n;
//         this.model=model;
//         this.year=year;
//     }
//     start(){
//         console.log(`Starting the ,${this.name} ,${this.model},${this.year}`)
//     }
// }

// class Car extends Vehical{
//     constructor(number,n,model,year){
//         super(n,model,year)
//         this.numberDor=number;
//     }
//     drive(){
//         console.log(`Driving the,${this.year} ,${this.name} Corolla with,${this.numberDor} doors.`)
//     }
// }

// class Motorcycle extends Vehical {
//     constructor(name, model, year) {
//       super(name, model, year);
//     }
// }

// const car = new Car("Toyota", "Corolla", 2020, 4);
// car.start(); 
// car.drive(); 

// const motorcycle = new Motorcycle("Honda", "CBR500R", 2022);
// motorcycle.start();


// Qno2
// class Shape{
//     constructor(w,h){
//         this.width=w;
//         this.height=h
//     }
//     area(){
//         const a= this.width*this.height;
//         console.log(a);
//     }
// }

// class Rectangular extends Shape{
//     constructor(w,h,c){
//         super(w,h);
//         this.color=c;
//     }
//     draw(){
//         console.log("Indicating that the rectangle is being drawn")
//     }
// }

// const print = new Rectangular(12,10,"red");
// console.log(print);
// print.area();
// print.draw();


// QNO3
// class Animal{
//     constructor(n,a){
//         this.name= n;
//         this.age = a;
//     }
//     eat(){
//         console.log("Can Eat");
//     }
// }

// class Dog extends Animal{
//     constructor(n,a,b){
//         super(n,a);
//         this.bread= b
//     }
//     bark(){
//         console.log("Can Bark");
//     }
// }

// const animalPrint = new Dog("Mazhar",21,"Aple")
// console.log(animalPrint);
// animalPrint.eat();
// animalPrint.bark();