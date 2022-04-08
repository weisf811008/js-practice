// Write a function called "reverse" that takes a string as input, and returns the reverse string.

function reverse(str) {
  let str1 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
  }
  return str1;
}

console.log(reverse("abcd")); // returns "dcba"
console.log(reverse("I am a good guy.")); // returns ".yug doog a am I"
