//1. Write a function called "makeStars" which prints out stars in the following pattern:
//(If you are using code runner, node.js or web developer's tool, the result of makeStars function will look exactly the same as exercise 1 stars. This is 100% okay. The reason why I am putting this exercise right here is because, many programming languages that deal with files would require you to write codes like this.)

function makeStars(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += "*";
  }
  return result;
}

console.log(makeStars(1));
// *
console.log(makeStars(2));
// *\n**
console.log(makeStars(5));
// *\n**\n***\n****\n*****
