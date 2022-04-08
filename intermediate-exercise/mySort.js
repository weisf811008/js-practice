//Write a function called "mySort" that takes an array of integers as input, and returns the sorted version of the input array.

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

function mySort(arr) {
  let result = [];
  while (arr.length > 0) {
    let min = findMin(arr);
    result.push(min);
    arr.splice(arr.indexOf(min), 1);
  }
  return result;
}

console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17]
