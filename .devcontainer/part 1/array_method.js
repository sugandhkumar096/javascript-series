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




//reduce method

const number = [2,3,4,5,3,9];
const sum = number.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;


});
console.log(sum);
