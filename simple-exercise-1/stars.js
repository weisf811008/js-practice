//Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".

function stars(n) {
  if (n == 0) {
    return "";
  }

  let result = "";
  for (let i = 1; i <= n; i++) {
    result += "*";
  }
  return result;
}

console.log(stars(5));
