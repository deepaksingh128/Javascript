function fetchData(url){
    return new Promise(function executer(resolve, reject){
        console.log("Started downloading from ", url);

        setTimeout(function processDownloading(){
            let data = "Dummy data";
            
            resolve(data);
            // difference
            console.log("Download completed"); // since processDownloading is in the stack,
                                        // this line will be executed , then microtask 
                                        // callback will be executed
        },7000);
    });

}

console.log("Start");

let promiseObj = fetchData("skfbjkdjbfv");
promiseObj.then(function A(value){
    console.log("value is ", value);
});

console.log("End");