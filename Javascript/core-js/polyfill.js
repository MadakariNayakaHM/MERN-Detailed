//reduce method

// Array.reduce((accumulator, currentValue) =>{} , initialValue)

// sum of numbers

// const nums = [10,20,30];

// const total = nums.reduce((accumulator, currentValue) => {
//     accumulator += currentValue;

//     return accumulator;
// }, 0)

// console.log(total); // 60

// Count occurrences

// const fruits = ['apple', 'banana', 'apple', 'orange','banana'];
// const fruitCount = fruits.reduce((acc, val)=>{
//     acc[val] = (acc[val]||0)+1
//     return acc;
// }, {})
// console.log(fruitCount)

// Group by

// const users = [
//     {name:'John', city:'Delhi'},
//     {name:'Mike', city:'Mumbai'},
//     {name:'Pete', city:'Delhi'},
// ]

// const grouped = users.reduce((acc, val)=>{
//     if(!acc[val.city])
//     {
//         acc[val.city] = []
//         acc[val.city].push(val)
//     }
//     else
//     acc[val.city].push(val)

//     return acc
// }, {})

// console.log(grouped);

// find maximum

// const nums = [5 , 20, 8, 100, 30]

// let max = nums.reduce((acc, val)=>{
//   return  acc = acc>val?acc:val
// },0)

// console.log(max);

// flatten array

// const arr = [[1,2], [3,4], [5,6]];

// let flatten = arr.reduce((acc, val)=>{
//     {
//         for (let ele in val)
//         {
//             acc.push(val[ele])
//         }

//         return acc;
//     }
// }, [])

// console.log(flatten)

// implement map usig reduce

// let arr = [1, 2, 3,4]

// let mapped = arr.reduce((acc, val)=>{
//     acc.push(val*2);
//     return acc;
// }, [])

// console.log(mapped)
// console.log(arr);

// Implement Filter using reduce

// arr = [1,2,3,4,5]

// let even = arr.reduce((acc, val)=>{
//     if(val%2 ==0)
//     {
//         acc.push(val);
//     }

//     return acc;
// }, [])

// console.log(even)

// polifill for reduce

// reduce recieves 2 arguments
// decides the intial accumulator
// loop through the Array
// call the callback on every iteration
// stores the returned value back into the accumulator
// returns the final accumulator

// edge case 1 empty array + intial value

// [].reduce((a,b) => a + b, 100)

// loop will never run so just return acc


// edge case 1 empty array + no intial value
// [].reduce((a,b) => a + b)

// typeerror


// pseudo code

// acc = initiaValue

// for each in remaining item:
//     acc = callback(acc, currentItem)

// return acc

Array.prototype.myReduce = function (cb,initialValue)
{
    let arr = this;
    let accumulator;
    let startIndex;

    if(initialValue !== undefined)
    {
        accumulator = initialValue;
        startIndex = 0;
    }
    else
    {
        accumulator = arr[0];
        startIndex = 1;
    }

    for(let i = startIndex; i < arr.length; i++)
    {
        accumulator = cb(accumulator, arr[i], i, arr);
    }

    return accumulator;
};

const result = [1,2,3].myReduce((acc, val)=>{
    return acc + val;
},0)

console.log(result) // 6




