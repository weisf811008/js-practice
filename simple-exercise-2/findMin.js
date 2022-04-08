//Write a function called "findMin" which takes an array as input, and returns the minimum element in the input array.

function findMin(arr) {
  if (arr.lenght == 0) {
    return undefined;
  }

  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin([1, 2, 5, 6, 99, 4, 5])); // returns 1
console.log(findMin([])); // returns undefined
console.log(findMin([1, 6, 0, 33, 44, 88, -10])); // returns -10)
