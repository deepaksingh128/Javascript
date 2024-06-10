// middleware in express js :-
// Why middlewares are important :- Actually middlewares are first line of defence
// Middlewares are part of controller , last middleware is the one who is sending the request to
// the backend and get the proccessed result and send back , this is the who do the job done 
// (so it is the main controller here). the other middlewares sends request to one 
// another therefore we have seperate folders for middlewares and controllers


// Middlewares do the request validation :- let say user send a post request , then these middlewares
// check whether the request is in proper format or not and other things , and if any problem in the request , 
// then this request does not send to next middlewares .
// If no middleware is there for request validation and the request is not correct then the request will be forwarded to 
// model and model throws error back to cotroller and hence came to user , it seems like this is the error of the controller
// but , in this case it the wrong request send . Also if backend sends error in this case , there might be security threat 
// to the backend , because it might possible that some secure information is exposed in sending errors from backend itself .
// thrown from the server side may contain some data that may lead to security threat for the server itself , i.e. error

// We should have request valindation in the server side , not in the frontend side 

// Once the request validation is done , now the controlller (last middleware) come into picture. 
const express = require("express");

const PORT = 3000;
const app = express();  // creates a express server object

const myLogger = (request, response, next) => {
    console.log("Logging from middleware 1");
    next();  // calls the next middleware
}

const externalLogger = (request, response, next) => {
    console.log("Logging from middleware 2");
    // returning the response from here itself 
    return response.json({
        message : "OK Done from middleware 2"
    })
    next();
}


// We call the middlewares (comma seperated) by passing as an argument to last middleware :-
// We can make an array of middlewares and pass the array itself ,
// When a request come, these middlewares will start executing one by one 
// and when the resonse get returned , stop the execution of further middlewares .

const middlewares = [myLogger, externalLogger];  // making an array of middlewares
app.get('/home', middlewares ,(request, response) => {
    console.log("Last middleware");
    response.json({
        message : "OK get"
    });
    // last middleware does not have next
})


app.listen(PORT , function (){
    console.log("Server is running on port ", PORT);
});