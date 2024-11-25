// const employee = {
//     name : "sugandh",
//     id : 25,
//     work : "software developer",
//     shift : "Day",
//     salary : 50000,
//     email: "sugandhkumar099@gmail.com",
//  }
// console.log(employee);


//dot and bracket object 

// console.log(employee.name);
// console.log(employee["id"]);

// iterate object 

// for(let key in employee){
//     console.log(employee);
//     console.log(`employee name is ${employee["name"]} and id is ${employee.id}`);

// }

//compute properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "objvalue1";
// const value2 = "objvalue2";

// const obj ={
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);

// const obj= {};
//  obj[key1] = value1;
//  obj[key2] = value2;

//  console.log(obj);
 


// spread operator

// const array1 = ["value1","value2","value3","value4"];
// const array2 = ["value5","value6","value7","value8"];

// const newArray = [...array1,...array2,"value9"];
// const spread = [..."djfhuiyaebgfudhfj"];

// console.log(spread);


// console.log(newArray);


// spread operator in object
// const key1 = "key1";
// const key2 = "key2";
// const key3 = "value";
// const key4 = "value";

// const obj = {
//      key1 : "key1",
//      key2 : "key2",
    
// };
// const obj2 ={
//     key3 : "value3",
//     key4 : "value4",

// };

//  const newobj = [ obj , obj2, "newitem"];
//  console.log(newobj);
// console.log(key1);



// cloning object 

const obj = {
    key1 : "value 1",
    key2 : "value2"
}

const obj2 = Object.assign({},obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);



