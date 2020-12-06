
const longestOnes = function(arr) {
    let k = 1;
    let i = 0;
    let j = 0;

    while (i < arr.length) {
        if (arr[i] === 0) k--;

        if (k < 0) {
            if(arr[j] === 0) k++;
            j++;
        }
        i++;
    }

    return i-j;
}

const test = [1,0,1,1,0];
console.log(longestOnes(test));
// 0 0 1 0 1 0
// start then set prev =
// check next
// if 1 extend window, if 0 check next if 1 flip
// continue
// if 0 and flipped, terminate window
