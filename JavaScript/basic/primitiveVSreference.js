// string is primitive type 
var name = "Deepak";
console.log(name);

var secondName = name;

name = "Deepesh";
console.log(secondName);

// Objects, arrays .. are referenced typed
var person = {
    age : 23,
    name : 'Deepak',
    hobbies : ['Sports', 'Teaching']
};

var thirdPersion = {
    age : 23,
    name : 'Deepak',
    hobbies : ['Sports', 'Teaching']
};

var place = {
    name2 : 'indore',
    landmarks : ['vijaynagar', 'palasia']
}


// var secondPerson = person;
var secondPerson = Object.assign(place, person); //create deep copy of second argument but since array is referenced type it will be refered
console.log(secondPerson);                         // shallow copy of first argument

var myHobbies = person.hobbies.slice(); // deep copy

person.name = 'Shiva';
place.name2 = 'MHOW';
person.hobbies.push('Reading');
place.landmarks.push('LIG');

console.log(secondPerson);

console.log(myHobbies);