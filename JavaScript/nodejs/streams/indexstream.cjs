const fs = require('fs');
const TransFormStream = require('stream').Transform;

const readstream = fs.createReadStream(__dirname + '/run.txt');
// if we want to tranform the stream as well (toUpperCase , here):-
const transFormedStream = new TransFormStream({  // constructer takes i=object as input
    transform(chunk, enc, cb){
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 3000); // to process all chunks we have call the cb , otherwise it will read it will only process first chunk
    }
});
const writestream = process.stdout;

readstream
.pipe(transFormedStream)
.pipe(writestream);