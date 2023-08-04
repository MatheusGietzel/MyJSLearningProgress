function sum(param,...numbers) {
return numbers.reduce((accum , num) => accum + num, 0);
}

console.log(sum(1 ,1));
console.log(sum(2 ,2, 2, 2, 2, 2, 2));
console.log(sum(32 ,39, 90, 10, 20, 20 ,20 ,20));