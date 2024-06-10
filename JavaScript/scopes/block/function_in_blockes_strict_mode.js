"use strict";
{
    function fun(){   // cannot be accessed outside block , block scope
        return "123";
    }
}

console.log(fun());    // error