
const removeDuplicates = function(nums) {
    
    let p1 = 0;

    for (let p2 = 1; p2 < nums.length; p2++) {
        if (nums[p2] !== nums[p1]) {
            p1++;
            nums[p1] = nums[p2];
        }

    }
    return nums;

}


let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(arr));