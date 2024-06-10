// console.log(this); // global context :- {}

const iphone = {
    name : "Iphone",
    price : 100000,
    category : "electronics",
    display : () => {               
        console.log(this); // inside arrow function , therefore (lexical scoping) move one 
                           // scope out of current object , and finds global scope :- {}
    }
}

const macBook = {
    name : "MacBook",
    price : 125000,
    category : "electronics",
    display : function () {         // normal function : calling context 
        console.log(this);
    }
}

iphone.display();
macBook.display();