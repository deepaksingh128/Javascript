// In JS , except one case(when this is inside arrow function) , this refers
// to the calling side/context(who is calling). Inside arrow function 'this' is
// resolved using lexical scoping i.e. it look one scope outside arrow function
// what this means there , if that is also arrow function , then it go to one more 
// scope outside .... 

let iphone = {
    name : "Iphone 13 pro",
    price : 100000,
    rating : 4.8,
    display(){
        console.log("First display ", this);
    }
}

let macBook = {
    name : "MacBook M2",
    price : 125000,
    rating : 4.9,
    display(){
        console.log("Second display ", this);
    }
}

iphone.display();
macBook.display();