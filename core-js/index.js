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

// Annonymus function 

// const greet = function() // it will be initialised in script scope and assigned to greet variable  
// {
//     var a = 1  // local memory context will be created for all the variable inside it
//     console.log("hi");
// }

// greet();  // added to call stack

// callback function : a function that is passed as an argument to another function and is executed after some operation is completed.


// function x(cb)
// {
//     console.log("hi from x");

//     cb();
// }

// function y()
// {
//     console.log("hi from y");
// }

// x(y); // hi from x, hi from y

// both x and y initialised in global scope, x is added to call stack, x is executed and it calls y, y is added to call stack and executed.

// IIFE : Immediately Invoked Function Expression : a function that is executed immediately after it is defined. It is used to create a new scope and avoid polluting the global scope.

// (
// function greet()
// {
//     console.log("hi from IIFE");
// }

// )
// ();  We cannot see a function mapped in the global scope because it is immediately invoked and executed, and then it is removed from the memory. It is not accessible outside of its own scope.


// HOF : Higher Order Function : a function that takes another function as an argument or returns a function as a result. It is used to create reusable code and to abstract away common patterns.


