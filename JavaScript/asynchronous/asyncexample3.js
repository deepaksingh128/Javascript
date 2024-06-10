console.log("Hello world \n");
for(let i=0; i<3; i++){
    setTimeout(function exec(){
        console.log("Timer done");
    }, 10);
}

for(let i=0; i<2; i++){
    console.log("Running loop");
}
console.log("\n end \n");