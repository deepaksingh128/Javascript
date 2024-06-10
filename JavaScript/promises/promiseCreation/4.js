function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function createPromiseWithTimeout3(){
    return new Promise(function executer(resolve, reject){

        console.log("entering into promise callback code");

        setTimeout(function(){
            let num = getRandomInt(6);
            if(num % 2 == 0){
                console.log("fullfilling");
                // we can call resolve or reject with multiple arguments
                // but first argument is taken as value i.e. result property of promise
                resolve(num, 25,10);
                console.log("completed resolving");
                // we can call resolve functions many times , but
                // value will be from first call
                resolve(10);
                return num;
            }else{
                console.log("rejecting");
                reject(num);
                console.log("rejecting completed");
                return num;
            }
        },10000);

        console.log("exiting from promise callback code");
    });
}

// Consumption :-
// console.log("start");
// x = createPromiseWithTimeout3();
// console.log(x);
// console.log("end");
