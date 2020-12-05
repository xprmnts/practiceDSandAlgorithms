/*

Given an array nums, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

Example:

Input: 
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

const moveZeroes = function (arr) {
    let anchor = 0;

    for (let explorer = 0; explorer < arr.length; explorer++) {
        if (arr[explorer] !== 0) {
            let placeholder = arr[explorer];
            arr[explorer] = arr[anchor];
            arr[anchor] = placeholder;
            anchor++;
        }
    }
}

const arr = [4,2,4,0,0,3,0,5,1,0];
moveZeroes(arr);