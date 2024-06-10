
// without strict mode 
// if we use strict mode fun will get block scope
{
    function fun(){             // global scope
        return "123";
    }
}

console.log(fun());    // no error