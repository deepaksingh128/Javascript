// Now , one important function exist , which is a listener function ,
//  every http request is listened via this function , most of the move arround 
// this listener function only.
// This listener function can take two arguments : (request, response) , these
// arguments are going to be extremely powerful , because using the request argument 
// we will be able to see details of incoming http request and using the response 
// argument we will be able to configure what response we need to send for an 
// incoming http request , request -> object  , reponse -> object

const http = require('http');

const PORT = 3001;


const server = http.createServer(function listener(request, response){ // request listener function

    if(request.url == '/home'){
        // if we make a request on /home , this if block will be executed
        response.write("First response 1");  // can be used send response
        response.write("First response 2");// can be used multiple times , but need .end() to end the response
        response.end("Welcome to home"); // this function expect string as input
        // response.end({message : "hello"}); // error 
    }
    // console.log("Incoming request details ", request);  // object
    // console.log("Response object details ", response); // object
    console.log("Request recieved");
});


server.listen(PORT, function exec(){
    console.log(`Server is up and running on PORT: ${PORT}`);
})