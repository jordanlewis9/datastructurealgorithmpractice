// const averagePair = (arr, avg) => {
//     if (arr.length < 2) return false;
//     let left = 0;
//     let right = arr.length - 1;
//     let average;
//     let match = false;
//     while ((left < right)) {
//         // console.log(`[${arr[left]}, ${arr[right]}]`)
//         average = (arr[left] + arr[right]) / 2;
//         if (average === avg) {
//             match = true;
//             break;
//         } else if (average < avg) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return match;
// }

// console.log(averagePair([-4, -2, 0, 1, 2, 6, 8, 9], 3));

const isSubsequence = (str1, str2) => {
    if (str1.length === 0 || str2.length === 0) return false;
    let str1pointer = 0;
    let str2pointer = 0;
    let isSame = false;
    while (str1pointer < str1.length && str2pointer < str2.length) {
        // console.log(str2pointer);
        if (str1[str1pointer] === str2[str2pointer] && str1pointer === str1.length - 1) {
            isSame = true;
            break;
        } else if (str1[str1pointer] === str2[str2pointer]) {
            str1pointer++;
            str2pointer++;
        } else {
            str2pointer++;
        }
    }
    return isSame;
}

console.log(isSubsequence('abc', 'acb'));