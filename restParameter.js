// Modify the function sum using the rest parameter in such a way that the
// function sum is able to take any number of arguments and return their sum.

const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(2, 3, 5));

// PARÂMETRO REST PEGA TODOS OS ARGUMENT0S 
// PASSADOS NA FUNÇÃO E COLOCA DENTRO DE UMA ARRAY
// ASSIM PODEMOS APLICAR UM MAP, FILTER OU QUALQUER HOF!

// const restParameter = (...args) => args * 2;

// console.log(restParameter(1, 2, 3));

// function howMany(...args) {
//   console.log(args);
//   return `You have passed ${args.length} arguments.`;
// }
// console.log(howMany(0));
// console.log(howMany('string', null, [1, 2, 3], { }));
