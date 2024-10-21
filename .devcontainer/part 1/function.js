 
//  function sum (num1,num2) {
//     return num1 + num2;
    
//  }
//   const num =sum(2,4);
//   console.log(num);


// function birthday() {
//     console.log("happy birthday to you.....");
    
// }
// birthday();
// birthday();

// to check even or odd number 

// function iseven(num) {
//     if(num%2 === 0){
//         return true;
//     }
//     else 
//     return false;
// }
// evenNum = iseven(4);

// console.log(evenNum);
  
// function valueChk(array , target) {
//     for(let i = 0; i<5; i++){
//     if (array[i] === target) {
//         return i;
        
//     }
// }
//     return -1;
    
// }
// const array = [2,4,5,6,7,8];
// const value = valueChk(array,5);
// console.log(value);

//function expression 

// const sum = function (a,b) {
//     return a+ b;

    
// }
// const add = sum(4,6);
// console.log(add);

//arrow function 
// const  iseven = (num) => {
//         if(num%2 === 0){
//             return true;
//         }
//         else 
//         return false;
//     }
//     evenNum = iseven(4);
    
//     console.log(evenNum);

//     const  sum =  (num1,num2) => {
//             return num1 + num2;
            
//          }
//           const num =sum(2,4);
//           console.log(num);

//         const even = num => num%2 === 0;
         
//         console.log(iseven(40));

//     const firstString = string => string[0];

//     console.log(firstString("sugandh"));

//rest parameter in function

// function myFun(...numbers) {
//     sum = 0;
//     for(let number of numbers){
//         sum = sum + number;
//     }
//     return sum;
// }

//  const ans =myFun(2,3,4,45,6,7);
//  console.log(ans);

//parameter destructing 

// const person ={
//     name : "sugandh",
//     gender : "male",
//     age : 21

// }

// function details(obj) {
//     console.log(obj.name);
//     console.log(obj.age);
    
// }

// details(person);

//callback function 

// function fun1() {
//     console.log("my output is ....");
    
// }

// function fun2(callback){
//     console.log("second output is....");
//     callback();
// }

// fun2(fun1);

// function myName1(name) {
//     console.log("the output is:");
//     console.log(`my name is ${name}`);
    
// }
// function myName2(callback){
//     console.log("name is sugandh");
//     callback("sugandh");
// }

// myName2(myName1);

// function returning function 

// function fun1() {
//     console.log("the first function is");
//     function fun2() {
//         console.log("hello");
//     }
//     return fun2;
    
    
// }
// const ans = fun1();
// console.log(ans);


 
            

          



 