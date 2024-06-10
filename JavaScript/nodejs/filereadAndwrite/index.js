// Reading and writing file using nodejs fs module :-

// import * as fs from 'node:fs/promises'; // it will import everything

import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
// console.log(import.meta.url);  // current filePath


const filePath = new URL('./index.html', import.meta.url); // URL object
let contents = await readFile(filePath, { encoding : 'utf8'});
// console.log(contents);  // whole code will be printed from index.html


// Let we want to write code for a template that we have 
// created in index.html file

const data = {
    name : "Deepak Singh",
    company : "Microsoft",
    age : 24
}

const futureData = {
    name : "Deepak Singh",
    company : "Google",
    age : 26
}

const futureData2 = {
    name : "Deepak Singh",
    company : "Own company",
    age : 30
}

for(const [key , value] of Object.entries(data)){
    contents = contents.replace(`{${key}}`, value);
}

for(const [key, value] of Object.entries(futureData)){
    contents = contents.replace(`{{${key}}}`, value);
}

for(const [key, value] of Object.entries(futureData2)){
    contents = contents.replace(`#{${key}}`, value);
}

console.log(contents);



// writeFile  : It will create a new file in the same folder
//              with name newindex.html and having content
//              same as contents
await writeFile(new URL('./newindex.html', import.meta.url), contents);