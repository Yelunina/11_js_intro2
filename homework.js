const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
console.log(arr);
printArray(arr);
bubbleSort(arr);
printArray(arr);
let index = binarySearch(arr, 5);
console.log(`index = ${index}`);
index = binarySearch(arr, 7);
console.log(`index = ${index}`);



function printArray(arr) {
    console.log('====================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('====================');
}

function bubbleSort(arr) {
    //TODO Homework
}

function binarySearch(arr, value) {
    //TODO Homework
}

function sort(arr, comparator) {
    //TODO Homework advanced
}