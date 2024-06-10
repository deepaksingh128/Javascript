function blocking_for_loop(){
    for(let i=0; i<10000000000; i++){
        // do something
    }
}

console.log("Start of the file");
setTimeout(function timer1(){
    console.log("Timer 1 done");
}, 100000);

blocking_for_loop();
let x = Promise.resolve("Deepak promise");
x.then(function processPromise(value){
    console.log("whose promise ?", value);
    blocking_for_loop();
});

let y = Promise.resolve("Deepak promise2");
y.then(function processPromise(value){
    console.log("Whose promise ?", value);
    setTimeout(function () {console.log("ok done")});
});

let z = Promise.resolve("Deepak promise3");
z.then(function processPromise(value){
    console.log("whose promise ?", value);
});


setTimeout(function timer2(){
    console.log("Timer 2 done");
}, 100);

console.log("End of the file");

