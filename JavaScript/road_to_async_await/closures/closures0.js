function process(){
    let i = 0;
    function innerProcess(){
        i += 1;
        return i;
    }
    return innerProcess;  // not calling, just returning
}

let res = process();    // it will return innerProcess

console.log(res);

console.log("Calling First time: ", res());
console.log("Calling second time: ", res());
console.log("Calling third time: ", res());