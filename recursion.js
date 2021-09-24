// const countToZero = (num) => {
//     if (num > 0) {
//         console.log(num);
//         return countToZero(num-1);
//     } else {
//         return console.log("Got to zero");
//     }
// }

// countToZero(6);

// const factorial = (num) => {
//     if (num === 1) return 1;
//     return num * factorial(num - 1);
// }

// const nums = factorial(5);

// console.log(nums);

// function power(base, exp) {
//     if (exp === 0) return 1;
//     return base * power(base, exp - 1);
// }

// console.log(power(2,4));
// console.log(power(5,3));
// console.log(power(100,0));

// const factorial = (num) => {
//     if (num <= 1) return 1;
//     return num * factorial(num - 1);
// }

// console.log(factorial(5));
// console.log(factorial(7));
// console.log(factorial(1));
// console.log(factorial(0));

// function productOfArray(arr) {
//     if (arr.length === 1) return arr[0];
//     return arr[0] * productOfArray(arr.slice(1));
// }

// console.log(productOfArray([1,2,3,10]));
// console.log(productOfArray([3]));

// function recursiveRange(num) {
//     if (num === 0) return 0;
//     return num + recursiveRange(num - 1);
// }

// console.log(recursiveRange(6));
// console.log(recursiveRange(22));
// console.log(recursiveRange(1));

// function fib(num) {
//     let fibArray = [];
//     function fibSequence(numsLeft) {
//         if (numsLeft === 0) return fibArray[num - 1];
//         if (fibArray[0] !== 1 || fibArray[1] !== 1) {
//             fibArray.push(1);
//         } else {
//             fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
//         }
//         return fibSequence(numsLeft - 1);
//     }
//     return fibSequence(num);
// }

// console.log(fib(4));
// console.log(fib(10));