// Main Problem with callbacks :- Inversion of control

function doTask(fn, x){
    // whole implementation done by team A
    fn(x);
    fn(x*x);

}

// team B tries to use it
doTask(function exec(num){
    console.log("Woah num is", num);
}, 9);