console.log("hi from core-js");

// js is a synchronous , single threaded  language 1st class function

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


// -----------------------------------------------------------------------------------------------------------------------------------------------

// Objects in JavaScript are collections of key-value pairs, where the keys are strings and the values can be of any data type. Objects can be created using object literals, constructor functions, or the Object.create() method.

// Object literals : a way to create objects using a simple syntax. We can define properties and methods directly within the curly braces.  
// let person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };
// Constructor functions : a way to create objects using a function that serves as a template for creating multiple instances of the same type of object. We can define properties and methods within the constructor function using the this keyword.
// function Person(name, age) {
//     this.name = name;    
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello, my name is " + this.name);
//     }
// }
// let person1 = new Person("John", 30);
// let person2 = new Person("Jane", 25);
// Object.create() method : a way to create objects using an existing object as a prototype. We can define properties and methods on the prototype object, and the new object will inherit them.    
// let personProto = {
//     greet: function() {
//         console.log("Hello, my name is " + this.name);       
//     }
// };
// let person1 = Object.create(personProto);
// person1.name = "John";
// person1.age = 30;
// let person2 = Object.create(personProto);
// person2.name = "Jane";
// person2.age = 25;

let obj = {
    name: "John",
    age: 30,
}

//delete obj.name;
console.log(obj); // { age: 30 }

// for(let key in obj)
// {
//     console.log(key, obj[key]);
// }

// for(let key in Object.keys(obj))
// {
//     console.log(key, obj[key]);
// }

// console.log(Object.values(obj)); // [30]

// for(let i in Object.values(obj))
// {
//     console.log(Object.values(obj)[i]);
// }

// console.log(Object.entries(obj)) // [ [ 'name', 'John' ], [ 'age', 30 ] ]

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// array : An ordered list of values, where each value can be of any data type. Arrays can be created using array literals or the Array constructor. Arrays have a length property that returns the number of elements in the array, and they have various methods for manipulating the elements, such as push(), pop(), shift(), unshift(), splice(), slice(), and forEach().

// let arr = [1, 2, 3, 4, 5];       
// let arr = new Array(1, 2, 3, 4, 5); // array constructor
// console.log(arr.length); // 5


 let arr = [10, 20, 30, 40, 50];

// for(let i =0; i< arr.length; i++)
// {
//     console.log(arr[i]);

// }

// for(let i in arr) // for in loop is used to iterate over the properties of an object, not the elements of an array. It returns the index of the array as a string.
// {
//     console.log(arr[i]); // 1, 2, 3, 4, 5
// }

// for(let i of arr) // for of loop is used to iterate over the elements of an array. It returns the value of the array.
// {
//     console.log(i); // 1, 2, 3, 4, 5
// }   

// arr.forEach( function( value, index, array){ 
//     // forEach loop is used to iterate over the elements of an array. It takes a callback function as an argument, which is executed for each element in the array. The callback function takes three arguments: the current value, the index of the current value, and the array itself.   
//     console.log(` value ${value},  index ${index}, array ${array}`); // 10 0 [ 10, 20, 30, 40, 50 ]  
// })

// map() method is used to create a new array by calling a provided function on every element in the calling array. The map() method takes a callback function as an argument, which is executed for each element in the array. The callback function takes three arguments: the current value, the index of the current value, and the array itself. The map() method returns a new array with the results of calling the provided function on every element in the calling array.

// let newArr = arr.map( function( value, index, array){ 
//     return value * 2; // 20, 40, 60, 80, 100
// })
// console.log(newArr); // [20, 40, 60, 80, 100]   
// console.log(arr); // [10, 20, 30, 40, 50]   map() method does not modify the original array. It returns a new array with the modified values.

// filter() method is used to create a new array with all elements that pass the test implemented by the provided function. The filter() method takes a callback function as an argument, which is executed for each element in the array. The callback function takes three arguments: the current value, the index of the current value, and the array itself. The filter() method returns a new array with all elements that pass the test implemented by the provided function.

// let newArr = arr.filter( function( value, index, array){ 
//     return value > 30; // 40, 50
// })
// console.log(newArr); // [40, 50]   
// console.log(arr); // [10, 20, 30, 40, 50]   filter() method does not modify the original array. It returns a new array with the modified values.    

// find() method is used to return the value of the first element in the array that satisfies the provided testing function. The find() method takes a callback function as an argument, which is executed for each element in the array. The callback function takes three arguments: the current value, the index of the current value, and the array itself. The find() method returns the value of the first element that satisfies the provided testing function, or undefined if no elements satisfy the testing function.

// let newArr = arr.find( function( value, index, array){ 
//     return value > 30; // 40
// })  
// console.log(newArr); // 40

// some() method is used to test whether at least one element in the array passes the test implemented by the provided function. The some() method takes a callback function as an argument, which is executed for each element in the array. The callback function takes three arguments: the current value, the index of the current value, and the array itself. The some() method returns true if at least one element in the array passes the test implemented by the provided function, and false otherwise.

// let newArr = arr.some( function( value, index, array){ 
//     return value > 30; // true
// })  
// console.log(newArr); // true

// every() method is used to test whether all elements in the array pass the test implemented by the provided function. The every() method takes a callback function as an argument, which is executed for each element in the array. The callback function takes three arguments: the current value, the index of the current value, and the array itself. The every() method returns true if all elements in the array pass the test implemented by the provided function, and false otherwise.

// let newArr = arr.every( function( value, index, array){  
//    return value > 30; // false
// })
// console.log(newArr); // false    

// reduce() method is used to apply a function to an accumulator and each element in the array (from left to right) to reduce it to a single value. The reduce() method takes a callback function as an argument, which is executed for each element in the array. The callback function takes four arguments: the accumulator, the current value, the index of the current value, and the array itself. The reduce() method returns a single value that is the result of applying the provided function to all elements in the array.

// let newArr = arr.reduce( function( accumulator, currentValue, index, array){     
//    return accumulator + currentValue; // 150
// }, 0) // 0 is the initial value of the accumulator
// console.log(newArr); // 150  

// slice() method is used to return a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// let newArr = arr.slice(1, 4); // [20, 30, 40]
// console.log(newArr); // [20, 30, 40]  
// console.log(arr); // [10, 20, 30, 40, 50]   slice() method does not modify the original array. It returns a new array with the modified values.      

// splice() method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. The splice() method takes three arguments: the index at which to start changing the array, the number of elements to remove, and the elements to add. The splice() method returns an array containing the removed elements, if any. The original array will be modified.

// let newArr = arr.splice(1, 2, 100, 200); // [20, 30]
// console.log(newArr); // [20, 30]  
// console.log(arr); // [10, 100, 200, 40, 50]   splice() method modifies the original array. It returns an array with the removed elements.    

// deleting elements with splice() method
// let newArr = arr.splice(1, 2); // [20, 30]
// console.log(newArr); // [20, 30]  
// console.log(arr); // [10, 40, 50]   splice() method modifies the original array. It returns an array with the removed elements.  

// adding elements with splice() method
// let newArr = arr.splice(1, 0, 100, 200); // []
// console.log(newArr); // []  
// console.log(arr); // [10, 100, 200, 20, 30, 40, 50]   splice() method modifies the original array. It returns an array with the removed elements.    

// reverse() method is used to reverse the order of the elements in an array. The reverse() method modifies the original array and returns a reference to the same array.

// let newArr = arr.reverse(); // [50, 40, 30, 20, 10]
// console.log(newArr); // [50, 40, 30, 20, 10]  
// console.log(arr); // [50, 40, 30, 20, 10]   reverse() method modifies the original array. It returns a reference to the same array.  

// sort() method is used to sort the elements of an array in place and returns the sorted array. The sort() method modifies the original array and returns a reference to the same array. By default, the sort() method sorts the elements as strings in ascending order. To sort the elements in a different order, we can pass a compare function as an argument to the sort() method.

// let newArr = arr.sort(); // [10, 20, 30, 40, 50]
// console.log(newArr); // [10, 20, 30, 40, 50]  
// console.log(arr); // [10, 20, 30, 40, 50]   sort() method modifies the original array. It returns a reference to the same array. 

// let newArr = arr.sort( function(a, b){ // [50, 40, 30, 20, 10]
//     return b - a; // descending order
// })  
// console.log(newArr); // [50, 40, 30, 20, 10]  
// console.log(arr); // [50, 40, 30, 20, 10]   sort() method modifies the original array. It returns a reference to the same array. 

// sorting strings in ascending order
// let strArr = ["banana", "apple", "cherry", "date"];
// let newArr = strArr.sort(); // ["apple", "banana", "cherry", "date"]
// console.log(newArr); // ["apple", "banana", "cherry", "date"]  
// console.log(strArr); // ["apple", "banana", "cherry", "date"]   sort() method modifies the original array. It returns a reference to the same array.     

// sorting strings in descending order
// let strArr = ["banana", "apple", "cherry", "date"];
// let newArr = strArr.sort( function(a, b){ // ["date", "cherry", "banana", "apple"]   
//     return b.localeCompare(a); // descending order
// })  
// console.log(newArr); // ["date", "cherry", "banana", "apple"]  
// console.log(strArr); // ["date", "cherry", "banana", "apple"]   sort() method modifies the original array. It returns a reference to the same array. 

// push() method is used to add one or more elements to the end of an array and returns the new length of the array. The push() method modifies the original array and returns the new length of the array.

// let newLength = arr.push(60, 70); // 7
// console.log(newLength); // 7  
// console.log(arr); // [10, 20, 30, 40, 50, 60, 70]   push() method modifies the original array. It returns the new length of the array.   

// pop() method is used to remove the last element from an array and returns that element. The pop() method modifies the original array and returns the removed element.

// let removedElement = arr.pop(); // 50
// console.log(removedElement); // 50  
// console.log(arr); // [10, 20, 30, 40]   pop() method modifies the original array. It returns the removed element.    

// shift() method is used to remove the first element from an array and returns that element. The shift() method modifies the original array and returns the removed element.

// let removedElement = arr.shift(); // 10
// console.log(removedElement); // 10  
// console.log(arr); // [20, 30, 40, 50]   shift() method modifies the original array. It returns the removed element.  

// unshift() method is used to add one or more elements to the beginning of an array and returns the new length of the array. The unshift() method modifies the original array and returns the new length of the array.

// let newLength = arr.unshift(0, 5); // 7
// console.log(newLength); // 7  
// console.log(arr); // [0, 5, 10, 20, 30, 40, 50]   unshift() method modifies the original array. It returns the new length of the array.  

// concat() method is used to merge two or more arrays. The concat() method does not modify the original arrays. It returns a new array that is the result of merging the original arrays.

// let arr1 = [1, 2, 3];    
// let arr2 = [4, 5, 6];
// let newArr = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
// console.log(newArr); // [1, 2, 3, 4, 5, 6]  
// console.log(arr1); // [1, 2, 3]   concat() method does not modify the original arrays. It returns a new array that is the result of merging the original arrays.    
// console.log(arr2); // [4, 5, 6]   concat() method does not modify the original arrays. It returns a new array that is the result of merging the original arrays.     

// Refrences in objects and arrays are stored in heap memory, and when we assign an object or an array to a variable, we are assigning a reference to that object or array in memory. When we modify the object or array through one variable, it will affect all other variables that reference the same object or array in memory.

// let arr1 = [1, 2, 3];
// let arr2 = arr1; // reference to the value is created in memory
// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]
// arr1.push(4);
// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]   arr1 and arr2 reference the same array in memory, so modifying the array through arr1 also modifies the array that arr2 references.     

// let x = 10

// function changevalue(value)
// {
//     value = 20; // this will not change the value of x because value is a copy of x in memory, and it is passed by value.

// }
// changevalue(x);
// console.log(x); // 10   x is a primitive data type, and it is passed by value, so modifying the value inside the function does not affect the original value of x.

// let arr1 = [1, 2, 3];   
// function changevalue2(value)
// {
//     value.push(4); // this will change the value of arr1 because value is a reference to arr1 in memory, and it is passed by reference.     

// }
// changevalue2(arr1);
// console.log(arr1); // [1, 2, 3, 4]   arr1 is a non-primitive data type, and it is passed by reference, so modifying the value inside the function affects the original value of arr1.

// shallow copy : a copy of an object or an array that shares the same reference to the original object or array in memory. A shallow copy can be created using the Object.assign() method for objects and the slice() method for arrays. A shallow copy only copies the first level of properties or elements, and any nested objects or arrays will still reference the same memory location as the original object or array.

// let obj1 = { a: 1, b: 2, c: { d: 3 } };
// let obj2 = Object.assign({}, obj1); // shallow copy of obj1
// obj2.a = 10; // this will not change the value of obj1.a because obj2 is a shallow copy of obj1, and it has its own reference to the value of a in memory.    
// console.log(obj1.a); // 1
// console.log(obj2.a); // 10   
// obj2.c.d = 20; // this will change the value of obj1.c.d because obj2 is a shallow copy of obj1, and it shares the same reference to the value of c in memory.
// console.log(obj1.c.d); // 20
// console.log(obj2.c.d); // 20 

// using spread operator to create a shallow copy of an object
// let obj1 = { a: 1, b: 2, c: { d: 3 } };
// let obj2 = { ...obj1 }; // shallow copy of obj1  

// old way to create a shallow copy of an object stringify and parse
// let obj1 = { a: 1, b: 2, c: { d: 3 } };
// let obj2 = JSON.parse(JSON.stringify(obj1)); // shallow copy of obj1 
// drawback of this method is that it does not copy functions, undefined, and symbols, and it does not handle circular references. It also has performance issues for large objects.


// ideal way to create a deep copy is to use structuredClone() method, which creates a deep copy of an object or an array, including all nested objects and arrays. The structuredClone() method is available in modern browsers and Node.js versions 17 and above. It can handle circular references, functions, undefined, and symbols, and it has better performance than the JSON.stringify() and JSON.parse() method for large objects.

// let obj1 = { a: 1, b: 2, c: { d: 3 } };  
// let obj2 = structuredClone(obj1); // deep copy of obj1
// obj2.c.d = 20; // this will not change the value of obj1.c.d because obj2 is a deep copy of obj1, and it has its own reference to the value of c in memory.
// console.log(obj1.c.d); // 3
// console.log(obj2.c.d); // 20 

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// JS always run in two phases : creation phase and execution phase. In the creation phase, the JS engine scans the code and creates a global execution context, which includes the global object (window in browsers), the this keyword, and the variable object (which stores all variables and functions). In the execution phase, the JS engine executes the code line by line, and it creates a new execution context for each function that is called. Each execution context has its own variable object, this keyword, and scope chain.

// execution context : an abstract concept that holds information about the environment in which the current code is being executed. It contains information about the variables, functions, and objects that are accessible in the current scope. Each time a function is called, a new execution context is created and added to the call stack. When the function returns, its execution context is removed from the call stack.

// context will have code area and memory area, code area will have the code to be executed and memory area will have the variables and functions to be stored in memory.

// call stack : a data structure that keeps track of the execution contexts in the order they were created. The call stack follows the Last In First Out (LIFO) principle, meaning that the last execution context added to the stack is the first one to be removed when it finishes executing. When a function is called, a new execution context is created and pushed onto the call stack. When the function returns, its execution context is popped off the call stack, and control returns to the previous execution context.

// scope chain : a list of all the variables and functions that are accessible in the current execution context. Each execution context has its own scope chain, which is created when the execution context is created. The scope chain is used to resolve variable and function references in the current execution context. When a variable or function is referenced, the JS engine looks for it in the current execution context's variable object. If it is not found, the engine looks for it in the parent execution context's variable object, and so on, until it reaches the global execution context. If the variable or function is not found in any of the execution contexts, a ReferenceError is thrown.


// hoisting : a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the creation phase of the execution context. This means that variables and functions can be referenced before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example, if a variable is declared but not initialized, it will be hoisted to the top of its scope and will have a value of undefined until it is assigned a value later in the code. Functions, on the other hand, are hoisted with their entire definition, so they can be called before they are defined in the code.

// example of hoisting with variables
// console.log(x); // undefined
// var x = 5; // variable declaration is hoisted to the top of its scope, but the initialization is not hoisted. Therefore, x is undefined until it is assigned a value later in the code.  

// example of hoisting with functions
// greet(); // "Hello, world!"
// function greet() { // function declaration is hoisted to the top of its scope, so it can be called before it is defined in the code.  
//     console.log("Hello, world!");
// }

//example with let and const
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10; // variable declaration is hoisted to the top of its scope, but the initialization is not hoisted. Therefore, y is in a temporal dead zone until it is assigned a value later in the code.   

//Temporal Dead Zone (TDZ) : a behavior in JavaScript where variables declared with let and const are not accessible before they are declared in the code. This means that if we try to access a variable declared with let or const before it is declared, we will get a ReferenceError. The TDZ is created during the creation phase of the execution context, and it lasts until the variable is declared in the code. This behavior helps to prevent bugs caused by accessing variables before they are initialized.

