function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function createPromiseWithTimeout(){
    return new Promise(function executer(resolve, reject){

        setTimeout(function(){
        console.log("In the timer");
        let num = getRandomInt(10);
        if(num % 2 == 0){
            resolve(num);
        }else{
            reject(num);
        }
        }, 10000);
    });
}

// Consumption :-  
// console.log("starts");
// x = createPromiseWithTimeout(); // consumption
// console.log(x);
// console.log("end");