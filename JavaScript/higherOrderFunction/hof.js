function higherOrderFunction(x, fn){
    console.log(x);
    console.log(fn);
    fn();
}

f(20, function expr(){
    console.log("I am an expression passed to HOF");
});