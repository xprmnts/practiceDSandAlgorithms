const heightChecker = function (arr) {
    const sorted = [...arr].sort((a,b) => a-b);

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) {
            counter++;
        }
    }

    return counter;

}

const test = [1,1,4,2,1,3];
console.log(heightChecker(test));