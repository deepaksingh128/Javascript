class Product {
    #name;   // private
    #price;
    description;

    constructor(n, p, d) {
        this.#name = n;   // private 
        this.price = p;
        this.description = d;
        this.display = function (){
            console.log("name: " + this.#name + ", price: " + this .price);
        }
    }

    // setName(n) {
    //     if(typeof(n) !== 'string'){
    //         console.log("Invalid name passed");
    //         return;
    //     }
    //     this.#name = n;
    // }
    // Better syntax for stter in JS :-
    set name(n){
        if(typeof(n) !== 'string'){
            console.log("Invalid name passed");
            return;
        }
        this.#name = n;
    }

    setPrice(p) {
        if(p < 0) return;
        this.#price = p;
    }

    // getName() {
    //     return this.#name;
    // }
    // Better syntax of getter in JS:-
    get name(){
        return this.#name;
    }

    
}

const p = new Product("bag", 100, "cool bag");
p.name = "bottle"; // it will add new property , and not modify the value of name property ,
             // because name is a private property. To access it we can use getters and setters
p.description = "hot bag";  // it will modify the value of description ,
                            // since description is not a private property
console.log(p);   // private properties will not be accessed here also

// console.log(p.getName());
console.log(p.name = "bag2");  // can access like property with other syntax of setter

console.log(p.name);  // getter calling like a property , not like a function

p.display();