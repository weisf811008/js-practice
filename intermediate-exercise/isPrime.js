//Write a function called "isPrime" that takes an integer as input, and returns a boolean value that indicates if the input number is prime.

function isPrime(num) {
  if (num == 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); // returns false
console.log(isPrime(5)); // returns true
console.log(isPrime(91)); // returns false
console.log(isPrime(1000000)); // returns false
