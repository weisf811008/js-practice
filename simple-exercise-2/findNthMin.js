//1. Write a function called "findNthMin", which takes an array of integers and another integer n, and returns the nth smallest number in the given array.

function findNthMin(arr, targ) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
    if (count == targ - 1) {
      return arr[i];
    }
  }
}

console.log(findNthMin([2, 1, 3, 4, 5], 1)); // returns 1
console.log(findNthMin([1, 3, 5, 7, 9], 3)); // returns 5
console.log(findNthMin([1, 5, 9, 3, 7], 2)); // returns 3
