// Dry run of this with memory (must revise) :-
// microTask queue demo :-

function createPromise(){
    return new Promise(function exec(resolve, reject){
        console.log("Resolving the promise");
        resolve("Done");
    });
}

setTimeout(function process(){
    console.log("timer completed");
}, 0);

let p = createPromise();      // returns a fullfilled promise , even then fullfillment handers
                              // will not execute (these will only get registered), 
                              // because there is still global code left
p
.then(function fulfillHandler(value){
    console.log("we fulfilled the handler 1 with value:", value);
},
 function rejectionHandler(){});

p
.then(function fulfillHandler(value){
     console.log("we fulfilled the handler 2 with value:", value);
 },
function rejectionHandler(){});

p
.then(function fulfillHandler(value){
    console.log("we fulfilled the handler 3 with value:", value);
},
 function rejectionHandler(){});

for(let i=0; i<10000000000; i++){}

 console.log("ending...");