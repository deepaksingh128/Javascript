// ToNumber(argument) , abstart operation is used internally to do substraction
console.log(2 - 9);                // 2 - 9 = 7
console.log(2 - null);             // 2 - 0 = 2
console.log(2 - undefined);        // 2 - NaN = NaN

// console.log(ToNumber(null)); // we cannot use abstract operations directly

console.log(1 - "453");
console.log(1 - "453abc");

console.log(1 - "0xa");