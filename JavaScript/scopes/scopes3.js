var teacher = "Sanket";
function fun(){
    var teacher = "Pulkit";
    content = "JS";       // not a formal declaration : autoglobaling during execution phase
    console.log(teacher);
    console.log(content);
}

function gun(){
    var student = "Sarthak";
    console.log(student);
}

// console.log(content);  // error, since before fun() call , no autoblobling(since it happens during execution phase)
fun();
gun();
console.log(teacher);
console.log(content);
