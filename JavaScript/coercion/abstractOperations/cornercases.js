// ToString

console.log("" + 0);         // 0 -> "0"
console.log("" + (-0));      // -0 -> "0"

console.log("" + []);         // [] -> ""
console.log("" + [null, undefined]);
console.log("" + [1,2,3]);
console.log("" + [1,2,null, 4]);

console.log("" + {});

// ToNumber

console.log(0 - "010");           // converted to decimal
console.log(0 - "O10");
console.log(0 - 010);         // converted to octal number
console.log(0 - "0xb");     // hexadecimal number
console.log(0 - 0xb);

console.log([] - 1);
console.log([""] - 1);
console.log(typeof(["1"] + 2));   // 12 : string
console.log(["0"] - 1);
console.log([6] -1);