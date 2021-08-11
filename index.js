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

// const isSubsequence = (str1, str2) => {
//     if (str1.length === 0 || str2.length === 0) return false;
//     let str1pointer = 0;
//     let str2pointer = 0;
//     let isSame = false;
//     while (str1pointer < str1.length && str2pointer < str2.length) {
//         // console.log(str2pointer);
//         if (str1[str1pointer] === str2[str2pointer] && str1pointer === str1.length - 1) {
//             isSame = true;
//             break;
//         } else if (str1[str1pointer] === str2[str2pointer]) {
//             str1pointer++;
//             str2pointer++;
//         } else {
//             str2pointer++;
//         }
//     }
//     return isSame;
// }

// console.log(isSubsequence('abc', 'acb'));

// const maxSubArraySum = (arr, inARow) => {
//     if (arr.length < inARow) return null;
//     let leftWindow = 0;
//     let rightWindow = 0 + (inARow - 1);
//     let max;
//     while (rightWindow < arr.length) {
//         let tempMax = arr.slice(leftWindow, rightWindow + 1).reduce((acc, cur) => {
//             return acc + cur;
//         }, 0);
//         if (leftWindow === 0 || tempMax > max) {
//             max = tempMax;
//         }
//         leftWindow++;
//         rightWindow++;
//     }
//     return max;
// }

// console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 10));

// function maxSubarraySum(arr, num){
//     if (arr.length < num) return null;
 
//     let total = 0;
//     for (let i=0; i<num; i++){
//        total += arr[i];
//     }
//     let currentTotal = total;
//     for (let i = num; i < arr.length; i++) {
//        currentTotal += arr[i] - arr[i-num];
//        total = Math.max(total, currentTotal);
//     }
//     return total;
// }

// with currentTotal, we are adding the new number, and subtracting the array index that we are not on anymore

// console.log(maxSubarraySum([100, 200, 300, 400], 2));

const minSubArrayLen = (arr, total) => {
    if (arr.length === 1 && arr[0] >= total) {
        return 1;
    } else if (arr.length === 1 && arr[0] < total) {
        return 0;
    } else if (arr[0] >= total) {
        return 1;
    }
    let leftSide = 0;
    let rightSide = 1;
    let subarrayLength = 0;
    while (rightSide < arr.length) {
        let arrTotal = 0;
        for (let i = leftSide; i <= rightSide; i++) {
            arrTotal += arr[i];
        }
        if (arrTotal >= total) {
            let totalLength = rightSide - leftSide + 1;
            if (totalLength === 1) {
                subarrayLength = totalLength;
                break;
            } else if (subarrayLength === 0 || totalLength < subarrayLength) {
                subarrayLength = totalLength;
            }
            leftSide++;
        } else {
            rightSide++;
        }
    }
    return subarrayLength;
}

console.log(minSubArrayLen([1, 2, 4, 6, 5], 4));