/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < A[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

*/

const validMountainArray = function(arr) {

    if (arr[0] > arr[1]) {
        return false;
    }

    let peaked = false;
    
    let i = 1;
 
    while (!peaked && i < arr.length) {

        if (arr[i] === arr[i - 1]) {
            return false;
        }

        if (arr[i] < arr[i - 1]) {
            peaked = true;   
        }
        i++;
    }


    while (i < arr.length) {
        if (arr[i] < arr[i - 1]) {
            i++;
        } else {
            console.log(i)
            return false;
        }
    }

    return peaked ? true : false;
}

arr = [0,1,2,4,2,1];

validMountainArray(arr);