// notHoisted(); // TypeError: notHoisted is not a function
console.log(notHoisted);           // undefined

var notHoisted = function () {
  console.log("bar");
};

console.log(typeof(notHoisted));        // function
console.log(notHoisted);                // [Function: notHoisted]

notHoisted();                         // bar