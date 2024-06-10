function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function createPromiseWithTimeout(){
    return new Promise(function executer(resolve, reject){
        console.log("Entering into the executer callback in the promise constructor");

        setTimeout(function exec(){
            console.log("Inside the timer in promise callback");
            let num = getRandomInt(10);
               
            if(num % 2 == 0){
                resolve(num);
            }else{
                reject(num);
            }
        },10000);

        console.log("Exitting from the executer callback in the promise constructor");
    });
}

console.log("Starting...");

const p = createPromiseWithTimeout();

console.log("We are now waiting for promise to complete");
console.log("Currently my promise is like:", p);

console.log("Going to register my 1st set of handlers");
p
.then(function fulfillHandler(value){
    console.log("Inside fulfill handler 1 with value:", value);
    console.log("Promise object after fulfillment is:", p);
    setTimeout(function t(){console.log("Ended 0s timer")}, 0);
    console.log("Exitting the fulfillment handler 1");
},
function rejectionHandler(value){
    console.log("Inside rejection handler 1 with value:", value);
    console.log("Promise object after rejection is:", p);
});


console.log("Going to register my 2nd set of handlers");
p
.then(function fulfillHandler(value){
    console.log("Inside fulfill handler 2 with value:", value);
    console.log("Promise object after fulfillment is:", p);
},
 function rejectionHandler(value){
    console.log("Inside rejection handler 2 with value:", value);
    console.log("Promise object after fulfillment is:", p);
 });

 console.log("Ending...");
 setTimeout(function t(){console.log("global timer of 0s")}, 1000); // if (10000):- run at last
                                       // value of timer defines the order of
                                       // execution of setTimeouts (NOTE).