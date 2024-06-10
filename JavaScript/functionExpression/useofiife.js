function x(){
    console.log("Wow");
}

// this will override the above function
// therefore to avoid this use IIFE
/*function x(y){
    console.log("hi", y);
}
*/
(function x(y){
    console.log("hi", y);
})("Deepak");

// x("Deepak");           // wow
x();                   // wow