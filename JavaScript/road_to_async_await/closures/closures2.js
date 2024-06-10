function Do(task){
    setTimeout(function exec(){
        console.log(task);     // exec will remember task
    }, 2000);                  // even whwn Do() has completed its 
}                              // execution and came out of the stack

Do("closure");
console.log("end");