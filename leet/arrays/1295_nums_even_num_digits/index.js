// Given an array nums of integers, return how many of them contain an even number of digits.
/*

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
 

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 10^5

*/

arr = [12,345,2,6,7896];



const findNumbers = function(nums) {
    let c = 0;

    for (num of nums) {
        if (digits(num) % 2 === 0) c++;
    }

    return c;

}

const digits = function(num) {
    let l = 0; 
    let t = 0;
    while (num !== 0) {
        t = num % 10;
        num = Math.trunc(num / 10);
        l++;
    }
    return l;
}

console.log(findNumbers(arr));
