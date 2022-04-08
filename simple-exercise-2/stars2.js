//Write a function called "stars2" which prints out layers of stars in the following pattern:

function stars2(num) {
  for (let i = 1; i <= num; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
  for (let i = num - 1; i > 0; i--) {
    let stars1 = "";
    for (let j = 0; j < i; j++) {
      stars1 += "*";
    }
    console.log(stars1);
  }
}

console.log(stars2(1));
//*
console.log(stars2(2));
// *
// **
// *
console.log(stars2(3));
// *
// **
// ***
// **
// *
console.log(stars2(4));
// *
// **
// ***
// ****
// ***
// **
// *
