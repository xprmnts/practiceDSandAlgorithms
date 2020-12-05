/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < A[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

*/

const validMountainArray = function(arr) {

    let l = arr.length;
    i = 0;

    while (i + 1 < l && arr[i] < arr[i+1]) i++;

    if (i === 0 || i === l) return false;

    while (i + 1 < l && arr[i] > arr[i+1]) i++;

    return i === l-1;

}

arr = [0,1,2,4,2,1];

console.log(validMountainArray(arr));