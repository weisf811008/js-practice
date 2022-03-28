//1. Write a function called "stars" which prints out layers of stars in the following pattern:

function stars(num) {
  let result = "";
  for (let i = 0; i <= num; i++) {
    console.log((result += "*"));
  }
}

console.log(stars(1));
// *
console.log(stars(4));
// *
// **
// ***
// ****
