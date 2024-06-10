console.log(1 == "1");

console.log(false == "0");

console.log(false == 0);

console.log(NaN == NaN);

let obj = {x: 10, valueOf() {return 100}};

console.log(99 == obj);
console.log(100 == obj);