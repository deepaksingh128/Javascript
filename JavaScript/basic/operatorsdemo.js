// arithmetic operators
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x*y);
console.log(x/y);
console.log(x**y); // exponent

// assignment operators
let a = 10;
a += 10;
console.log("value of a after addition is", a);
a -= 3;
console.log("value of a after substraction is",a);
a *= 2;
console.log("value of a after multiplicaation is",a);
a /= 2;
console.log("value of a after division is",a);
a %= 3;
console.log("value of a after mod",a);
a **= 3;
console.log("value after exponenet", a);

// relational operators
console.log("x < y:" ,x < y);
console.log("x > y:",x > y);
console.log("x <= y:",x <= y);
console.log("x >= y:",x >= y);

// logical operators
console.log(true && false);
console.log(false || true);
console.log((5 < 10) && (6 < 3));
console.log(!(5 < 3));

// equality operators
console.log("equality operators");
console.log((1 == "1"));      // true
console.log(1 === "1");       // false
console.log(true == "1");
console.log(true == "2");
console.log(1 == "deepak");
console.log(0 == -0);

// typeof operator
console.log(typeof "1");
console.log(typeof 1);
console.log(typeof undefined);
console.log(typeof null); // object