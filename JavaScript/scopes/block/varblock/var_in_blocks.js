function fun(){
    var i = 5;
    while(i < 10){
        var x = i;       // fun scope  , it does not recognize block scope
        i++;
    }
    console.log(x);
}

fun();
let i = 1;        // global scope
console.log(y);   //  no error , undefined
while(i < 5){
    var y = 10;    // global scope, since var does not recognize block scope
    i++;
}
console.log(y);