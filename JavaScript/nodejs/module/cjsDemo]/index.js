const searchFunctions = require('./searching');
// We can also destructure the object :-
// const {linearSearch : LS, binarySearch : BS} = require('./searching'); // with Alias

console.log(searchFunctions);
console.log(searchFunctions.linearSearch([1,2,3,4,5], 3));
console.log(searchFunctions.binarySearch([1,2,3,4,5], 3));

// other ways to require
const {linearSearch} = require('./searching'); // unpack
console.log(linearSearch([1,2,3,4,5], 3));

const {linearSearch : ls} = require('./searching'); // alias
console.log(ls([1,2,3,4,5], 3));

