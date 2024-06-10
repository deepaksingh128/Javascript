const iphone = {
    name : "Iphone",
    price : 100000,
    display : function () {
        let iphoneRed = {
            name : "Iphone red",
            price : "100000",
            print : function () {  // normal function : calling context
                console.log(this);
            }
        }
        iphoneRed.print();
    }
}

const iphone2 = {
    name : "Iphone",
    price : 100000,
    display : function () {
        let iphoneRed = {
            name : "Iphone red",
            price : "110000",
            print : () => {          // arrow function , lexical scoping , move one scope outside
                console.log(this);   // and search who corresponds to this , here iphone2
            }
        }
        iphoneRed.print();
    }
}

const iphone3 = {
    name : "iphone",
    price : 100000,
    display : () => {             // one scope out is also an arrow function , therefore
        let iphoneRed = {         // move one scope ooutside from here also and get global scope ,
            name : "Iphone red",  // and in node global scope :- {} object , in chrome :- Window{ .... } object
            price : "110000",
            print : () => {
                console.log(this);
            }
        }
        iphoneRed.print();
    }
}

iphone.display(); // nearest scope
iphone2.display(); // one scope outside
iphone3.display();   // one more scope outside :- global scope :- {}