function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function createPromiseWithTimeout2(){
    return new Promise(function executer(resolve, reject){
        setTimeout(function (){
           let num = getRandomInt(5);
            if(num % 2 == 0){
                console.log("fullfilling");
                return num;
            }else{
                console.log("rejecting");
                return num;
            }
        }, 10000);
    });
}

// Consumption :-
// console.log("start");
// x = createPromiseWithTimeout2();
// console.log(x);
// console.log("end");