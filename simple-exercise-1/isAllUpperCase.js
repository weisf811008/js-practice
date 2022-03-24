//Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.

function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  if (str == str.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false
