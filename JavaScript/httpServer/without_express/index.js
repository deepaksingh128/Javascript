const http = require('http'); // requiring the http module

const PORT = 3000;  // make sure to use one of the available ports

// Using the createServer function we can actually create a basic http server using
// http module. This function returns a server object and takes a callback as an argument.
// This function created a server object but did not start the server , because we have to tell
// on which port we want to start the server
const server = http.createServer(function requestListener(){
   // this callback is a kind of listener function that is going to collect 
   // every http request that we will make to our server.
   // Since we have tell here now , what to do as response , therefore the page will
   // kept running....tab me gol gol ghutma rahega (since we have not configure the response).
   console.log("Request Recieved");  // it will logged on node terminal (i.e. at server side
                                   // when a request come)

});

// What we want is that when we run this index.js file , we should be able to run an http
// server ,
// Since any program that we execute in our computer becomes a process , now if any 
// exeternal environment , any exeternal calls needs to communicate to a process , then 
// every process is communicated via a port number (any process is uniquely identified by
// a port number), so what we need to do is , we have to bind this server object 
// with a port.

server.listen(PORT, function exec() {
	// once we successfully boot up the server on the given port, this callback will be
	// executed.
	console.log(`Server is up and running on PORT: ${PORT}`);
});

// NOTE :- We can write multiple APIs in a server , but an API does not always need a server ,
//         for example browser APIs (setTimeout, getElementById ...) do not need a server.

// WE can request it from terminal as well (then terminal will be acting like a server)
//Since it running on our machine , we have not hosted it somewhere on the internet .

// We can request to this server without using internet i.e. we do not need internet connection to request 
