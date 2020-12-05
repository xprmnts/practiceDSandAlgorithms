const sortArrayByParity = function (arr) {
    let anchor = 0;

    

    for (let explorer = 0; explorer < arr.length; explorer++) {
        
        if (arr[explorer]  % 2 === 0) {
            let placeholder = arr[explorer];
            arr[explorer] = arr[anchor];
            arr[anchor] = placeholder;
            anchor++;
        }
    }

    return arr;
}

const arr = [4,2,4,0,0,3,0,5,1,0];
sortArrayByParity(arr);