//1. Write a function called "fib" that takes an integer $n$ as input, and returns the $n$th element of the Fibonacci Sequence.

//If you never hear about Fibonacci Sequence, read about it from:

function fib(num) {
  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    return fib(num - 1) + fib(num - 2);
  }
}

console.log(fib(0)); // returns 0
console.log(fib(1)); // returns 1
console.log(fib(2)); // returns 1
console.log(fib(3)); // returns 2
console.log(fib(8)); // returns 21
