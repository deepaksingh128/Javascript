var teacher = "Sanket";        // parsing phase : since formal declaration
function fun(){
    var teacher = "Pulkit";     // parsing phase : since formal declaration
    content = "JS";             // autoglobaling during execution phase , since it is not in formal declarations
    console.log(teacher);
}
function gun(){
    var student = "Sarthak";    // parsing phase : since formal declaration
    console.log(student);
}

// console.log(content);        // error 
fun();
gun();
console.log(teacher);
console.log(content);         // no error