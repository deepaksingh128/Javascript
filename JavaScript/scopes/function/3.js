function fun(){
    console.log(y);              // error (if we call fun) , block scope (since let)
                                 // cannot be accessed before declaration
    let y = 2;                         // no hoisting
}

fun();
console.log(y);