// custom iterator :-

function fetchnextelement(array){
    let idx = 0;
    function next(){
        if(idx == array.length){
            // return undefined;
            return {value : undefined, done: true};
        }
        const nextElement = array[idx];
        idx++;
        // return nextElement;
        return {value : nextElement, done : false};
    }
    return {next};
    // return next;         // error in writing like this : automaticfetcher.next()
}


// somewhere we have to consume it
const automaticfetcher = fetchnextelement([99,10,12,14,16,0]); // inside automaticFetcher 
            // variable we can store we can store next function 
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());
console.log(automaticfetcher.next());