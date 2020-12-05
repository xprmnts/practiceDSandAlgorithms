// Given a binary array, find the maximum number of consecutive 1s in this array.

/*
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
*/

arr = [1, 1, 0, 1, 1, 1];

const findMaxConsecutiveOnes = function (nums) {
    return (Math.max(...nums.join('').split('0').map(x => x.length)));
}

// const findMaxConsecutiveOnes = function (nums) {

//     let temp = 0;
//     let leader = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             leader = temp > leader ? temp : leader;
//             temp = 0;
//         } else {
//             temp++
//         }
//     }

//     return (leader > temp ? leader : temp);


// }

console.log(findMaxConsecutiveOnes(arr));