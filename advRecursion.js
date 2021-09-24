// function reverse(str) {
//     if (str.length === 0 ) {
//         return "";
//     }
//     const thisCharIndex = str.length - 1;
//     return str[thisCharIndex] + reverse(str.slice(0, thisCharIndex));
// }

// console.log(reverse("sarah"));

// function isPalindrome(str) {
//     if (str.length === 0 || str.length === 1) {
//         return true;
//     }
//     str = str.toLowerCase();
//     if (str[0] !== str[str.length - 1]) {
//         return false;
//     } else {
//         return isPalindrome(str.slice(1, str.length - 1));
//     }
// };

// console.log(isPalindrome("Racecar"));

// function someRecursive(arr, callback) {
//     if (arr.length === 0) {
//         return false;
//     }
//     if (callback(arr[0])) {
//         return true;
//     } else {
//         return someRecursive(arr.slice(1), callback);
//     }
// }

// console.log(someRecursive([2, 4, 4, 6], val => val % 2 !== 0));

// const arr = [1, 2, 3];
// const arr2 = [[1], 2, [[3]]];
// console.log(typeof arr[0], typeof arr2[0][0]);

function flatten(arr) {
    if (arr.length === 0) {
        return null;
    }
    let flatArray = [];
    arr.forEach(el => {
        if (typeof el === 'object') {
            flatArray = flatArray.concat(flatten(el));
        } else {
            flatArray.push(el);
        }
    })
    return flatArray;
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));