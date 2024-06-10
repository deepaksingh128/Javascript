console.log(name);
var name = "Deepak";                  // using var keyword : undefined is get printed by above statement
                                      // because in parsing phase : scope resolution phase
                                      // by default value is undefined 

function fun(){
    console.log(name);
}

fun();
console.log(name);