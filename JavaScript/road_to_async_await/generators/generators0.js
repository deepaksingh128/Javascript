function* fetchNextElement(){
    console.log("I am inside the generator function");
    yield 1;
    yield 2;
    return 10; // it will act as a final yield
    console.log(" Something in the middle");
    yield 3;
    yield 4;
}

const iter = fetchNextElement(); // it will return a special type iterator
console.log("1st: ", iter.next());
console.log("2nd: ", iter.next());
console.log("3rd: ", iter.next());
console.log("4th: ", iter.next());
console.log("5th: ", iter.next());