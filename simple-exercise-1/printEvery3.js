// Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.

function printEvery3_1(n) {
  for (let i = 1; i <= n; i += 3) {
    console.log(i);
  }
}

printEvery3_1(88);

function printEvery3_2(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i += 3;
  }
}

printEvery3_2(88);
