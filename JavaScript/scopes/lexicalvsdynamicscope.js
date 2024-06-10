var teacher = "Sanket";   // teacher -> global -> Sanket
function ask(question){   // ask -> global, question -> ask -> why?
    console.log(teacher, question);  // Sanket why?
}

function fun(){               // fun -> global
    var teacher = "Pulkit";    // teacher -> fun -> Pulkit
    ask("why?");               
}

fun();