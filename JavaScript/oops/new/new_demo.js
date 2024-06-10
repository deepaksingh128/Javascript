// Note :- In JS , 'new' keyword creates brand New, Plain, Empty object.
// constructor is first method which gets called 

class Product {
    // no need to specify property names ,
    // if we have used them in construcor :-
    // name;
    // price;
    // description;

    // Constructor in JS :- constructor keyword is used 
    // Constructor overloading is not allowed in JS
    // we have default constructor in JS as well
    
    constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;
        // return 10;
        // return "10";
        // return {}
        // return {x : 10};
        // return this;
    }
}

const p = new Product("bag", 100, "cool bag");
console.log(p);