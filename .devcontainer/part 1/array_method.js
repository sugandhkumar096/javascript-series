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

// const numbers = [1,3,2,6,4,8];



// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });
// console.log(evenNumbers);

//reduce method
// const number = [2,3,4,5,3,9];
// const sum = number.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue;


// });
// console.log(sum);

// const usercart = [
//     {productId: 1, productName: "samsung",price: 12000},
//     {productId: 2, productName:"vivo", price: 14000},
//     {productId:3, productName: "realme", price:10000}
// ]
// const totalAmount = usercart.reduce((totalPrice,currentvalue)=>{
//     return totalPrice + currentvalue.price;
// },0);

// console.log(totalAmount);

// sort method
 //const number = [3,177,87,89,2,12,34];
// number.sort();
//  console.log(number);

// const sorting = number.sort((a,b)=>{
//     // return a-b;
//     //return b-a;
// });
// console.log(number);

// const product = [
//     {productId : 1,productname :"laptop", price: 1000},
//     {productId : 2,productname :"mobile", price: 12000},
//     {productId : 3,productname :"earphone", price: 500},
//     {productId : 4,productname :"headphone", price: 1000},
//     {productId : 5,productname :"invertor", price: 10000},
// ]

//   product.sort((a,b) =>{
//     // return a.price - b.price;
//     return b.price - a.price;
//   });

//   console.log(product);
 
// find method

// const myArray = ["aman","chandan","gaurav","anuj","xyz"];
//   function stringlength(string){
//     return string.length===3;
// }


// const ans = myArray.find(stringlength);

// const ans = myArray.find((string)=>string.length === 3{
// });

// const user = [
//     {userId : 1, userName: "aman"},
//     {userId : 2, userName: "chandan"},
//     {userId : 3, userName: "gaurav"},
//     {userId : 4, userName: "deepak"},
    
// ]
// const ans = user.find((user)=> user.userId===3
// );
// console.log(ans);

// every function 


// const number = [2,4,6,5,8,10];

// function iseven(number){
//     return number % 2 == 0;

// }

// const ans = number.every((iseven)=> number % 2===0
// );

// const cartItem = [
//         {productId : 1,productname :"laptop", price: 1000},
//         {productId : 2,productname :"mobile", price: 12000},
//         {productId : 3,productname :"earphone", price: 500},
//         {productId : 4,productname :"headphone", price: 1000},
//         {productId : 5,productname :"invertor", price: 10000},
//     ]


// const ans = cartItem.every((item)=> item.price < 30000);
// console.log(ans);


// splice method
// start , insert and delete

//const myArray = ["item1","item2","item3","item4","item5"];
//delete
// myArray.splice(1,2);
// console.log(myArray);

//insert

// myArray.splice(5,0,"item6","item7");
// console.log(myArray);

//insert and delete together

// myArray.splice(2,3,"othestring");
// console.log(myArray);






  


 