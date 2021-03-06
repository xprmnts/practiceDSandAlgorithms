// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

/*
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

const sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    let sorted = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[left]**2 > nums[right]**2 && left <= right) {
            sorted.unshift(nums[left]**2);
            left++;
        } else {
            sorted.unshift(nums[right]**2);
            right--;
        }
    }
    
    return sorted;
}


// const sortedSquares = function(nums) {
//     // simple sol: return nums.map(x => x * x).sort((a,b) => a - b);   

//     let l = nums.length;
//     let rp = 0;

//     while (rp < l && nums[rp] < 0) {
//         rp++;
//     }
//     let lp = rp - 1;
//     const sorted = [];

//     while (lp >= 0 && rp < l ) {
//         if (nums[lp] ** 2 < nums[rp] ** 2) {
//             sorted.push(nums[lp] ** 2)
//             lp--;
//         } else {
//             sorted.push(nums[rp] ** 2)
//             rp++;
//         }
//     }

//     while (lp >= 0) {
//         sorted.push(nums[lp] ** 2)
//         lp--;
//     }

//     while (rp < l) {
//         sorted.push(nums[rp] ** 2);
//         rp++;
//     }

//     return sorted;

// }

let arr = [-7,-3,2,3,11]

console.log(sortedSquares(arr));
