"use strict";
var teacher = "Sanket";        // parsing phase
function fun(){
    var teacher = "Pulkit";     // parsing phase
    content = "JS";             // no autoglobals take place, during execution phase , since it is in strict mode
    console.log(teacher);
}
function gun(){
    var student = "Sarthak";    // parsing phase
    console.log(student);
}

fun();
gun();
console.log(teacher);
console.log(content);