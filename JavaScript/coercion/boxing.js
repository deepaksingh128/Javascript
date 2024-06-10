// console.log(1.toString()); // uncaught syntaxerror
console.log((1).toString());    // manual boxing
console.log(Number(1).toString());

let x = 1;
console.log(x.toString());  // autoboxing happens , since x is a variable