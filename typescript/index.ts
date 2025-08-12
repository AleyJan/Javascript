// // //tsc --init to create tsconfig.json file
// // //tsc -w  to watch ts file for changes and will automatically change to js
// //  //tsc to change ts file to js
// //  //node index.js to run js file


// // let fullName : string = "ali";    
// // console.log(fullName);             

// // let age: number = 22;
// // console.log(age);

// // let isMale: boolean = true;
// // console.log(typeof(isMale));

// // let plans : undefined;
// // console.log(typeof(plans));

// // let account : null = null;
// // console.log(account);


// // function exponention(parameter:number):number{
// //     return parameter*parameter;
// // }

// // console.log(exponention(8));



// // // Generics

// // //function
// // function identity<T>(arg:T):T{
// //     return arg
// // }

// // identity<number>(10);


// // //interface

// // interface Person<T,U>{
// //     fullName: T,
// //     age: U
// // }

// // const person1:Person<string,number>={
// //     fullName: "Ali",
// //     age: 10

// // }

// // const person2:Person<string,number>={
// //     fullName: "jan",
// //     age: 11

// // }

// // console.log(person1);
// // console.log(person2);

// // //funtion generic
// // function filterFunction<T extends {filter:Function}>(arg:T):T{
// //     return arg.filter((x: number) => x==2);

// // }
// // console.log(filterFunction([1,2,3,4]));


// //object cant have directly generics
// // interface Car<T, U> {
// //   make: T;
// //   model: U;
// // };

// // const myCar: Car<string, string> = {
// //   make: "suzuki",
// //   model: "mehran",
// // };


// // //enums implicitly give numbers

// // enum Direction{
// //     up,
// //     down,
// //     right,
// //     left,
// // }

// //enum with own number implementation

// // enum Direction1{
// //     up=2,
// //     down,
// //     left,
// //     right,
// // }

// // enum Direction2{
// //     up,
// //     down,
// //     left,
// //     right=1,
// // }

// //enum with string

// // enum Drive{
// //     lhd= "left hand drive",
// //     rhd= "right hand drive",
// // }

// // interface Car{
// //     make: string;
// //     model: string;
// //     drive: Drive;
// // }

// // const myCar: Car= {
// //     make: "suzuki",
// //     model: "mehran",
// //     drive: Drive.lhd,
// // }

// // console.log(myCar);

// //create enum then interface and then object

// enum HumanEnum{
//     M= "Male",
//     F= "Female",
//     o= "others",
// }

// interface Human{
//     name: string;
//     age: number;
//     gender: HumanEnum;
// }

// const Human1:Human ={
//     name: "ali",
//     age: 10,
//     gender: HumanEnum.M
// }

// console.log(Human1);


type Person = {
    fname: string;
    age: number;
    city: string;
}[]

const humanList : Person = [{
    fname: "ali",
    age: 22,
    city: "peshawar"

},{
    fname: "osama",
    age: 25,
    city: "Peshawar"
}]

console.log("humanList", humanList);

type arr = string[];

const names : arr = [ali , "ali"]