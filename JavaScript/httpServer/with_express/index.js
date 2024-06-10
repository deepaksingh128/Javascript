const express = require("express");

const port = 3002;

const app = express();


app.get('/home', function (request, response){
    // this is a middleware function
    response.send("Hi there , welcome to get");
    // * We can send json as response also
    // response.json({
    //     message : "OK get"
    // });
});

app.post('/home', function (request, response){ 
    // middleware function :
    response.send("Hi there, welcome to post");
    // response.json({
    //     message : "OK post"
    // });
});


// it will boot up the server at respective port
app.listen(port, function listen(){
    console.log("Example app is listening to port: ", port);
});