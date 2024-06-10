// Note :- Run it inside browser console for better understanding

function* fetchNextElement(){
    console.log("Inside generator");
    const x = 10;
    console.log(yield 11); // 55 , since iter.next(55) return 55 at previous yield and resumes
                           // and hence console.log(55) will be executed now
    yield {name : "Deepak"};
    console.log("entering after a yield");
    const y = x + (yield 30);
    console.log("value of y is", y);
}

console.log("Start");

const iter = fetchNextElement();
console.log("called generator");
console.log("first", iter.next()); // by default , undefined will be returned at previous yield
console.log("second", iter.next(55));   // 55 will be returned at previous yield and resumes execution
console.log("third", iter.next(17)); // it will return 17 at previous yield
console.log("fourth", iter.next(70));  // it will return 70 at previous yield and resumes
                                      // and hence expression will be executed now and
                                      // y becomes 80 now only , not in previous yield