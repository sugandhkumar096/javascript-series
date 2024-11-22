// const array = [4,5,6,23,4,45];

// function fun1(array,index) {
//     console.log(`the number is ${array} and the index is ${index}`);
// }

// // for (let i = 0; i < array.length; i++) {
// //     fun1(array[i],i);
    
// // }

// // array.forEach(fun1);
// array.forEach(function(array,index){
//     console.log(`the number is ${array} and the index is ${index}`);
//     });


// filter method 

const numbers = [1,3,2,6,4,8];



const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);

//reduce method
// const number = [2,3,4,5,3,9];
// const sum = number.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue;


// });
// console.log(sum);
