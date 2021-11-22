const numbers = [3, 4, 5, 6, 7, 8];
// const output  = [];

// for(let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = Math.pow(element, 2);
//     output.push(result);
// }

// function square (element) {
//     return Math.pow(element, 2);

// }
// const square = element => element * element;
// const square = x => x*x;
// // numbers.map(function(element, index, array) {
// //     console.log(element, index, array);

// // });
// const result = numbers.map(function(element) {
//     return element * element;

// });
// const result = numbers.map(x => x*x);

// console.log(result);

const bigger = numbers.filter(x => x < 3);

const isThere = numbers.find(x => x >5);

console.log(isThere);