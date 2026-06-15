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

