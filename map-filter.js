// const numbers = [3, 4, 5, 6, 7, 8];
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
// numbers.map(function(element, index, array) {
//     console.log(element, index, array);

// });
// const result = numbers.map(function(element) {
//     return element * element;

// });
// const result = numbers.map(x => x*x);

// console.log(result);

// const bigger = numbers.filter(x => x < 3);

// const isThere = numbers.find(x => x >5);

// console.log(isThere);

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % 2 == 0) {
            return false;
        }
    }
    return num > 1;
}

const result = array.filter(isPrime);
console.log(result);