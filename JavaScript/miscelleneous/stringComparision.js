let a = "abc";               // string literal
    console.log(typeof a);

let b = String("abc");       // string literal
    console.log(typeof b);

let c = new String("abc");   // string object
    console.log(typeof c);

console.log(a == b);                    // true
console.log(b == c);                    // true
console.log(a == c);                    // true

console.log(a === b);                    // true
console.log(b === c);                    // false
console.log(c === a);                    // false
console.log(a === new String("abc"));    // false