// Note :- We can read and write chunks parallely as well :-
// Reading from run.txt and writing into write.txt chunk by chunk parallely

const fs = require('fs');
const TransFormStream = require('stream').Transform;

const readstream = fs.createReadStream(__dirname + '/run.txt');
const fileWriteStream = fs.createWriteStream(__dirname + '/write.txt');

// if we want to tranform the stream as well (toUpperCase , here):-
const transFormedStream = new TransFormStream({  // constructer takes i=object as input
    transform(chunk, enc, cb){
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 3000); // to process all chunks we have call the cb , otherwise it will read it will only process first chunk
    }
});

const writestream = process.stdout;
const outputStream = readstream.pipe(transFormedStream);


outputStream.pipe(writestream);
outputStream.pipe(fileWriteStream);