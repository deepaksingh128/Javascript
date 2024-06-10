function timeConsumingByLoop(){
    console.log("loop starts");
    for(let i=0; i<10000000000; i++){
        // some task
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature0(){
    console.log("Starting timer 0");

    setTimeout(function exec0(){
        console.log("Completed the timer 0");
        for(let i=0; i<10000000000; i++){
            // some task
        }
    }, 5000);
}

function timeConsumingByRuntimeFeature1(){
    console.log("Starting timer 1");
    setTimeout(function exec1(){
        console.log("Completed the timer 1");
        // while(true);
    }, 0);
}

function timeConsumingByRuntimeFeature2(){
    console.log("Starting timer 2");
    setTimeout(function exec2(){
        console.log("Completed the timer 2");
    }, 200);
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();

console.log("By");