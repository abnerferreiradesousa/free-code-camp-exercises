// Retorna uma array de 1 até n.

// const arr = [];

// function countdown(n) {
//   if (n > 0) {
//     arr.push(n);
//     countdown(n - 1); 
//   }
//   return arr;
// }

// Retorna uma array de n até 1.

// Only change code below this line
// const arr = [];
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } 
//     arr.push(n);
//     countdown(n - 1);
//     return arr;
// }

// Use Recursion to Create a Range of Numbers

const arr = [];

function rangeOfNumbers(startNum, endNum) {
  arr.push(startNum);
  if (arr[arr.length - 1] === endNum) {
    return arr;
  }
  rangeOfNumbers(startNum + 1, endNum);
  return arr;
}

console.log(rangeOfNumbers(1, 3));