
function createPromise(){
    return new Promise(function executer(resolve, reject){
        // Note : setTimeout immediately return Timer ID  (in node: object, browser: number)
        let x = setTimeout(function exec(){
            console.log("Inside the timer");
            return 2;
        }, 3000);

        console.log(x);       // object
        if(x % 2 == 0){
            resolve("successful");
        }else{
            reject("unsuccessful");
        }
    });
}

// Consumption :-
// const p = createPromise();
// console.log(p);