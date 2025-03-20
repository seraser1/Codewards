// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

// The following is an example of how the final code would be used and what the expected return values should be:

// let dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // should == 'dog'
// dog.name; // should == 'Max'
// dog.name = 'Lassie'; // should set name to 'Lassie'

class Animal {
    #name
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    get name() {
        return this.#name
    }

    set name(val){
        if(typeof val === 'string') this.#name = val
        else throw console.error('ssory...')
    }

    toString = () => `${this.name} is a ${this.type}`
}

const dog = new Animal('Max', 'dog');
console.log(dog.toString()); // should return 'Max is a dog'
console.log(dog.type); // should == 'dog'
console.log(dog.name); // should == 'Max'
dog.name = 'Lassie';
console.log(dog.name); // should set name to 'Lassie'







