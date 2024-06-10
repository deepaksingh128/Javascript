var teacher = "Sanket";
function fun(){
    console.log(teacher);  // no error , undefined(since access before declaration(var,hence ok))
    // console.log(content);  // error : ReferenceError

    var teacher = "Pulkit";
    let content = "JS";        // block scope : can be used within block or block inside this block , post declaration

    if(content == "JS"){
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher, content);
}

fun();
console.log(teacher);

// console.log(content);        // error