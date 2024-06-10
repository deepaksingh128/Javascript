// generator function
function* fetchNextElement(){
    console.log("I am inside the generator function");
    yield 1;
    yield 2;
    console.log("somewhere in the middle");
    yield 3;
    // return 10;
    yield 4;
}

const iter = fetchNextElement();   // immediately returns a generator object
console.log(iter);    // Object [Generator] {}
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());