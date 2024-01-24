const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
console.log(arr);
printArray(arr);
bubbleSort(arr);
printArray(arr);
let index = binarySearch(arr, 5);
console.log(`index = ${index}`);
index = binarySearch(arr, 7);
console.log(`index = ${index}`);
index = binarySearch(arr, 0);
console.log(`index = ${index}`);
index = binarySearch(arr, 55);
console.log(`index = ${index}`);
index = binarySearch(arr, 2);
console.log(`index = ${index}`);



function printArray(arr) {
    console.log('====================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('====================');
}

// O(n^2) 
function bubbleSort(arr) {
    //TODO Homework
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
// O(logN) 
function binarySearch(arr, value) {
    //TODO Homework
    let left = -1;
    let right = arr.length;
    while (right - left > 1) {
        const middle = Math.floor((left + right) / 2)

        if (value === arr[middle]) {
            return middle
        }
        if (value < arr[middle]) {
            right = middle;
        } else {
            left = middle;
        }
    }
    return false;
}

function sort(arr, comparator) {
    //TODO Homework advanced
}