fs = require('fs');
const data = fs.readFileSync('data3.txt', 'utf8');

// Solution 1 
// const lines = data.split("\n");
// //Get the numbers in an array 
// let min = Number.MAX_VALUE; 
// let max = Number.MIN_VALUE;

// for (const line of lines) {
//     const number = parseInt(line);
//     // console.log(number)
//     if(min > number) {
//         min = number;
//     }
//     if(max < number) {
//         max = number;
//     }
// }


// //max - min 
// console.log("Max = " + max);
// console.log("Min = " + min);
// console.log('The range is ' + (max - min));

//Solution 2
const numbers = data.split("\n")
                .filter(element => element != '')
                .map(element => parseInt(element))

const max = Math.max(...numbers) //max(int, int, int...)
const min = Math.min(...numbers)  

console.log("Difference = " + (max - min))