// video 2 
// console first
// console.log('Hi')
export {};
// declear variable
// const country = "Bangladesh";
// console.log(country)
// -------------------------------
// video 3
// reassign x
// let PlayerName = "Sakib Al Hasan";
// let PlayerName;
// let age = 34
// console.log(PlayerName)
// PlayerName = "Sakib Al Hasan";
//  age = 44
//  console.log(age)
// function
// function multiply(a:number,b:number){
//     return a * b
// }
// console.log(multiply(3,5)) 
// array 
// let fruit  = ['Mango', 'Banana', 'Apple']
// // let fruit = []
// fruit.push('pineapple')
// console.log(fruit)
// let mixed  = ['Mango', 1 , true]
// // let fruit = []
// mixed.push('pineapple')
// console.log(mixed)
// let mixed  = ['Mango', 1 , true,{}]
// // let fruit = []
// mixed.push({
//     name: 'nick'
// })
// console.log(mixed)
// object 
// let person = {
//     name : "Nick Roy",
//     age : 23,
//     isCaptain : true
// }
// person.isCaptain = false
//--------------------------------
// video - 4 
// let a : string;
// let b : number
// a = "adbik"
// b = 32
// number 
// let b : string | number
// // array
// let a : (number | string)[]= []
// a.push('Sum', 4 )
// b = 'sumit'
// // let c : object
// let c : {
//     name : string,
//     age: number,
//     student:boolean
// }
// c = {
//     name: 'nick roy',
//     age:23,
//     student : true
// }
// -----------------------------------
// video - 5 
// let a : any[] = []
// a.push('Bangladesh')
// a.push(4)
// console.log(a)
// let b : {
//     name : any,
//     age: any
// }
// b={
//     name: 'nick',
//     age:34
// }
//-------------------------------------
// //  video -6 
// let myFunc : Function;
// myFunc= () =>{
//     console.log('Hello')
// };
// let myName = (firstName : string , lastName : string, middleName:string = "chandra" ) =>{
//     console.log(middleName)
//       console.log(`Hi ${firstName} ${lastName}`)
// }
//  myName('Nick' , "roy")
// let myNum = (a : string , b : string, c:string = "true") =>{
// return a + b
// }
//  myName('Nick' , "roy")
// ___________________________________________________________
// video - 7
// type numOrString = string | number;
// type userType =  {name: string; age: number}
// const userDetails = (
//     id: numOrString ,
//     user:userType
// )=>{
// console.log(`Hi my name is ${user.name} , my age is ${user.age}, my id is ${id}`)
// }
// const sayHello = (user: userType) => {
//   console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
// };
//___________________________________
// video - 8 
// let add: (x:number , y:number , z:string)=> number;
// add =(a:number , b:number , c:string)=>{
//    if (c === 'add'){
//     return a + b
//    }else{
//      return a -b 
//    }
// }
// console.log(add(3 , 5 , "min")) 
