console.log("hi from core-js");

// js is a synchronous , single threaded  language

// var msg = "hello";
// var msg = "hi";
// console.log(msg); // hi

// var allows us to reassign and redeclare variables    

// console.log(msg); // undefined
// var msg = "hello";


// console.log(msg); // ReferenceError: Cannot access 'msg' before initialization
// let msg = "hello";  // scriot creates a temporal dead zone for let and const variables
// let allows us to reassign but not redeclare variables 

//----------------------------------------------------------------------------------------------------//

// data types in js
// primitive data types : string, number, boolean, null, undefined, symbol
// non-primitive data types : object, array, function 

// Primitives are immutable and passed by value, while non-primitives are mutable and passed by reference.

// primitives are stored in stack memory, while non-primitives are stored in heap memory.

// when we assign a primitive value to a variable, it creates a copy of the value in memory.
// when we assign a non-primitive value to a variable, it creates a reference to the value in memory.
// let a = 10;
// let b = a; // copy of value is created in memory
// console.log(a); // 10
// console.log(b); // 10
// a = 20;
// console.log(a); // 20
// console.log(b); // 10
// let arr1 = [1, 2, 3];
// let arr2 = arr1; // reference to the value is created in memory
// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]
// arr1.push(4);
// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]

// List of primitive data types with examples
// String: "hello", 'world', `hi`
// Number: 10, 3.14, -5
// Boolean: true, false
// Null: null
// Undefined: undefined
// Symbol: Symbol('symbol') 
// String : a sequence of characters enclosed in single quotes, double quotes, or backticks.
// Number : a numeric value that can be an integer or a floating-point number.
// Boolean : a logical value that can be either true or false.
// Null : a special value that represents the absence of any object value.
// Undefined : a special value that represents the absence of a defined value.
// Symbol : a unique and immutable primitive value that can be used as a key for object properties. 

// List of non-primitive data types with examples
// Object: { name: "John", age: 30 }
// Array: [1, 2, 3]
// Function: function greet() { console.log("Hello"); }
// Object : a collection of key-value pairs, where the keys are strings and the values can be of any data type.
// Array : an ordered list of values, where each value can be of any data type.
// Function : a block of code that can be executed when called, and can take parameters and return a value.

//---------------------------------------------------------------------------------------------------//
// var a = 2
// let b =  // present inside the script scope

// function greet()
// {
//     var a = 1; // Local memory context will be created for all the variable inside it
//     let b = 4
//     console.log("hello world");
// }

// greet(); // added to call stack

