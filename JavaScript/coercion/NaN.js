console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xa"));

let x = NaN;

console.log(isNaN(x));

console.log(x == NaN);

console.log("\n");
console.log(isNaN("Deepak"));  // isNaN converts the incoming input to a number


console.log(Number.isNaN("Deepak"));
console.log(Number.isNaN(x));

console.log(x !== x);