// 1. Write a function called "confirmEnding" that takes 2 strings as input, and returns a boolean value that indicates if the first input ends with the second input.

function confirmEnding(str1, str2) {
  let i = str1.length - 1;
  for (let j = str2.length - 1; j >= 0; j--) {
    if (str1[i] == str2[j]) {
      return true;
    } else {
      i--;
    }
  }
  return false;
}

console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Connor", "n")); // false
console.log(confirmEnding("Open sesame", "same")); // true)
