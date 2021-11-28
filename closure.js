// function stopWatch() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     }
// }

// const clock1 = stopWatch();
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());

// const clock2 = stopWatch();
// console.log(clock2());
// console.log(clock2());
// console.log(clock1());
// console.log(clock2());

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

